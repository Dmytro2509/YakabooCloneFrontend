import React from 'react'

export const Existance = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-[0.9rem]">
        <p className="font-bold text-[1rem]">
            Наявність
        </p>
        <form className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
                <input type="checkbox" name="in" id="in" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='in'>Товари в наявності</label>
            </div>
            <div className="flex flex-row items-center gap-2 ">
                <input type="checkbox" name="ready" id="ready" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='ready'>Готові до відправки</label>
            </div>
        </form>
    </div>
    
  )
}
