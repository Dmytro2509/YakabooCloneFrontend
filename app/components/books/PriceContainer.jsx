import Image from 'next/image'
import React from 'react'
import { LuTruck } from "react-icons/lu";
import { IoCartSharp } from "react-icons/io5";

export const PriceContainer = () => {
  return (
    <div className="w-full shadow-2xl fixed bottom-0 z-50 bg-white border border-gray-300 rounded-md h-[90px] px-10
    flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
            <Image src="https://static.yakaboo.ua/media/catalog/product/2/7/276_1_2.jpg" alt="11/22/63" width={40} height={40} />
            <span className="text-black">11/22/63</span>
        </div>
        <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col gap-1 w-[200px]">
                <h1 className="text-[2rem] font-semibold text-blue-900">
                    540 грн
                </h1>
                <div className="flex flex-row items-center gap-1 text-green-600 font-semibold -mt-2">
                    <LuTruck size={18} />
                    В наявності
                </div>
            </div>
            <button className="bg-orange-600 text-white font-semibold rounded-md text-center w-full flex flex-row gap-1 items-center 
            justify-center py-3 hover:opacity-[0.80] transition-all duration-300 ease-in-out">
                <IoCartSharp size={20} />
                До кошика
            </button>
        </div>
    </div>
  )
}