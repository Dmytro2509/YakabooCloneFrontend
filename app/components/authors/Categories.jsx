"use client"

import { Endpoints } from '@/app/endpoints'
import React, { useState, useEffect } from 'react'

export const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        const response = await fetch(Endpoints.allBookCategories)
        const data = await response.json()
        setCategories(data)
    }

  return (
    <div className="flex flex-col gap-2 w-full text-[0.9rem] max-h-[340px] overflow-scroll">
        <p className="font-bold text-[1rem]">
            Категорії
        </p>
        { categories && (
            <form className="flex flex-col gap-1">
                { categories.map((category, index) => (
                    <div className="flex flex-row items-center gap-2" key={index}>
                        <input type="checkbox" name={ category.slug } id={ category.id } 
                        className="w-[15px] h-[30px] bg-gray-500 border border-gray-200 cursor-pointer" />
                        <label className="text-gray-500 font-semibold text-[1rem] cursor-pointer hover:text-gray-700"
                        htmlFor={ category.slug }>
                            { category.title }
                        </label>
                    </div>
                )) }
            </form>    
        ) }
        
    </div>
  )
}