"use client"

import { Endpoints } from '@/app/endpoints'
import React, { useEffect, useState } from 'react'
import { PromoCard } from '.'

export const Promos = () => {

    const [promos, setPromos] = useState([])

    useEffect(() => {
        fetchPromos();
    }, [])

    const fetchPromos = async() => {
        const response = await fetch(Endpoints.allPromos)
        const data = await response.json()
        setPromos(data)

    }

  return (
    <div className="w-[80%] grid grid-cols-2 gap-4 p-5 rounded-md bg-white">
        { promos && (
            promos.map((promo, index) => (
                <PromoCard key={index} promo={promo} />
            ))
        ) }
    </div>
  )
}
