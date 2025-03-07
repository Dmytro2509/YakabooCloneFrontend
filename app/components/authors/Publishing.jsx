import React from 'react'
import { FaSearch, FaChevronDown } from "react-icons/fa";

export const Publishing = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-[0.9rem] relative">
        <p className="font-bold text-[1rem]">
            Видавництво
        </p>
        <input type="search" className="w-full border border-gray-200 rounded-md bg-gray-100 px-3 h-[40px] hover:bg-white 
        hover:border-pink-500" 
        placeholder="Пошук видавництва"/>
        <FaSearch size={15} className="absolute right-4 top-11 text-gray-500" />

        <form className="flex flex-col gap-1">
            <div className="flex flex-row items-emd gap-2">
                <input type="checkbox" name="ksd" id="ksd" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='ksd'>
                    Книжковий клуб "Клуб Сімейного Дозвілля"
                </label>
            </div>
            <div className="flex flex-row items-center gap-2 ">
                <input type="checkbox" name="t&f" id="t&f" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='t&f'>Taylor & Francis</label>
            </div>
            <div className="flex flex-row items-center gap-2 ">
                <input type="checkbox" name="i&dw" id="i&dw" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='i&dw'>Idea & Design Works</label>
            </div>
            <div className="flex flex-row items-center gap-2 ">
                <input type="checkbox" name="hodder" id="hodder" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='hodder'>Hodder</label>
            </div>
            <div className="flex flex-row items-center gap-2 ">
                <input type="checkbox" name="orion" id="orion" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='orion'>Orion</label>
            </div>
            <button className="flex flex-row items-center gap-1 font-bold text-gray-500">
                Показати всі 
                <FaChevronDown size={15} />
            </button>
        </form>
    </div>
  )
}
