import React from 'react'

export const PaginationBtn = ({ pageNumber, isActive=false }) => {
  return (
    <button className={`rounded-md border border-gray-200 h-[35px] px-4 text-gray-300 ${isActive ? "bg-gray-100": "bg-white"} text-gray-500`}>
        { pageNumber }
    </button>
  )
}
