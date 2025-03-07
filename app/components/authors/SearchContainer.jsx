import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

export const SearchContainer = () => {
  return (
    <div className="w-full relative">
        <input type="search" className="w-full h-[45px] rounded-full px-12 placeholder-gray-600 border-gray-200 outline-none" 
        name="authors-search" placeholder="Пошук у списку"/>
        <IoSearchSharp size={18} className="absolute text-gray-500 top-[14px] left-[15px]" />
        <button type="submit" className="bg-blue-900 h-[45px] px-4 font-semibold rounded-r-full text-white absolute right-0
        hover:bg-blue-900/80 transition delay-50 ease-in-out">
            Пошук
        </button>
    </div>
  )
}
