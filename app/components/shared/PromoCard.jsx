import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

 const PromoCard = ({ imageSrc, title, text, endDate, href="#" }) => {
  return (
    <Link href={ href } className="flex flex-col gap-2 bg-white rounded-md text-left p-4">
        <Image src={ imageSrc } alt="Promo" height={400} width={400} 
        className="w-full" />
        <p className="font-bold">
            { title }
        </p>
        <p>
            { text }
        </p>
        <span className="text-gray-600">
            { endDate }
        </span>
    </Link>
  )

}

export default PromoCard