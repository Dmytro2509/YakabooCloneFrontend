import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosHeartEmpty } from "react-icons/io";
import { LuTruck } from "react-icons/lu"


export const BookCardPreOrder = ({ imageSrc, title, author, date, price, bookHref="#" }) => {
  return (
    <div className="flex flex-col gap-4 relative group max-h-[340px]">
        <div className="bg-white opacity-[.95] p-1 rounded-md text-gray-700 font-semibold absolute hidden group-hover:block text-[0.8rem]">
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
            <p className="font-semibold">{price} грн</p>
            <span className="text-pink-600 flex flex-row items-center gap-1 text-[0.8rem] font-semibold">
                <LuTruck size={13} />
                Очікується з { date }
            </span>
            <button className="rounded-lg bg-blue-900 text-white text-[0.9rem] font-semibold w-full py-3 hidden group-hover:block hover:bg-blue-900/80 mt-1">
                Передзамовити
            </button>
        </div>
    </div>
  )
}
