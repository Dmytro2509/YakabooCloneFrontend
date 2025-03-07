import React from 'react'
import Link from 'next/link'
import { LuBookOpenText } from "react-icons/lu";
import { IoCloudDownloadOutline } from "react-icons/io5";

export const BookType = ({ format, price, isActive=true, link="#" }) => {
  return (
    <Link className={`w-[150px] rounded-lg py-2 px-5 ${ isActive ? "border-2 border-pink-500 bg-pink-100 text-pink-500" : 
        "border border-gray-200 bg-white text-gray-600"} flex flex-col gap-1 `}
        href={link}>
        <div className="flex flex-row items-center gap-1  font-bold text-[1rem]">
            { format === "Паперова" ? (<LuBookOpenText size={18} />) : (<IoCloudDownloadOutline size={18} />) }
            { format }
        </div>
        <div className={`text-[1.1rem] font-bold ${ isActive ? "text-black": "text-gray-600" }`}>
            {price} грн
        </div>
    </Link>
  )
}
