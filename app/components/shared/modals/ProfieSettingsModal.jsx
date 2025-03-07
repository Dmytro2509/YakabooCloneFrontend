import React from 'react'
import useProfileSettingsState from '@/app/stores/ProfileSettingsState';
import { IoCloseSharp } from "react-icons/io5"
import { IoMdExit } from "react-icons/io";
import { CiUser } from "react-icons/ci"
import { FiTruck } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TbBorderLeftPlus, TbGiftCard } from "react-icons/tb";
import Link from 'next/link';
  
export const ProfieSettingsModal = () => {

  const { isProfileSettingsOpen, setIsProfileSettingsOpen } = useProfileSettingsState();

  
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2]
    }
    return null;
  }

  const getUserFullName = () => {
    const firstName = getCookie("first_name")
    const lastName = getCookie("last_name")
    return `${firstName} ${lastName}`
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex w-full h-full z-20 cursor-auto">
        <div className="bg-white rounded-md shadow-sm absolute top-0 right-0 w-[300px] h-[100vh] flex flex-col gap-2 py-5 overflow-y-auto">
          <div className="flex flex-col gap-2 border-b-4 border-gray-200 pb-4 px-5">
            <div className="flex flex-row justify-between">
              <p className="text-[1.2rem] font-semibold">Профіль</p>
              <button className="p-2 rounded-full text-gray-800 hover:bg-gray-200 text-center cursor-pointer justify-center items-center"
                onClick={ () => setIsProfileSettingsOpen(false) }>
                  <IoCloseSharp size={17} />
                </button>  
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="rounded-full p-2 bg-[#EA33C0] w-[40px] h-[40px] cursor-pointer">
                <CiUser size={22} className="text-white ml-[1px]" />
              </div>
              <div className="flex flex-col gap-1">
                  <p className="text-[0.9rem] font-semibold">
                    { getUserFullName() }
                  </p>
                  <p className="text-[0.8rem] text-gray-700">
                    +{getCookie("phone_number")}
                  </p>
                </div>
            </div>  
          </div>
          <div className="flex flex-col gap-2 border-b-4 border-gray-200 pb-4">
            <Link href="/myaccount/orders" className="px-5 flex flex-row gap-3 items-center py-2 hover:bg-gray-100 
            transition-all duration-150 ease-in-out group">
              <button className="bg-pink-200 p-2 rounded-full text-pink-500 group-hover:bg-pink-500 group-hover:text-white 
              transition-all duration-150 ease-in">
                <FiTruck size={20} />
              </button>
              <span className="font-semibold">Замовлення</span>
            </Link>
            <Link href="/myaccount/orders" className="px-5 flex flex-row gap-3 items-center py-2 hover:bg-gray-100 
            transition-all duration-150 ease-in-out group">
              <button className="bg-pink-200 p-2 rounded-full text-pink-500 group-hover:bg-pink-500 group-hover:text-white 
              transition-all duration-150 ease-in">
                <MdOutlineDone size={20} />
              </button>
              <span className="font-semibold">Моя бібліотека</span>
            </Link>
            <Link href="/myaccount/orders" className="px-5 flex flex-row gap-3 items-center py-2 hover:bg-gray-100 
            transition-all duration-150 ease-in-out group">
              <button className="bg-pink-200 p-2 rounded-full text-pink-500 group-hover:bg-pink-500 group-hover:text-white 
              transition-all duration-150 ease-in">
                <FaRegHeart size={20} />
              </button>
              <span className="font-semibold">Бажані книги</span>
            </Link>
            <Link href="/myaccount/orders" className="px-5 flex flex-row gap-3 items-center py-2 hover:bg-gray-100 
            transition-all duration-150 ease-in-out group">
              <button className="bg-pink-200 p-2 rounded-full text-pink-500 group-hover:bg-pink-500 group-hover:text-white 
              transition-all duration-150 ease-in">
                <TbBorderLeftPlus size={20} />
              </button>
              <span className="font-semibold">Товари в очікуванні</span>
            </Link>
            <Link href="/myaccount/orders" className="px-5 flex flex-row gap-3 items-center py-2 hover:bg-gray-100 
            transition-all duration-150 ease-in-out group">
              <button className="bg-pink-200 p-2 rounded-full text-pink-500 group-hover:bg-pink-500 group-hover:text-white 
              transition-all duration-150 ease-in">
                <TbGiftCard size={20} />
              </button>
              <span className="font-semibold">Бонуси</span>
            </Link>
          </div>

          <div className="flex flex-col gap-2 border-b-4 border-gray-200 pb-4">
            <Link href="/myaccount/orders" className="px-5 flex flex-row gap-3 items-center py-2 hover:bg-gray-100 
            transition-all duration-150 ease-in-out group">
              <button className="bg-pink-200 p-2 rounded-full text-pink-500 group-hover:bg-pink-500 group-hover:text-white 
              transition-all duration-150 ease-in">
                <CiUser size={20} />
              </button>
              <span className="font-semibold">Налаштування</span>
            </Link>
          </div>

          <div className="flex flex-col gap-2 border-b-4 border-gray-200 pb-4">
            <Link href="/myaccount/orders" className="px-5 flex flex-row gap-3 items-center py-2 hover:bg-gray-100 
            transition-all duration-150 ease-in-out group">
              <button className="bg-pink-200 p-2 rounded-full text-pink-500 group-hover:bg-pink-500 group-hover:text-white 
              transition-all duration-150 ease-in">
                <IoMdExit size={20} />
              </button>
              <span className="font-semibold">Вихід</span>
            </Link>
          </div>

          <div className="border-b border-gray-200 pb-4 flex flex-col gap-1 pt-5 px-5">
            <span className="font-semibold">
              Виникли запитання?
            </span>
            <Link href="tel:0-800-335-425" className="text-[1.2rem] font-semibold">
            0-800-335-425
            </Link>
          </div>
        </div>
    </div>
  )
}
