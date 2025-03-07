"use client";


import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Endpoints } from '@/app/endpoints';

export const AdditionalSidebar = () => {

    const [knowledges, setKnowledges] = useState([])
    const pathname = usePathname()

    useEffect(() => {
        fetchKnowledges();
    }, [])

    const fetchKnowledges = async() => {
        const storedKnowledges = localStorage.getItem("knowledges")
        if (storedKnowledges){
            setKnowledges(JSON.parse(storedKnowledges))
        } else {
            const response = await fetch(Endpoints.allKnowledges)
            const data = await response.json();
            setKnowledges(data)
            localStorage.setItem("knowledges", JSON.stringify(data))
        }
    }

  return (
    <div className="bg-white rounded-md w-[20%] py-3 flex flex-col gap-1 font-bold self-start">
        { knowledges && (
            knowledges.map((knowledge, index) => (
                <Link href={`/knowledge/${knowledge.slug}`} key={index} 
                className={`border-l-2 px-5 py-2 ${pathname === `/knowledge/${knowledge.slug}` ? 'border-pink-500 text-pink-500': 'border-white text-gray-500'}`}>
                    { knowledge.title }
                </Link>
            ))
        ) }
    </div>
  )
}