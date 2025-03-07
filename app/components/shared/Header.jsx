"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiMenuAlt4 } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";
import { IoSearchSharp, IoCloseSharp, IoCartSharp } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleDown, FaRegUser } from "react-icons/fa6";
import { AllBooksCategoriesModal, MainInfoModal, OtherCategoriesModal, ProfieSettingsModal, SearchHistoryModal, 
  SendingCodeModal, UserRegisterModal } from './modals';
import useBookCategoryStore from '@/app/stores/BookCategoryState';
import useCartModalStore from '@/app/stores/CartState';
import { CartModal } from './modals/CartModal';
import useLoginModalStore from '@/app/stores/LoginModalState';
import { LoginModal } from './modals/LoginModal';
import useRegisterModalStore from '@/app/stores/RegisterModalState';
import useMainInfoModalStore from '@/app/stores/MainInfoModaState';
import useOtherCategoriesState from '@/app/stores/OtherCategoriesState';
import useSendingCodeStore from "@/app/stores/SendingCodeState";
import { useAuth } from '@/app/hooks/useAuth';
import { UserLettersButton } from '.';
import useProfileSettingsState from '@/app/stores/ProfileSettingsState';


export const Header = () => {

  const [isSearchClick, setIsSearchClick] = useState(false);
  const { isBookCategoryModalOpen, setIsBookCategoryModalOpen, setActiveButtonIndex } = useBookCategoryStore();
  const { isProfileSettingsOpen } = useProfileSettingsState();
  const { isCartModalOpen, setIsCartModalOpen } = useCartModalStore ()
  const { isLoginModalOpen, setIsLoginModalOpen } = useLoginModalStore()
  const { isMainInfoModalOpen, setIsMainInfoModalOpen } = useMainInfoModalStore();
  const { isRegisterModalOpen } = useRegisterModalStore()
  const { isSendingCodeModalOpen } = useSendingCodeStore();
  const { isOtherCategoriesOpen } = useOtherCategoriesState()

  const isAuthenticated = useAuth()

  const setClick = () => {
    if(!isSearchClick){
      setIsSearchClick(true);
    } else {
      setIsSearchClick(false);
    }
  }

  const handleBookCategoriesModalOpen = () => {
    setIsBookCategoryModalOpen()
    setActiveButtonIndex(0);
    
  }

  return (
    <header className="py-[1%] flex flex-row items-center gap-[5%]">
        <div className="flex flex-row items-center gap-2">
          <button onClick={ setIsMainInfoModalOpen }>
            <HiMenuAlt4 size={20} />
          </button>
          <Link href="/">
            <Image src="/main-logo.svg" width={110} height={110} alt="Main Logo" />
          </Link>
        </div>
        { isBookCategoryModalOpen && (<AllBooksCategoriesModal />) }
        { isMainInfoModalOpen && (<MainInfoModal />) }
        { isOtherCategoriesOpen && <OtherCategoriesModal /> }
        { isSendingCodeModalOpen && <SendingCodeModal /> }
        <div className="flex flex-row items-center gap-2">
          <button className="flex flex-row items-center gap-1 text-gray-600 bg-gray-200 rounded-full py-3 px-5 text-center"
          onClick={ () => handleBookCategoriesModalOpen() }>
            <BiMenu size={22} />
            <span className="font-semibold text-[0.9rem]">Категорії книг</span>
          </button>
          <div className='relative z-10'>
            <input type="search" name="q" className="bg-white h-[42px] rounded-full w-[750px] py-1 px-[5%] z-40 text-[0.9rem] outline-none relative" 
            placeholder="Знайти книгу" onClick={ () => setClick() } />
            <IoSearchSharp size={20} className="absolute top-3 left-3" /> 
            <IoCloseSharp size={20} className={`absolute top-3 right-[15%] z-40 ${isSearchClick ? "visible": "hidden"}`} /> 
            <button className="bg-blue-900 text-white py-2 px-5 rounded-r-full absolute right-0 z-40 hover:bg-blue-900/80">
              Пошук
            </button>
          </div>
          { isSearchClick && <SearchHistoryModal /> }
        </div>
        <div className="flex flex-row items-center gap-3 text-gray-700 -ml-9">
          <div className="flex flex-col max-h-[42px] text-[0.9rem]">
            <Link className="flex flex-row items-center gap-1 h-1/2 hover:text-gray-800" href="tel:0800335425">
              <FaPhoneAlt size={12} />
              <span>0-800-335-425</span>
              <FaAngleDown size={12} />
            </Link>
            <span className="h-1/2">
              Без вихідних, з 10 до 20
            </span>
          </div>
          { isCartModalOpen && <CartModal /> }
          { isAuthenticated && (
            <button className="text-gray-700 hover:text-gray-800 ml-4 -mr-4">
              <GoBell size={20} />
            </button>  
          ) }
          
          <button className="flex flex-row items-center gap-1 text-gray-700 hover:text-gray-800 ml-4" 
          onClick={ setIsCartModalOpen }>
            <IoCartSharp size={20} />
            Кошик
          </button>
          { isLoginModalOpen && <LoginModal /> }
          { isRegisterModalOpen && <UserRegisterModal /> }
          { isProfileSettingsOpen && <ProfieSettingsModal /> }
          { !isAuthenticated ? (
            <button className="flex flex-row items-center gap-1 text-gray-700 hover:text-gray-800 ml-4"
            onClick={ setIsLoginModalOpen }>
              <FaRegUser size={20} />
              Увійти
            </button>  
          ) : (
            <button className="flex flex-row items-center gap-1 text-gray-700 hover:text-gray-800 ml-4">
              <UserLettersButton />
            </button>  
          )}
        </div>
    </header>
  )
}
