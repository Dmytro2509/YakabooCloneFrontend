import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosHeartEmpty } from "react-icons/io";
import { LuTruck } from "react-icons/lu"


export const BookCard = ({ imageSrc, title, author, price, bookHref="#" }) => {
  return (
    <div className="flex flex-col gap-4 relative group max-h-[340px] hover:z-50">
        <div className="bg-white p-1 rounded-lg text-gray-700 font-semibold absolute hidden group-hover:block text-[0.8rem]">
            901231
        </div>
        <button className="bg-white opacity-[.95] p-2 rounded-md text-gray-800 font-semibold absolute right-6 hidden group-hover:block">
            <IoIosHeartEmpty size={20} />
        </button>
        <Link href={ bookHref }>
            <Image src={ imageSrc }
            alt={title} width={160} height={150} />    
        </Link>
        <div className="flex flex-col gap-0 text-left text-[1rem]">
            <p className="font-semibold">{ title }</p>
            <p className="text-gray-500 text-[0.9rem]">
                { author }
            </p>
            <p className="font-semibold">{ price } грн</p>
            <span className="text-green-500 flex flex-row items-center gap-1 text-[0.8rem] font-semibold">
                <LuTruck size={13} />
                В наявності
            </span> 
            <div className="flex flex-row gap-2 items-center opacity-0 group-hover:opacity-100 text-white text-[0.9rem] mt-1">
                <button className="mr-2 font-semibold bg-red-500/90 hover:bg-red-500/70 rounded-lg w-[45%] text-center py-3">
                    До кошика
                </button>
                <button className="font-semibold bg-blue-900 hover:bg-blue-900/80 rounded-lg w-[45%] text-center py-3">
                    Купити
                </button>
            </div>
        </div>
    </div>
  )
}
