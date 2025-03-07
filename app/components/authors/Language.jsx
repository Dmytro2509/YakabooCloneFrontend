import React from 'react'

export const Language = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-[0.9rem]">
        <p className="font-bold text-[1rem]">
            Мова
        </p>
        <form className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
                <input type="checkbox" name="ua" id="ua" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='ua'>Українська</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input type="checkbox" name="en" id="en" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='en'>Англійська</label>
            </div>
            <div className="flex flex-row items-center gap-2 ">
                <input type="checkbox" name="ru" id="ru" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='ru'>Російська</label>
            </div>
        </form>
    </div>
  )
}
