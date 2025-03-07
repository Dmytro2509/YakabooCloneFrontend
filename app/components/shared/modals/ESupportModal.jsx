"use client"

import useESupportModalStore from '@/app/stores/ESupportModalState';
import Link from 'next/link';
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

export const ESupportModal = () => {

    const { setIsSupportModalOpen } = useESupportModalStore();

  return (
    <div className="fixed bottom-32 left-[8%] bg-[url(https://forms.esputnik.com/img/3673/forms/18824/7cf8beac-ac9c-48eb-9d9a-154119552c56.png)]
    bg-cover bg-no-repeat bg-center w-[350px] h-[250px] z-50 drop-shadow-3xl">
        <button className="border-2 border-black rounded-full w-[30px] h-[30px] bg-white px-[3px] font-extrabold text-[1.1rem]
        absolute -right-3 -top-3" onClick={ setIsSupportModalOpen }>
            <IoCloseSharp size={20} />
        </button>
        <Link href="#" className="bg-pink-500 rounded-full w-[200px] border-2 border-pink-500 py-2 px-4 text-center absolute text-white
        bottom-7 left-[25%] hover:bg-white hover:text-pink-500 font-semibold shadow-lg">
            ДЕТАЛЬНІШЕ
        </Link>
    </div>
  )
}
