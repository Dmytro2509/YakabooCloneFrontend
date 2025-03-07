import React from 'react'

export const FiltersList = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-[0.9rem]">
        <p className="font-bold text-[1rem]">
            Фільтри
        </p>
        <form className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
                <input type="checkbox" name="new" id="new" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='new'>Новинки</label>
            </div>
            <div className="flex flex-row items-center gap-2 ">
                <input type="checkbox" name="promo" id="promo" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='promo'>Знижки</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input type="checkbox" name="hits" id="hits" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='hits'>Хіти продажу</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input type="checkbox" name="waiting" id="waiting" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='waiting'>В очікуванні</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input type="checkbox" name="esupport" id="esupport" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='esupport'>Зимова єПідтримка</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input type="checkbox" name="ebook" id="ebook" className="w-[30x] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700" htmlFor='ebook'>єКнига</label>
            </div>
        </form>
    </div>
  )
}