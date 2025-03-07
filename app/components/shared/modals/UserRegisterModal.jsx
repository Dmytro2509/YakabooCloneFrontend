"use client"

import useRegisterModalStore from '@/app/stores/RegisterModalState'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css'
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { IoCloseSharp } from 'react-icons/io5'
import { CiUser } from 'react-icons/ci'
import Link from 'next/link'
import { FaSpinner } from "react-icons/fa6";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { Endpoints } from '@/app/endpoints';
import { FlashMessages } from '..';
import useSendingCodeStore from '@/app/stores/SendingCodeState';

export const UserRegisterModal = () => {

    const { setIsRegisterModalOpen } = useRegisterModalStore()
    const {  setIsSendingCodeModalOpen } = useSendingCodeStore()
    const [selectedCountry, setSelectedCountry] = useState("UA")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [serverError, setServerError] = useState(null)
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();


    const handleCountryChange = code => {
        setSelectedCountry(code)
    }

    useEffect(() => {
        const handleOpen = () => {
            document.body.classList.add("overflow-hidden")
        };

        const handleClose = () => {
            document.body.classList.remove("overflow-hidden")
        }

        handleOpen()

        return () => {
            handleClose()
        }
    }, [])

    const onSubmit = async data => {
        try {
            const result = await registerUser(data);
        } catch (error){
            setServerError(error)
        }
    }

    const validatePhoneNumber = (value) => {
        const phoneNumber = parsePhoneNumberFromString(value);
        return phoneNumber && phoneNumber.isValid();
    };

    const setCookies = (name, value) => {
        document.cookie = `${name}=${value || ""}; path=/`;
    }

    const registerUser = async data => {
        try {
            setLoading(true)
            const response = await fetch(Endpoints.userRegister, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok){
                console.log(response)
                if(response.status === 400){
                    setServerError("Користувач з таким email уже зареєстрований")    
                } else if(response.status === 500){
                    setServerError("Помилка сервера")
                } else if(response.status === 409){
                    setServerError("Користувач з таким номером телефону уже зареєстрований")
                } else if(response.status === 422){
                    setServerError("Помилка сервера")
                }
                
            } else {
                const result = await response.json()
                console.log(result)
                setCookies("phone_number", result.phone_number);
                setCookies("first_name", result.first_name)
                setCookies("last_name", result.last_name)
                setCookies("email", result.email)
                setServerError(null)
                setIsRegisterModalOpen(false)
                setIsSendingCodeModalOpen(true);
            }
        } catch (error){
            console.log(error)
            setServerError(`Помилка сервера`)
        } finally {
            setLoading(false)
        }
    }


  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex w-full h-full z-20 cursor-auto">
        <div className="bg-white rounded-lg shadow-sm absolute top-[8%] right-[35%] w-[550px] h-[900px] flex flex-col gap-2 py-7
        text-center">
            { serverError && <FlashMessages message={ serverError } onClose={() => setServerError(null)} />}
            <button className="p-2 rounded-full text-gray-800 hover:bg-gray-200 text-center cursor-pointer justify-center items-center absolute 
            top-[1%] right-1"
            onClick={ setIsRegisterModalOpen }>
                <IoCloseSharp size={17} />
            </button>

            <h1 className="font-bold">
                Реєстрація
            </h1>
            <div className="relative rounded-full p-2 bg-[#EA33C0] text-center justify-center w-[40px] h-[40px] cursor-pointer mx-auto">
                <CiUser size={22} className="text-white ml-[1px]" />
            </div>
            <form className="flex flex-col gap-3 w-[70%] mx-auto text-[0.9rem]" onSubmit={ handleSubmit(onSubmit) }>
                <div className="flex flex-col gap-1 text-left w-full">
                    <label className="font-bold" htmlFor="first_name">
                        Ваше ім'я *
                    </label>
                    <input className={`h-[45px] border bg-gray-100 rounded-md px-5 hover:bg-white w-full
                    ${ errors.first_name ? "border-red-600" : "border-gray-200" }`}
                    name="first_name" id="firstName" placeholder="Введіть ваше ім'я" 
                    {...register("first_name", 
                        { required: "Це поле обов'язкове",
                          pattern: {
                            value: /^[A-Za-zА-Яа-яЇїІіЄєґҐ\-\'']+$/,
                            message: "Використовуйте лише літери, апостроф чи дефіс"
                          }  
                        })}
                    />
                    { errors.first_name && (
                        <div className="h-[15px] w-full">
                            <span className="text-red-500 font-semibold">{ errors.first_name.message }</span>    
                        </div>    
                    ) }
                </div>
                <div className="flex flex-col gap-1 text-left w-full">
                    <label className="font-bold" htmlFor="last_name">
                        Ваше прізвище * 
                    </label>
                    <input className={`h-[45px] border  bg-gray-100 rounded-md px-5 hover:bg-white w-full 
                    ${ errors.last_name ? "border-red-600": "border-gray-200" }`} 
                    name="lastName" id="last_name" placeholder="Введіть ваше прізвище" 
                    {...register("last_name", 
                        { required: "Це поле обов'язкове",
                          pattern: {
                            value: /^[A-Za-zА-Яа-яЇїІіЄєґҐ\-\'']+$/,
                            message: "Використовуйте лише літери, апостроф чи дефіс"
                          }
                         })}
                    />
                    { errors.last_name && (
                        <div className="h-[15px] w-full">
                            <span className="text-red-500 font-semibold">{ errors.last_name.message }</span>   
                        </div>    
                    ) }
                    
                </div>
                <div className="flex flex-col gap-1 text-left w-full">
                    <label className="font-bold" htmlFor="phone_number">
                        Номер телефону *
                    </label>
                    <div className="flex flex-row items-center gap-0 w-full relative h-[45px] bg-gray-100 border border-gray-200 rounded-md">
                    <PhoneInput className="h-[45px]"
                        country={selectedCountry.toLowerCase()}
                        disableDropdown={false}
                        inputStyle={{"height": "45px", "width": "100%", "backgroundColor": "#f3f4f6", "border": "1px solid #e5e7eb"}}
                        buttonStyle={{"padding": "0px 3px", "border": "1px solid #e5e7eb"}}
                        onChange={phone => setValue("phone_number", phone)}
                        preferredCountries ={["ua"]}
                        excludeCountries={["ru"]}
                        minLength={8}
                    />
                    <input type="hidden" {...register("phone_number", {
                        required: "Номер телефону обов'язковий",
                        validate: validatePhoneNumber
                    })} />
                    </div>
                    { errors.phone_number && (
                        <div className="h-[15px] w-full">
                            <span className="text-red-500">{ errors.phone_number.message }</span>
                        </div>    
                    ) }
                    
                </div>
                <div className="flex flex-col gap-1 text-left w-full">
                    <label className="font-bold" htmlFor="email">
                        Електронна пошта *
                    </label>
                    <input className={`w-full h-[45px] border  bg-gray-100 hover:bg-white px-5 rounded-md
                    ${ errors.email ? "border-red-600": "border-gray-200" }`}
                    name="email" id="email" type="email" placeholder="Введіть email"
                    {...register("email", {
                        required: "Це поле обов'язкове",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Некоректний email"
                        }
                    })}
                    />
                    { errors.email && (
                        <div className="h-[15px] w-full">
                            <span className="text-red-500 font-semibold">{ errors.email.message }</span>   
                        </div>
                    ) }
                    
                </div>
                <div className="flex flex-col gap-1 text-left w-full relative">
                    <label className="font-bold" htmlFor="password">
                        Пароль *
                    </label>
                    <span className="text-[0.8rem] text-gray-500">
                        Не менше восьми знаків без урахування пробілів на початку та в кінці
                    </span>
                    <input className={`w-full border h-[45px]  bg-gray-100 rounded-md hover:bg-white px-5 
                    ${ errors.password ? "border-red-600" : "border-gray-200" }`}
                    name="password" id="password" type={`${ showPassword ? "text": "password" }`} placeholder="Введіть пароль"
                    {...register('password', {
                        required: "Це поле обов'язкове",
                        minLength: {
                            value: 8,
                            message: "Пароль повинен містити не менше 8 символів"
                        }
                    })}
                    />
                    {
                        showPassword ? (
                            <IoEyeOutline size={18} className={`absolute cursor-pointe right-5 ${errors.password ? "bottom-[41px]": "bottom-[14px]"}`} 
                            onClick={() => setShowPassword(false) } />
                        ) : (
                            <IoEyeOffOutline size={18} className={`absolute cursor-pointe right-5 ${errors.password ? "bottom-[41px]": "bottom-[14px]"}`} 
                            onClick={() => setShowPassword(true) } />   
                        )
                    }
                    { errors.password && (
                        <div className="w-full h-[25px]">
                            <span className="text-red-500 font-semibold">{ errors.password.message }</span>   
                        </div>    
                    ) }
                    
                </div>
                <div className="flex flex-col gap-1 mt-2">
                    <div className="flex flex-row items-center gap-1">
                        <input type="checkbox" className="w-[15px] h-[15px] rounded-mg bg-gray-100 border border-gray-200 hover:border-pink-500
                        cursor-pointer" 
                        name="agree" id="agree"
                        { ...register("agree", { required: "Ви повинні погодитись з умовами використання" }) }
                        />
                        <label className="font-semibold" htmlFor="agree">
                            Погоджуюсь з <Link href="#" className="text-blue-800">умовами використання</Link>
                        </label>
                    </div>
                    { errors.agree && (
                        <div className="w-[full] h-[15px]">
                            <span className="text-red-500 font-semibold">{ errors.agree.message }</span>
                        </div>    
                    ) }
                    
                </div>
                <span className="text-[0.8rem] text-gray-600 font-semibold text-left">
                    Реєструючись, ви погоджуєтесь на зберігання і використання компанією "Якабу Рітейл" наданих вами
                    особистих даних відповідно до чинного законодавства України про недоторканість особистої інформації.
                </span>
                <button className={`w-full rounded-md  text-[0.8rem] font-semibold py-3 
                transition-all duration-300 ease-in mt-1
                ${ loading ? "bg-gray-500 cursor-not-allowed text-white" : "bg-blue-800 text-white hover:bg-blue-900" }
                `} type="submit" disabled={ loading }>
                    { loading ? <FaSpinner className="animate-spin mx-auto" size={20} /> : "Зареєструватись" }
                </button>
            </form>
            <p className="text-center mt-2 text-[0.9rem] font-semibold">
                Вже маєте акаунт?
                <span className="text-blue-800 cursor-pointer hover:underline text-[0.9rem] font-semibold">
                    Увійти
                </span>
            </p>
        </div>
    </div>
  )
}