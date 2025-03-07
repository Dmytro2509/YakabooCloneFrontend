import React from 'react'
import { IoCloseSharp } from "react-icons/io5"
import useCartModalStore from '@/app/stores/CartState';

export const CartModal = () => {

    const { setIsCartModalOpen } = useCartModalStore ()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex w-full h-full z-20 cursor-auto">
        <div className="bg-white rounded-md shadow-sm absolute top-0 right-0 w-[500px] h-[100vh] flex flex-col gap-2 py-5 overflow-y-auto">
            <div className="flex flex-row justify-between font-semibold px-5 border-b border-gray-200 pb-3">
                <h1 className="text-black text-lg">Кошик</h1>
                <button className="p-2 rounded-full text-gray-800 hover:bg-gray-200 text-center cursor-pointer justify-center items-center"
                onClick={ setIsCartModalOpen }>
                    <IoCloseSharp size={17} />
                </button>
            </div>
            <div className="flex flex-col gap-1 text-[0.9rem] text-black px-5">
                <p className="text-[1rem] font-semibold">
                    Ваш кошик порожній.
                </p>
                <p>
                    Не вагайтесь і перегляньте наш каталог, щоб знайти щось гарне для Вас!
                </p>
            </div>
        </div>
    </div>
  )
}