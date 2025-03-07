"use client"

import { Endpoints } from '@/app/endpoints'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { differenceInMinutes, differenceInHours, differenceInDays, parseISO } from 'date-fns'

export const PromoCategoriesSidebar = () => {

    const [categories, setCategories] = useState([])
    const pathname = usePathname();

    useEffect(() => {
        fetchCategories();
    }, [])

    const fetchCategories = async() => {
        const storedCategories = localStorage.getItem("promo_categories")
        if(storedCategories){
            setCategories(JSON.parse(storedCategories))
        } else {
            const response = await fetch(Endpoints.allPromoCategries)
            const data = await response.json()
            setCategories(data)
            localStorage.setItem("promo_categories", JSON.stringify(data))
        }
    }

  return (
    <div className="bg-white rounded-md w-[20%] py-3 flex flex-col gap-1 font-bold self-start">
        <Link href="/promotions" className={`border-l-2 px-5 py-2 
        ${pathname === "/promotions" ? 'border-pink-500 text-pink-500' : 
        'border-white text-gray-500'}`}>
            Всі
        </Link>
        { categories && (
            categories.map((category) => (
                <Link href={`/promotions/${category.slug}`} key={category.id}
                className={`border-l-2 px-5 py-2 ${pathname === `/promotions/${category.slug}` ? 
                'border-pink-500 text-pink-500' : 'border-white text-gray-500'}`}>
                    { category.title }
                </Link>
            ))
        ) }
    </div>
  )
}
