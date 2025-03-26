import React from 'react'

export const Price = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-[0.9rem] relative">
        <p className="font-bold text-[1rem]">
            Ціна
        </p>
        <form className="flex flex-row items-center gap-3 w-full relative">
            <input className="border border-gray-200 rounded-md bg-gray-100 hover:bg-white hover:border-pink-500 h-[40px] w-1/2 
            pl-12 text-center" />
            <span className="absolute left-5 text-gray-500 font-semibold">від</span>
            <input className="border border-gray-200 rounded-md bg-gray-100 hover:bg-white hover:border-pink-500 h-[40px] w-1/2 
            pl-12 text-center" />
            <span className="absolute right-24 text-gray-500 font-semibold">до</span>
        </form>
        <button className="w-full rounded-md bg-gray-200 py-3 text-center text-gray-500 
        font-semibold border border-gray-200 hover:border-gray-300 mt-2">
          Застосувати
        </button>
    </div>
  )
}