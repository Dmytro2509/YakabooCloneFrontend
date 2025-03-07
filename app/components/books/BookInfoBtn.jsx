import Link from 'next/link'
import React from 'react'

export const BookInfoBtn = ({ text, link="#", isActive=true }) => {
  return (
    <Link href={link} className={`p-2 px-4 text-center font-semibold 
    ${isActive ? "bg-gray-100 text-black": "bg-white text-gray-600"} border border-gray-200 rounded-lg text-[0.9rem]`}>
        { text }
    </Link>
  )
}
