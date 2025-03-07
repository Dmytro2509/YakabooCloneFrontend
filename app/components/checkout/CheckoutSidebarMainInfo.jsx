import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaPencilAlt } from "react-icons/fa";

export const CheckoutSidebarMainInfo = ({ count=1 }) => {
  return (
    <div className="w-full bg-white rounded-md flex flex-col gap-5 py-5 px-7">
        <div className="flex flex-row justify-between items-center">
            <h1 className="text-[1.3rem] font-semibold">
                {count} товар у кошику
            </h1>
            <button className="bg-gray-100 rounded-full p-3">
                <FaPencilAlt size={17} />
            </button>
        </div>
        <div className="flex flex-row justify-between items-start">
            <div className="flex flex-row gap-3">
                <Link href="#">
                    <Image src="https://static.yakaboo.ua/media/catalog/product/c/o/cover_359_3.jpg" width={45} height={45}
                    alt="Казка" />
                </Link>
                <div className="flex flex-col gap-1">
                    <p className="text-[0.9rem] font-semibold">
                        Казка
                    </p>
                    <div className="flex flex-col gap-0 text-[0.9rem]">
                        <span className="text-gray-500">
                            Стівен Кінг
                        </span>
                        <p className="flex flex-row items-center gap-2">
                            <span className="text-[#333373] text-[1rem] font-semibold">
                                290 грн
                            </span>
                            <span className="w-[2px] h-[2px] bg-gray-500 rounded-full" />
                            <span className="text-gray-500 text-[0.9rem]">
                                Електронна
                            </span>
                        </p>
                    </div>
                    <p className="text-[0.8rem] text-gray-500">
                        Код 1465775
                    </p>
                </div>
            </div>
            <span className="text-gray-700 font-semibold text-[0.9rem]">
                1 шт.
            </span>
        </div>
        <p className="font-semibold">
            Разом 290 грн
        </p>
    </div>
  )
}
