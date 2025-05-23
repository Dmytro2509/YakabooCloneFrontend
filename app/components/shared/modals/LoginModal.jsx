"use client"

import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import useLoginModalStore from '@/app/stores/LoginModalState';
import { LoginWithGoogleBtn } from '..';
import useRegisterModalStore from '@/app/stores/RegisterModalState';
import { Endpoints } from '@/app/endpoints';
import { setCookie, validateEmailRegex } from '@/app/utils';

export const LoginModal = ({ afterClose=null }) => {
   const { setIsLoginModalOpen } = useLoginModalStore() 
   const [serverError, setServerError] = useState(null)
   const [emailError, setEmailError] = useState(null)
   const { setIsRegisterModalOpen } = useRegisterModalStore()
   const { register, handleSubmit, formState: { errors }, getValues } = useForm();
   const [infoMessage, setInfoMessage] = useState(null);
   const [isButtonDisabled, setIsButtonDisabled] = useState(false);

   const [showPassword, setShowPassword] = useState(false)

   const TWO_MINUTES = 2 * 60 * 1000;

   const changePasswordVisibility = () => {
    if(!showPassword){
        setShowPassword(true)
    } else {
        setShowPassword(false);
    }
   }

   const onSubmit = async data => {
    try {
        const result = await loginUser(data);
    } catch (error){
        setServerError(error)
    }
   }

   const handleCloseModal = () => {
    setIsLoginModalOpen(false);
    if (afterClose) {
        afterClose();
        }
    };


    const handleUserForgotPassword = async (event) => {
        event.preventDefault();
        setServerError(null);
        const email = getValues("email");

        if(!email) {
            setEmailError("Це поле обов'язкове")
        } else if(!validateEmailRegex(email)) {
            setEmailError("Неправильний формат email")
        } else {
            try {
                setEmailError(null);
                const response = await fetch(Endpoints.changePasswordWithEmail, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user_email: email
                    })
                });
                if(response.ok) {
                    const resp = await response.json();
                    setInfoMessage(`Відправили вам оновлений пароль на email: ${email}`);

                    setTimeout(() => {
                        setInfoMessage(null);
                    }, 10000);

                    setIsButtonDisabled(true);
                    setTimeout(() => setIsButtonDisabled(false), TWO_MINUTES)
                } else {
                    const error = await response.json();
                    console.error(error);
                }
            } catch(error){
                console.error(error);
            }    
        }
    }


   const loginUser = async (data) => {
    try {
        const response = await fetch(Endpoints.userLogin, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            setServerError(errorData.detail || "Невідома помилка");
            throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
            const result = await response.json();
            const access_token = result.access_token
            const refresh_token = result.refresh_token
            setCookie("access_token", access_token, 30)
            setCookie("refresh_token", refresh_token, 60 * 24 * 7)
            setCookie("token_type", result.token_type)
            setCookie("email", result.user.email)
            setCookie("first_name", result.user.first_name)
            setCookie("last_name", result.user.last_name)
            setCookie("phone_number", result.user.phone_number)
            setServerError(null)
            setIsLoginModalOpen(false)
        }
    } catch (error) {
        console.error(error)
        setServerError("Помилка сервера");
    }
   }

   const onRegisterBtnClick = () => {
    setIsLoginModalOpen();
    setIsRegisterModalOpen()
   }

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex w-full h-full z-20 cursor-auto">
        <div className="bg-white rounded-lg shadow-sm absolute top-[21%] right-[38%] w-[500px] h-auto flex flex-col gap-2 py-7 overflow-y-auto
        text-center">
            <button className="p-2 rounded-full text-gray-800 hover:bg-gray-200 text-center cursor-pointer justify-center items-center absolute 
            top-[1%] right-1"
            onClick={ handleCloseModal }>
                <IoCloseSharp size={17} />
            </button>

            <div className="relative rounded-full p-2 bg-[#EA33C0] text-center justify-center w-[40px] h-[40px] cursor-pointer mx-auto">
                <CiUser size={22} className="text-white ml-[1px]" />
            </div>
            <h1 className="font-semibold">
                Вхід до акаунту
            </h1>
            <p className="text-center max-w-[74%] mx-auto text-[0.9rem] text-gray-600">
                Щоб слідкувати за статусом замовлення та отримувати індивідуалізовані рекомендації
            </p>
            <LoginWithGoogleBtn />
            <div className="w-[60%] flex flex-row items-center gap-1 mx-auto mt-1">
                <div className="w-[45%] h-[1px] bg-gray-200" />
                <p className="w-[10%] text-gray-600 text-[0.9rem] font-semibold">або</p>
                <div className="w-[45%] h-[1px] bg-gray-200" />
            </div>
            <form className="flex flex-col gap-4 w-[60%] mx-auto mt-1" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2 text-[0.9rem] text-black text-left">
                    <label htmlFor="email" className="font-extrabold">
                        Електронна пошта*
                    </label>
                    <input name="email" id="email" className="bg-gray-100 border border-gray-200 rounded-md h-[50px] 
                    px-[3%] w-full hover:bg-white"
                    placeholder="Введіть email" 
                    {...register("email", {
                        required: "Це поле обов'язкове",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Некоректний email"
                        }
                    })} />
                     <div className="h-[15px] w-full">
                        { errors.email && <span className="text-red-500">{ errors.email.message }</span> }    
                        { emailError && <span className="text-red-500">{ emailError }</span> }
                    </div>
                    { serverError && (
                        <span className="text-red-500 w-full text-left h-[15px] -mt-3">{ serverError }</span>
                    ) }
                </div>
                <div className="flex flex-col gap-2 text-[0.9rem] text-black text-left relative">
                    <div className="flex flex-row justify-between">
                        <label htmlFor="password" className="font-extrabold">
                            Пароль
                        </label>
                        <button className={`font-semibold
                        ${isButtonDisabled ? "cursor-not-allowed text-gray-500 hover:text-gray-500" : "cursor-pointer text-gray-600 hover:text-blue-600 "}`}
                        type='button'
                        disabled={isButtonDisabled}
                        onClick={handleUserForgotPassword}>
                            Забули пароль?
                        </button>
                    </div>
                    <input name="password" id="password" type={`${showPassword ? "text": "password"}`} 
                    className="bg-gray-100 border border-gray-200 rounded-md h-[50px] 
                    px-[3%] w-full hover:bg-white" autoFocus={false}
                    placeholder="Введіть пароль" {...register("password", {required: "Це поле обов'язкове"})} />
                    { showPassword ? (<IoMdEyeOff size={17} className="absolute right-3 top-12 cursor-pointer" 
                    onClick={() => changePasswordVisibility()} />) :
                    (<IoMdEye size={17} className="absolute right-3 top-12 cursor-pointer" onClick={() => changePasswordVisibility()} />) }
                    { serverError && (
                        <span className="text-red-500 w-full text-left h-[15px] -mt-3">{ serverError }</span>
                    ) }
                </div>

                {infoMessage && (
                    <div className="rounded-md bg-[#f5f5f5] text-left text-sm text-black pt-[4%] pb-[2%] px-[2%] border-2 border-grau-500 relative">
                        <span className="absolute top-1 right-0 w-[20px] h-[20px] border border-gray-500 rounded-full pb-[20px] 
                        text-center cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-in"
                        onClick={() => setInfoMessage(null)}>x</span>
                        { infoMessage }
                    </div>
                )}

                <button type="submit" className="w-full rounded-md text-center text-[0.9rem] text-white mt-1 font-semibold py-4 bg-blue-900">
                    Увійти
                </button>
            </form>

            <p className="text-[0.9rem] mt-3 font-semibold text-black">
                Немає акаунту? <button className="text-blue-800 hover:underline"
                onClick={() => onRegisterBtnClick()}>
                    Зареєструватись
                </button>
            </p>
        </div>
    </div>
  )
}
