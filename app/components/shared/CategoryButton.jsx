import React from 'react'
import Link from "next/link"

export const CategoryButton = ({ href, text, isActive=false }) => {
  return (
    <Link className={`bg-gray-200 rounded-full px-3 py-2 text-center ${isActive ? "text-pink-500": "text-black"} font-normal 
    text-[0.8rem]`} href={href}>
        { text }
    </Link>
  )
}