import React from 'react'
import { NoneSpan } from '../shared'
import Image from 'next/image'
import Link from 'next/link'

export const Delivery365Container = () => {
  return (
    <div className="w-1/2 bg-white p-5 rounded-md flex flex-col gap-5 ">
        <div className="flex flex-row gap-2 items-center">
            <span className="font-bold text-[1.1rem]">
                Доставка
            </span>
            <NoneSpan />
        </div>
        <div className="flex flex-row gap-2 w-full">
            <Image src="/delivery_365.svg" width={40} height={40} alt='Delivery 365' />
            <p className="text-[0.9rem] font-semibold max-w-[80%]">
                Підписка на безкоштовну достаку замовлень від Yakaboo.ua по всій Україні. Діє на всі 
                замовлення від 100 грн протягом 1 року з моменту оформлення. Немає жодних обмежень 
                по кількості замовлень.
            </p>
        </div>
        <Link href="#" className="bg-blue-900 hover:bg-blue-900/80 text-white rounded-md p-3 
        transition-all duration-300 ease-in max-w-[35%] font-semibold text-center">
            Детальніше про Доставку 365
        </Link>
    </div>
  )
}
