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

export const LoginModal = ({ afterClose=null }) => {
   const { setIsLoginModalOpen } = useLoginModalStore() 
   const [serverError, setServerError] = useState(null)
   const { setIsRegisterModalOpen } = useRegisterModalStore()
   const { register, handleSubmit, formState: { errors }, setValue } = useForm()

   const [showPassword, setShowPassword] = useState(false)

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
            access_token = result.access_token
            refresh_token = result.refresh_token
            sessionStorage.setItem("access_token", access_token)
            sessionStorage.setItem("refresh_token", refresh_token)
            setServerError(null)
        }
    } catch (error) {
        setServerError("Помилка сервера");
    }
   }

   const onRegisterBtnClick = () => {
    setIsLoginModalOpen();
    setIsRegisterModalOpen()
   }

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex w-full h-full z-20 cursor-auto">
        <div className="bg-white rounded-lg shadow-sm absolute top-[21%] right-[38%] w-[500px] h-[620px] flex flex-col gap-2 py-7 overflow-y-auto
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
                        <button className="font-semibold text-gray-600 hover:text-blue-600">
                            Забули пароль?
                        </button>
                    </div>
                    <input name="password" id="password" type={`${showPassword ? "text": "password"}`} 
                    className="bg-gray-100 border border-gray-200 rounded-md h-[50px] 
                    px-[3%] w-full hover:bg-white"
                    placeholder="Введіть пароль" {...register("password", {required: "Це поле обов'язкове"})} />
                    { showPassword ? (<IoMdEyeOff size={17} className="absolute right-3 top-12 cursor-pointer" 
                    onClick={() => changePasswordVisibility()} />) :
                    (<IoMdEye size={17} className="absolute right-3 top-12 cursor-pointer" onClick={() => changePasswordVisibility()} />) }
                    { serverError && (
                        <span className="text-red-500 w-full text-left h-[15px] -mt-3">{ serverError }</span>
                    ) }
                </div>
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
