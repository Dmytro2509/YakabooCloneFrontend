"use client"

import { Endpoints } from '@/app/endpoints'
import useSendingCodeStore from '@/app/stores/SendingCodeState'
import React, { useEffect, useState, useRef, useActionState } from 'react'
import { IoCloseSharp } from "react-icons/io5"
import { FlashMessages } from '..'

export const SendingCodeModal = () => {

    const { setIsSendingCodeModalOpen } = useSendingCodeStore();
    const [seconds, setSeconds] = useState(100);
    const [isDisabled, setIsDisabled] = useState(true);
    const [message, setMessage] = useState(null);
    const [code, setCode] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);
    const ONE_WEEK = 7 * 24 * 60

    useEffect(() => {
        let timer;

        if (isDisabled && seconds > 0){
            timer = setInterval(() => {
                setSeconds((prev) => prev - 1)
            }, 1000)
        } else if (seconds === 0){
            setIsDisabled(false)
        }

        return () => clearInterval(timer);
    }, [seconds, isDisabled])
    
    const handleChange = (value, index) => {
        if(!/^\d?$/.test(value)) return;
        const newCode = [...code]
        newCode[index] = value
        setCode(newCode)

        if(value && index < 5){
            inputRefs.current[index + 1].focus()
        }
    }

    const handleKeyDown = (e, index) => {
        if(e.key === "Backspace" && code[index] === "" && index > 0){
            inputRefs.current[index - 1].focus()
        }
    }

    const handleSubmit = async () => {
        const verificationCode = code.join("")
        const phoneNumber = getCookie("phone_number")
    
        try {
            const response = await fetch(Endpoints.phoneNumberVerification, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone_number: phoneNumber,
                    code: verificationCode
                })
            });
    
            if(response.ok){
                const data = await response.json();
                setCookie("access_token", data.access_token, 30)
                setCookie("refresh_token", data.refresh_token, ONE_WEEK)
                setCookie("token_type", data.token_type, ONE_WEEK)
                setIsSendingCodeModalOpen(false)
                setMessage("Ви успішно авторизувались")
            } else {
                const errorData = await response.json();
                console.error("Verification failed", errorData)
            }
        } catch(error){
            console.error("An error occurred", error);
        }
    }
    

    useEffect(() => {
        const handleOpen = () => {
            document.body.classList.add("overflow-hidden")
        };
    
        const handleClose = () => {
            document.body.classList.remove("overflow-hidden")
        }
    
        handleOpen();
    
        return () => {
            handleClose()
        }
    }, [])

    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            return match[2]
        }
        return null;
    }

    const setCookie = (name, value, minutes) => {
        let expires = ""

        if(minutes) {
            const date = new Date();
            date.setTime(date.getTime() + (minutes * 60 * 1000))
            expires = "; expires=" + date.toUTCString();
        }

        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    const phoneNumber = getCookie("phone_number");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex w-full h-full z-20 cursor-auto">
        <div className="bg-white rounded-lg shadow-sm absolute top-[25%] right-[35%] w-[550px] h-[340px] flex flex-col gap-7 py-7
        px-5 text-center">
            { message  && <FlashMessages message={message} onClose={() => setMessage(null)} />}
            <button className="p-2 rounded-full text-gray-800 hover:bg-gray-200 text-center cursor-pointer 
            justify-center items-center absolute top-2 right-2"
            onClick={ () => setIsSendingCodeModalOpen(false) }>
                <IoCloseSharp size={17} />
            </button>
            <div className="text-center flex flex-col gap-1">
                <p className="font-bold text-[1.1rem]">
                    Введіть код підтвердження
                </p>
                <p className="text-[0.9rem]">
                    Ми надіслали на ваш номер <span className="font-bold">(+{phoneNumber})</span> цифровий код. Введіть його в 
                    форму нижче для підтвердження вашого номеру телефону
                </p>
            </div>
            <div className="w-full flex flex-row items-center gap-2 justify-center ">
                { code.map((_, index) => (
                    <input key={ index } type="text" maxLength="1" value={code[index]}
                    onChange={(e) => handleChange(e.target.value, index)} 
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-[50px] h-[55px] rounded-md border border-gray-200 bg-gray-200 hover:bg-white
                    text-center px-2 text-[1.1rem] font-bold"
                    />
                )) }
            </div>
            <button onClick={() => handleSubmit()} className="bg-blue-800 rounded-md py-4 text-white 
            font-semibold w-[67%] mx-auto hover:bg-blue-900 mt-2 transition-all duration-100 ease-in">
                Підтвердити
            </button>
            <button className={`text-[0.9rem] font-semibold -mt-3 
                ${isDisabled ? "text-gray-500 hover:text-gray-600": "text-blue-600 hover:text-blue-700"}`} 
                disabled={isDisabled}>
                    {isDisabled ? (
                    `Надіслати код повторно через ${seconds}с`
                    ): "Надіслати код повторно"}
                
            </button>
        </div>
    </div>
  )
}
