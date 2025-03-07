import Link from 'next/link'
import React from 'react'
import { TbPencil } from "react-icons/tb";
import { FaChessBoard } from "react-icons/fa6";
import { LuNotebookTabs } from "react-icons/lu";
import { IoBookmarkOutline, IoGiftSharp } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import useOtherCategoriesState from '@/app/stores/OtherCategoriesState';


export const OtherCategoriesModal = () => {

    const { setIsOtherCategoriesOpen } = useOtherCategoriesState()

  return (
    <div className="fixed left-[300px] inset-0 flex w-full h-full z-20 cursor-auto transition-all duration-500 ease-in-out">
        <div className="bg-white rounded-md shadow-sm absolute top-0 w-[300px] h-[100vh] flex flex-col gap-2 py-7 overflow-y-auto
        px-5" onMouseLeave={() => setIsOtherCategoriesOpen(false)}>
            <Link href="#" className="flex flex-row items-center gap-2 text-[0.9rem] font-bold text-gray-600 pt-2 pb-3 mt-1
            border-b border-gray-200">
                <TbPencil size={20} />
                <span className="hover:text-gray-800 transition-all duration-150 ease-in">Творчість, хобі</span>
            </Link>
            <Link href="#" className="flex flex-row items-center gap-2 text-[0.9rem] font-bold text-gray-600 pt-2 pb-3
            border-b border-gray-200">
                <FaChessBoard size={20} />
                <span className="hover:text-gray-800 transition-all duration-150 ease-in">Настільні ігри</span>
            </Link>
            <Link href="#" className="flex flex-row items-center gap-2 text-[0.9rem] font-bold text-gray-600 pt-2 pb-3
            border-b border-gray-200">
                <LuNotebookTabs size={20} />
                <span className="hover:text-gray-800 transition-all duration-150 ease-in">Блокноти</span>
            </Link>
            <Link href="#" className="flex flex-row items-center gap-2 text-[0.9rem] font-bold text-gray-600 pt-2 pb-3
            border-b border-gray-200">
                <IoBookmarkOutline size={20} />
                <span className="hover:text-gray-800 transition-all duration-150 ease-in">Книжкові аксесуари</span>
            </Link>
            <Link href="#" className="flex flex-row items-center gap-2 font-semibold text-gray-700 pt-2 pb-3
            border-b border-gray-200">
                <IoGiftSharp size={20} />
                <span className="hover:text-gray-800 transition-all duration-150 ease-in">Подарунки</span>
            </Link>
            <Link href="#" className="flex flex-row items-center gap-2 font-semibold text-gray-700 pt-2 pb-3
            border-b border-gray-200">
                <TfiCup size={20} />
                <span className="hover:text-gray-800 transition-all duration-150 ease-in">Активний відпочинок</span>
            </Link>
        </div>
    </div>
  )
}
