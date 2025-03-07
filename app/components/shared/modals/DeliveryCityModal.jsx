"use client"

import useDeliveryModalState from '@/app/stores/DeliveryCityModalState'
import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

export const DeliveryCityModal = () => {

    const { isDeliveryModalOpen, setIsDeliveryModalOpen } = useDeliveryModalState();

    useEffect(() => {
        if(isDeliveryModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isDeliveryModalOpen])

  return (
    <div className="fixed inset-0 bg-transparent/30 bg-opacity-50 flex w-full h-full z-50 cursor-auto">
        <div className="bg-white rounded-lg shadow-sm absolute top-[32%] right-[38%] w-[550px] h-[350px] flex flex-col gap-2 py-7 px-10 overflow-y-auto
        text-center">
            <button className="rounded-full p-2 hover:bg-gray-100 text-gray-500 absolute right-1 top-1" onClick={ setIsDeliveryModalOpen }>
                <IoClose size={20} />
            </button>
            <h4 className="font-semibold text-[1.1rem] mt-5">
                Оберіть місто доставки
            </h4>
            <form className="flex flex-col gap-4 w-full relative">
                <div className="flex flex-col gap-2 text-left">
                    <label className="font-bold text-[0.9rem]" htmlFor="country">Країна *</label>
                    <input name="country" id="country" className="border border-gray-200 rounded-md bg-gray-100 h-[45px] px-5" 
                    value="Україна" />
                    <button className="absolute right-4 top-[45px]">
                        <FaChevronDown size={15} className="text-gray-700" />
                    </button>
                </div>
                <div className="flex flex-col gap-2 text-left">
                    <label className="font-bold text-[0.9rem]" htmlFor="city">Місто</label>
                    <input name="city" id="city" className="border border-gray-200 rounded-md bg-gray-100 h-[45px] px-5" 
                    placeholder="Введіть назву міста.."/>
                    <button className="absolute right-4 bottom-[85px]">
                        <FaChevronDown size={15} className="text-gray-700" />
                    </button>
                </div>
                <button type="submit" className="w-full rounded-md text-white text-center py-3 bg-blue-900 hover:opacity-[0.80]
                transition-all duration-300 ease-in mt-2 text-[0.9rem] font-semibold">
                    Зберегти
                </button>
            </form>
        </div>
    </div>
  )
}