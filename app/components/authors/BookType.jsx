import React from 'react'

export const BookType = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-[0.9rem]">
        <p className="font-bold text-[1rem]">
            Тип книги
        </p>
        <form className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
                <input type="checkbox" name="paper" id="paper" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='paper'>Паперова</label>
            </div>
            <div className="flex flex-row items-center gap-2 ">
                <input type="checkbox" name="online" id="online" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='online'>Електронна</label>
            </div>
        </form>
    </div>
  )
}
