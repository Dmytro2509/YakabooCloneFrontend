import Image from 'next/image'
import React from 'react'

export const PaymentMethod = () => {
  return (
    <div className="bg-white rounded-md w-full px-5 py-7 flex flex-col gap-7">
        <h1 className="text-[1.3rem] font-bold">
            Спосіб оплати
        </h1>
        <form className="w-full flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2 px-2 py-3 cursor-pointer border border-gray-200 
            bg-gray-100 w-full
            rounded-md">
                <input type="radio" name="payment_method" id="online_card" value="online_card" defaultChecked={true}/>   
                <label htmlFor="online_card" className="cursor-pointer flex flex-row items-center gap-2">
                    <Image src="visa_mastercard.svg" width={20} height={20} alt="Credit card" />
                    Оплата карткою On-line (кешбек 5%)
                </label>
            </div>

            <div className="flex flex-row items-center gap-2 px-2 py-3 cursor-pointer border border-gray-200 
            bg-white hover:border-pink-500 w-full rounded-md transition-all duration-300s ease-in-out">
                <input type="radio" name="payment_method" id="e-book" value="e-book"/>   
                <label htmlFor="e-book" className="cursor-pointer flex flex-row items-center gap-2">
                    <Image src="e-book.svg" width={20} height={20} alt="E Book" />
                    Оплата карткою "ДІЯ єКнига - 908 грн"
                </label>
            </div>
        </form>
    </div>
  )
}
