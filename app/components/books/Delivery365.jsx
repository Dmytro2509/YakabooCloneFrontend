import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Delivery365 = () => {
  return (
    <Link className="rounded-md bg-gray-100 flex flex-row items-center gap-2 p-4" href="#">
        <Image src="/delivery_365.svg" alt="365" width={45} height={45} />
        <div className="flex flex-col gap-1">
            <p className="text-blue-800 text-[0.9rem] font-semibold">
                Активувати Доставку 365
            </p>
            <p className="text-[0.8rem] text-gray-500 font-semibold">
                Безкоштовна доставка на рік за 365₴
            </p>
        </div>
    </Link>
  )
}
