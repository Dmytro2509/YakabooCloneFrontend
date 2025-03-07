import React from 'react'

export const FilterButton = ({ text, onClick, isActive=false }) => {
  return (
    <div className={`${ isActive ? "bg-gray-200" : "bg-white" } px-2 py-2 border border-gray-200 
    rounded-md text-gray-600 hover:text-blue-600 text-[0.9rem] cursor-pointer`}
    onClick={ onClick }>
        { text }
    </div>
  )
}
