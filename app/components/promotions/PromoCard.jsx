import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import parse from "html-react-parser"
import { differenceInMinutes, differenceInHours, differenceInDays, parseISO } from 'date-fns'


export const PromoCard = ({ promo }) => {
    
    const formatTimeDifference = (dateString) => {
        if(dateString){
        const now = new Date();
        const targetDate = parseISO(dateString);
    
        const days = Math.abs(differenceInDays(targetDate, now));
        const hours = Math.abs(differenceInHours(targetDate, now) % 24);
        const minutes = Math.abs(differenceInMinutes(targetDate, now) % 60);
    
        return `${days > 0 ? days + ' днів' : ''} ${hours > 0 ? hours + ' годин' : ''} ${minutes > 0 ? minutes + ' хвилин' : ''}`;    
        }
    }

  return (
    <Link className="flex flex-col gap-2" href={`/promotion/${promo.slug}`}>
        <Image src={promo.image} alt={promo.title} width={400} height={400}
        className="w-full" />
        <div className="flex flex-col gap-1 text-[0.9rem]">
            <p className="font-semibold text-[1.1rem]">
                { promo.title }
            </p>
            {parse(promo.short_description)}
        </div>
        <span className="text-gray-500 font-bold text-[0.8rem]">
            {formatTimeDifference(promo.end_date || null)}
        </span>
    </Link>
  )
}
