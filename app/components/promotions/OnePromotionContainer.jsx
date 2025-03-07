"use client"

import React, { useState, useEffect } from 'react'
import parse from "html-react-parser"
import { differenceInMinutes, differenceInHours, differenceInDays, parseISO } from 'date-fns'
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const OnePromotionContainer = ({ promoSlug }) => {

    const [promo, setPromo] = useState(null);
    const [showFullDesc, setShowFullDesc] = useState(false);

    const toggleShowFullDesc = () => {
        if(showFullDesc) {
            setShowFullDesc(false)
        } else {
            setShowFullDesc(true)
        }
    }

    useEffect(() => {
        fetchPromo()
    }, [])

    const fetchPromo = async() => {
        const response = await fetch(`http://localhost:8003/promotions/${promoSlug}`)
        const data = await response.json()
        setPromo(data)
    }

    const formatTimeDifference = (dateString) => {
        
        const now = new Date();
        const targetDate = parseISO(dateString);
    
        const days = Math.abs(differenceInDays(targetDate, now));
        const hours = Math.abs(differenceInHours(targetDate, now) % 24);
        const minutes = Math.abs(differenceInMinutes(targetDate, now) % 60);
    
        return `${days > 0 ? days + ' днів' : ''} ${hours > 0 ? hours + ' годин' : ''} ${minutes > 0 ? minutes + ' хвилин' : ''}`;
    }    

  return (
    <div className="flex flex-col gap-5 mt-5 w-full h-auto">
        <h1 className="text-[1.5rem] font-extrabold">
            Акції та знижки
        </h1>
        {
            promo && (
                <div className="w-full rounded-md bg-white p-10 flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[1.2rem] font-bold">
                            { promo.title }
                        </h1>
                        <p className="text-gray-500">
                            { console.log(promo.end_date) }
                            До кінця акції: {formatTimeDifference(promo.end_date)}
                        </p>
                    </div>
                    <div className="flex flex-row gap-5 w-full">
                        <div className="w-1/2">
                            <Image src={ promo.image } className=" rounded-md" width={800} height={500} alt={ promo.title } />
                        </div>
                        <div className="w-1/2 text-left text-[1.1rem] flex flex-col gap-2">
                            {parse(promo.short_description)}
                            <button className="flex flex-row gap-1 items-center text-pink-500 text-[0.9rem] font-bold"
                            onClick={() => toggleShowFullDesc() }>
                                {
                                    showFullDesc ? "Показати менше" : "Деталі акції"
                                }
                                {
                                    showFullDesc ? <FaChevronUp size={13} /> :  <FaChevronDown size={13} />
                                }
                               
                            </button>
                        </div>
                    </div>
                    { showFullDesc ? parse(promo.long_description) : <></>}
                </div>    
            )
        }
        
    </div>
  )
}
