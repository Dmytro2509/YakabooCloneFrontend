"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useBookCategoryStore from '@/app/stores/BookCategoryState';
import Image from 'next/image';

export const Sidebar = () => {

  const { setIsBookCategoryModalOpen, setActiveButtonIndex } = useBookCategoryStore();
  const [ categories, setCategories ] = useState(null)

  const handleOpenModalClick = (buttonIndex) => {
    setIsBookCategoryModalOpen();
    setActiveButtonIndex(buttonIndex)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async() => {
    const response = await fetch("http://127.0.0.1:8003/sidebar/all");
    const data = await response.json();
    setCategories(data);
  }

  const clickableButtons = [
    {
        title: "Друковані книги",
        id: 1
    },
    {
        title: "Електронні книги",
        id: 2,
    },
    {
        title: "Аудіокниги",
        id: 3
    }
  ]

  return (
    <div className="w-[12%] flex flex-col gap-[12px] text-[0.9rem] text-gray-700 font-semibold">
        { categories && categories.map((category) => {
            return category.visible ? (
                !category.is_clickable ? (
                    <Link href={`/${category.slug}`} key={category.id} className='group hover:text-pink-600 flex flex-row items-center gap-2'>
                        { category.icon ? (
                            <Image src={category.icon} width={17} height={17} alt={category.slug} className='group-hover:text-pink-600'/>
                        ) : (<></>)}
                        { category.title }
                    </Link>
                ) : (
                    <button key={category.id} onClick={() => handleOpenModalClick(clickableButtons.find(((object) => object.title === category.title)).id)} 
                    className='group hover:text-pink-600 flex flex-row items-center gap-2'>
                        { category.icon ? (
                            <Image src={category.icon} width={17} height={17} alt={category.slug} className='group-hover:text-pink-600'/>
                        ) : (<></>)}
                        { category.title }
                    </button>
                )
            ) : null;
        }) }
    </div>
  )
}
