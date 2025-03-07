import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

export const SearchHistoryModal = () => {
  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex w-full h-full z-20">
        <div className="bg-white rounded-md shadow-sm absolute top-16 left-[28%] w-[750px] flex flex-col">
            <div className="py-2 px-4 border-b border-gray-300 flex flex-row justify-between">
                <p className="text-[1rem] font-semibold text-black">Історія пошуку</p>
                <button className="text-[0.9rem] text-gray-400">Очистити</button>
            </div>
            <div className="py-2 px-4 border-b border-gray-300 flex flex-row gap-5 items-center hover:bg-gray-100 cursor-pointer
            text-[0.9rem]">
                <IoSearchSharp size={18} />
                <span className="text-semibold">гра престолів</span>
            </div>
        </div>
    </div>
  )
}
