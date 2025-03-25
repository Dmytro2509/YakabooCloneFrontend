import React from 'react'

export const NoneSpan = ({ text="Немає" }) => {
  return (
    <span className="px-2 py-1 font-semibold rounded-md bg-gray-100 text-gray-700 text-[0.8rem]">
        { text }
    </span>
  )
}
