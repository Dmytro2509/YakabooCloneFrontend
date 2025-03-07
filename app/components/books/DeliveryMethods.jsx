"use client"

import React, { use, useState } from 'react'
import Image from 'next/image'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const DeliveryMethods = () => {

    const [isYakabooOpen, setIsYakabooOpen] = useState(false)
    const [isNovaPostOpen, setIsNovaPostOpen] = useState(false)
    const [isUkrpostOpen, setIsUkrpostOpen] = useState(false)
    const [isCharityOpen, setIsCharityOpen] = useState(false)

    const toggleYakaboo = () => {
        if(!isYakabooOpen) {
            setIsYakabooOpen(true)
        } else {
            setIsYakabooOpen(false)
        }
    }

    const toggleNovaPost = () => {
        if(!isNovaPostOpen){
            setIsNovaPostOpen(true)
        } else {
            setIsNovaPostOpen(false);
        }
    }

    const toggleUkrpost = () => {
        if(!isUkrpostOpen) {
            setIsUkrpostOpen(true)
        } else {
            setIsUkrpostOpen(false)
        }
    }

    const toggleCharity = () => {
        if(!isCharityOpen) {
            setIsCharityOpen(true)
        } else {
            setIsCharityOpen(false)
        }
    }

  return (
    <div className="flex flex-col gap-2 w-full mt-2">
        <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between border-b items-center border-gray-200 cursor-pointer" onClick={() => toggleYakaboo() }>
                <div className="flex flex-row items-center gap-1 pb-3">
                    <Image src="/main-logo-small.svg" alt="Yakaboo" width={20} height={20} /> 
                    <span className="text-[0.9rem]">Yakaboo</span>
                </div>
                <div className="flex flex-row items-center gap-1 text-gray-500 font-semibold text-[0.9rem] cursor-pointer" >
                    { isYakabooOpen ? "показати менше" : "безкоштовно" }
                    { !isYakabooOpen ? (<FaChevronDown size={15} />) : (<FaChevronUp size={15} />) }
                </div>
             </div>
             { isYakabooOpen && (
                <div className="text-[0.9rem] text-left text-black flex flex-row items-start justify-between w-full border-b border-gray-200 pb-3">
                    <p className="w-1/2">
                        Cамовивіз із книгарні Yakaboo, Хрещатик 22, в Головпоштамті
                    </p>
                    <p className="text-gray-500 font-semibold text-[0.9rem]">
                        безкоштовно
                    </p>
                </div>   
             ) }
            
        </div>
        <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between border-b items-center border-gray-200 cursor-pointer" onClick={() => toggleNovaPost()}>
                <div className="flex flex-row items-center gap-1 pb-3">
                    <Image src="/nova-post.svg" alt="Nova Post" width={20} height={20} />
                    <span className="text-[0.9rem]">Нова Пошта</span>
                </div>
                <div className="flex flex-row items-center gap-1 text-gray-500 font-semibold text-[0.9rem] cursor-pointer" >
                    { isNovaPostOpen ? "показати менше": (<span>60-95 грн</span>)  }
                    { !isNovaPostOpen ? (<FaChevronDown size={15} />) : (<FaChevronUp size={15} />)}
                </div>
            </div>
            { isNovaPostOpen && (
                <div className="text-[0.9rem] flex flex-col gap-3 w-full border-b border-gray-200 pb-3">
                    <div className="flex flex-row items-start justify-between w-full">
                        <p className="w-1/2">
                            Відділення Нова Пошта (безкоштовно від 799 грн)
                        </p>
                        <p className="text-gray-500 font-semibold text-[0.9rem]">
                            60 грн
                        </p>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                        <p className="w-1/2">
                            Поштомат Нова Пошта (безкоштовно від 600 грн)
                        </p>
                        <p className="text-gray-500 font-semibold text-[0.9rem]">
                            60 грн
                        </p>
                    </div>
        
                    <div className="flex flex-row items-start justify-between w-full">
                        <p className="w-1/2">
                            Кур'єр Нова Пошта
                        </p>
                        <p className="text-gray-500 font-semibold text-[0.9rem]">
                            95 грн
                        </p>
                    </div>
                </div>    
            ) }
            
        </div>
        <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between border-b items-center border-gray-200 cursor-pointer" onClick={ () => toggleUkrpost() }>
                <div className="flex flex-row items-center gap-1 pb-3">
                    <Image src="/ukrpost.svg" alt="UkrPoshta" width={20} height={20} />
                    <span className="text-[0.9rem]">Укрпошта</span>
                </div>
                <div className="flex flex-row items-center gap-1 text-gray-500 font-semibold text-[0.9rem]">
                    
                    { isUkrpostOpen ? "показати менше": (<span>39-75 грн</span>) }
                    { !isUkrpostOpen ? (<FaChevronDown size={15} />) : (<FaChevronUp size={15} />) }
                    
                </div>
            </div>
            { isUkrpostOpen && (
                <div className="text-[0.9rem] flex flex-col gap-3 w-full border-b border-gray-200 pb-3">
                    <div className="flex flex-row items-start justify-between w-full">
                        <p className="w-1/2">
                            Відділення Укрпошта (безкоштовно від 349 грн)
                        </p>
                        <p className="text-gray-500 font-semibold text-[0.9rem]">
                            39 грн
                        </p>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                        <p className="w-1/2">
                            Кур'єр Укрпошта
                        </p>
                        <p className="text-gray-500 font-semibold text-[0.9rem]">
                            75 грн
                        </p>
                    </div>
                </div>    
            ) }
            
        </div>
        <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between border-b items-center border-gray-200 w-full cursor-pointer" onClick={ () => toggleCharity() }>
                <div className="flex flex-row items-center gap-1 pb-3 max-w-1/2">
                    <Image src="/charity.svg" alt="Charity" width={20} height={20} />
                    <span className="text-[0.9rem]">Благодійність: Книги на фронт</span>
                </div>
                <div className="flex flex-row items-center gap-1 text-gray-500 font-semibold text-[0.9rem]">
                    
                    { isCharityOpen ? "показати менше" : "безкоштовно" }
                    
                    { !isCharityOpen ? (<FaChevronDown size={15} />) : (<FaChevronUp size={15} />) }
                </div>
            </div>
            { isCharityOpen && (
                <div className="text-[0.9rem] flex flex-col gap-3 w-full border-b border-gray-200 pb-3">
                    <div className="flex flex-row items-start justify-between w-full">
                        <p className="w-1/2">
                            Благодійність: Книги на фронт
                        </p>
                        <p className="text-gray-500 font-semibold text-[0.9rem]">
                            безкоштовно
                        </p>
                    </div>
                </div>    
            ) }
            
        </div>
    </div>
  )
}
