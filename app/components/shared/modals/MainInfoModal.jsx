"use client"

import useMainInfoModalStore from '@/app/stores/MainInfoModaState'
import useBookCategoryStore from '@/app/stores/BookCategoryState';
import useCartModalStore from '@/app/stores/CartState';
import useDeliveryModalState from '@/app/stores/DeliveryCityModalState';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { IoCloseSharp, IoCartOutline, IoBookOutline, IoCloudDownloadOutline } from "react-icons/io5"
import { CiUser } from 'react-icons/ci';
import { FiMenu } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaChevronRight } from 'react-icons/fa';
import useOtherCategoriesState from '@/app/stores/OtherCategoriesState';

export const MainInfoModal = () => {

    const { isMainInfoModalOpen, setIsMainInfoModalOpen } = useMainInfoModalStore();
    const { setIsDeliveryModalOpen } = useDeliveryModalState();
    const { setIsBookCategoryModalOpen, setActiveButtonIndex } = useBookCategoryStore();
    const { setIsCartModalOpen } = useCartModalStore()
    const { setIsOtherCategoriesOpen,  } = useOtherCategoriesState()

    useEffect(() => {
        const handleOpen = () => {
            document.body.classList.add("overflow-hidden")
        };

        const handleClose = () => {
            document.body.classList.remove("overflow-hidden")
        }

        handleOpen();

        return () => {
            handleClose()
        }
    }, [])

    const openCategories = () => {
        setIsOtherCategoriesOpen(true);
    }

    const closeCategories = () => {
        setIsOtherCategoriesOpen(false)
    }

    const handleBookCategoriesModalOpen = () => {
        setIsMainInfoModalOpen()
        setIsBookCategoryModalOpen()
        setActiveButtonIndex(0)
    }

    const handleCartModalOpen = () => {
        setIsMainInfoModalOpen();
        setIsCartModalOpen();
    }

    const handleBookOpen = index => {
        setIsMainInfoModalOpen()
        setIsBookCategoryModalOpen()
        setActiveButtonIndex(index)
    }

    const handleDeliveryModalOpen = () => {
        setIsMainInfoModalOpen()
        setIsDeliveryModalOpen()
    }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex w-full h-full z-20 cursor-auto transition-all duration-300 ease-in">
        <div className={`bg-white rounded-md shadow-sm absolute top-0 left-0 w-[300px] h-[100vh] flex flex-col gap-2 py-7 overflow-y-auto
        transform transition-transform duration-500 ease-in-out ${ isMainInfoModalOpen ? 'translate-x-0': '-translate-x-full' }`}>
            <div className="flex flex-row items-center justify-between px-5">
                <Link href="/" className="ml-5">
                    <Image src="/main-logo.svg" width={110} height={110} alt="Main Logo" />
                </Link>
                <button onClick={ setIsMainInfoModalOpen } 
                className="p-2 rounded-full text-gray-800 hover:bg-gray-200 text-center cursor-pointer justify-center items-center">
                    <IoCloseSharp size={17} />
                </button>
            </div>
            <div className="flex flex-row items-center bg-gray-100 cursor-pointer px-5 py-3 gap-3">
                <div className="relative rounded-full p-2 bg-[#EA33C0] text-center justify-center w-[40px] h-[40px] cursor-pointer mx-auto">
                    <CiUser size={22} className="text-white ml-[1px]" />
                </div>
                <div className="flex flex-col gap-0">
                    <p className="text-[0.9rem] font-semibold">
                        Вхід або реєстрація
                    </p>
                    <p className="text-[0.8rem] text-gray-600">
                        Для відслідковування статусу замовлень та рекомендацій
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-1 border-b border-gray-300 pb-4">
                <div className="w-full flex flex-row items-center gap-2 hover:bg-gray-100 px-5 py-2 cursor-pointer font-semibold group"
                onClick={() => handleBookCategoriesModalOpen()}
                onMouseEnter={() => closeCategories()}>
                    <button className="bg-pink-100 p-3 rounded-full group-hover:bg-pink-500">
                        <FiMenu size={20} className="text-pink-600 group-hover:text-white" />
                    </button>
                    Категорії книг
                </div>
                <div className="w-full flex flex-row items-center gap-2 hover:bg-gray-100 px-5 py-2 cursor-pointer font-semibold group"
                onClick={ () => handleCartModalOpen() }
                onMouseEnter={() => closeCategories()}>
                    <button className="bg-pink-100 p-3 rounded-full group-hover:bg-pink-500">
                        <IoCartOutline size={20} className="text-pink-600 group-hover:text-white" />
                    </button>
                    Кошик
                </div>
                <Link className="w-full flex flex-row items-center gap-2 hover:bg-gray-100 px-5 py-2 cursor-pointer font-semibold group"
                href="tel:0800335425"
                onMouseEnter={() => closeCategories()}>
                    <button className="bg-pink-100 p-3 rounded-full group-hover:bg-pink-500">
                        <MdLocalPhone size={20} className="text-pink-600 group-hover:text-white" />
                    </button>
                    <div className="flex flex-col gap-0">
                        <p className="text-[0.9rem]">
                            0-800-335-425
                        </p>
                        <p className="text-[0.8rem] text-gray-800">
                            Без вихідних, з 9 до 20
                        </p>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col gap-2 mt-1 border-b border-gray-300 pb-4">
                <div className="w-full flex flex-row items-center gap-2 hover:bg-gray-100 px-5 py-2 cursor-pointer font-semibold group"
                onClick={ () => handleBookOpen(1) }
                onMouseEnter={() => closeCategories()}>
                    <button className="bg-pink-100 p-3 rounded-full group-hover:bg-pink-500">
                        <IoBookOutline size={20} className="text-pink-600 group-hover:text-white" />
                    </button>
                    Паперові книги
                </div>
                <div className="w-full flex flex-row items-center gap-2 hover:bg-gray-100 px-5 py-2 cursor-pointer font-semibold group"
                onClick={ () => handleBookOpen(2) }
                onMouseEnter={() => closeCategories()}>
                    <button className="bg-pink-100 p-3 rounded-full group-hover:bg-pink-500">
                        <IoCloudDownloadOutline size={20} className="text-pink-600 group-hover:text-white" />
                    </button>
                    Електронні книги
                </div>
                <div className="w-full flex flex-row items-center gap-2 hover:bg-gray-100 px-5 py-2 cursor-pointer font-semibold group"
                onClick={ () => handleBookOpen(3) }
                onMouseEnter={() => closeCategories()}>
                    <button className="bg-pink-100 p-3 rounded-full group-hover:bg-pink-500">
                        <FaHeadphones size={20} className="text-pink-600 group-hover:text-white" />
                    </button>
                    Аудіокниги
                </div>
                <div className="w-full flex flex-row items-center gap-2 hover:bg-gray-100 px-5 py-2 cursor-pointer font-semibold group"
                onMouseEnter={() => openCategories()}>
                    <button className="bg-pink-100 p-3 rounded-full group-hover:bg-pink-500">
                        <HiDotsHorizontal size={20} className="text-pink-600 group-hover:text-white" />
                    </button>
                    <div className="flex flex-col gap-0 hover:text-gray-600 cursor-pointer">
                        <span className="text-[0.9rem] group-hover:text-gray-600">
                            Інші
                        </span>
                        <span className="text-[0.8rem] text-gray-600">
                            Ігри, аксесуари, подарунки тощо
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-1 border-b border-gray-300 pb-4">
                <div className="flex flex-col gap-1 text-gray-500 px-5 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={ () => handleDeliveryModalOpen() }
                onMouseEnter={() => closeCategories()}>
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-[0.9rem] font-semibold">
                            Вказати місто
                        </span>
                        <FaChevronRight size={12} />
                    </div>
                    <span className="text-[0.8rem]">
                        Щоб бачити терміни доставки
                    </span>
                </div>
                <div className="flex flex-row items-center px-5 gap-2 text-[0.9rem]">
                    <button className="border border-gray-200 bg-gray-100 font-semibold rounded-md p-2">
                        Українська
                    </button>
                    <button className="border border-gray-200 font-semibold rounded-md p-2 text-gray-600 hover:text-black">
                        Русский
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-1 border-b border-gray-300 pb-4 pt-1">
                <Link className="px-5 hover:text-pink-500 transition-all duration-150 ease-in font-semibold" href="/promotions">
                    Акції
                </Link>
                <Link className="px-5 hover:text-pink-500 transition-all duration-150 ease-in font-semibold" href="#">
                    Сертифікати
                </Link>
            </div>

            <div className="flex flex-col gap-2 mt-1 border-b border-gray-300 pb-4 pt-1">
                <Link className="px-5 hover:text-pink-500 transition-all duration-150 ease-in font-semibold" href="#">
                    Корпоративна бібліотека
                </Link>
                <Link className="px-5 hover:text-pink-500 transition-all duration-150 ease-in font-semibold" href="#">
                    Про Yakaboo
                </Link>
                <Link className="px-5 hover:text-pink-500 transition-all duration-150 ease-in font-semibold" href="#">
                    Доставка та оплата
                </Link>
                <Link className="px-5 hover:text-pink-500 transition-all duration-150 ease-in font-semibold" href="/knowledge/contacts">
                    Контакти
                </Link>
                <Link className="px-5 hover:text-pink-500 transition-all duration-150 ease-in font-semibold" href="#">
                    Блог
                </Link>
            </div>
        </div>
    </div>
  )
}
