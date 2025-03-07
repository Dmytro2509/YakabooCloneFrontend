import React from 'react'

export const AdditionalComment = () => {
  return (
    <div className="bg-white rounded-md w-full px-5 py-7 flex flex-col gap-7">
        <h1 className="text-[1.3rem] font-bold">
            Коментар до замовлення
        </h1>
        <form className="w-full">
            <textarea className="w-full border border-gray-200 bg-gray-100 hover:bg-white rounded-md
            transition-all duration-150 ease-in-out px-5 py-2" 
            rows={4} />
        </form>
    </div>
  )
}
