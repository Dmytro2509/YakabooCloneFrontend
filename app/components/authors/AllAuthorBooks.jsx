import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BookCard } from '../shared'

export const AllAuthorBooks = () => {
  return (
    <div className="bg-white rounded-md w-[80%] p-7 flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
            <p className="font-bold text-[1.2rem]">
                329 товарів
            </p>
            <div className="flex flex-row items-center gap-1 text-gray-600 cursor-pointer">
              <span className="text-0.9rem font-extrabold">
                За популярністю
              </span>
              <FaChevronDown size={18} />
            </div>
        </div>
      <div className="grid grid-cols-6 gap-3 gap-y-10">
          { [...Array(25)].map((_, index) => (
            <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/2/7/276_1_2.jpg"
          title="11/22/63" author="Стівен Кінг" price={ 540 } key={ index } />  
          )) }
      </div>
      <div className="flex flex-col gap-4">
        <button className="rounded-md text-gray-600 font-semibold text-[0.9rem] py-3 w-[20%] mx-auto bg-gray-200
        border-2 border-gray-200 hover:border-gray-300">
          Показати більше товарів
        </button>
        <div className="flex flex-row justify-between w-full items-center">
          <button className="rounded-full bg-gray-100 text-gray-500 py-3 px-10">
            <FaArrowLeftLong size={18} />
          </button>
          <div className="flex flex-row items-center gap-1">
            { [...Array(6)].map((_, index) => (
              <button className={`rounded-full h-[45px] w-[45px] text-gray-500 font-semibold border border-gray-100 hover:border-gray-300
              ${ index + 1 === 1 ? "bg-gray-100" : "bg-white" }`} key={ index }>
                {index + 1}
              </button>
            )) }
          </div>
          <button className="rounded-full bg-gray-100 text-gray-500 py-3 px-10">
            <FaArrowRightLong size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
