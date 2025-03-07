import React from 'react'
import Image from 'next/image'
import { LuTruck } from "react-icons/lu";
import { IoCartSharp } from "react-icons/io5";
import { Delivery365, DeliveryCity, DeliveryMethods, NovaPostPromotion, PayByParts } from '.';

export const OrderInfo = () => {
  return (
    <div className="w-[25%] flex flex-col gap-5 mb-10 mt-12">
        <div className="flex flex-col gap-1">
            <h1 className="text-[2rem] font-semibold text-blue-900">
                540 грн
            </h1>
            <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center gap-1 text-[0.9rem] text-green-600 font-semibold">
                    <LuTruck size={18} />
                    В наявності
                </div>
                <div className="w-[2.5px] h-[2.5px] bg-gray-500" />
                <span className="text-gray-500 font-semibold">Паперова книга</span>
            </div>
        </div>
        <NovaPostPromotion />
        <button className="bg-orange-600 text-white font-semibold rounded-md text-center w-full flex flex-row gap-1 items-center 
        justify-center py-4 hover:opacity-[0.80] transition-all duration-300 ease-in-out">
            <IoCartSharp size={20} />
            До кошика
        </button>
        <button className="bg-blue-800 text-white font-semibold rounded-md text-center w-full justify-center py-4 hover:opacity-[0.80]
        transition-all duration-300 ease-in-out">
            Купити зараз
        </button>
        <PayByParts />
        <Delivery365 />
        <DeliveryCity />
        <DeliveryMethods />

        <div className="w-full flex flex-row justify-between text-[0.9rem]">
            <span className="font-semibold text-gray-500">
                Продавець товару
            </span>
            <span className="font-semibold">
                Код товару
            </span>
        </div>
        <div className="w-full flex flex-row justify-between text-[0.9rem] -mt-2">
            <Image src="/main-logo.svg" alt="Yakaboo" width={100} height={100} />
            <span >
                1295111 
            </span>
        </div>
    </div>
  )
}
