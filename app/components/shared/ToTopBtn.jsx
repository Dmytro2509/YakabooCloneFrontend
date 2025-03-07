"use client"

import React from 'react'

export const ToTopBtn = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

  return (
    <span className="flex flex-row items-center gap-1 text-gray-600 font-semibold text-[0.9rem] 
    cursor-pointer" onClick={ scrollToTop }>
        Вгору  &uarr;
    </span>
  )
}