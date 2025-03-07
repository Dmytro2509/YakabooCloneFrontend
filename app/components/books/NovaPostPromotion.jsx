import Link from 'next/link'
import React from 'react'

export const NovaPostPromotion = ({ timeToEnd="137 днів, 11 годин, 14 хвилин" }) => {
  return (
    <Link href="#" className="border border-orange-600 rounded-lg py-5 px-4 flex flex-col gap-4 relative">
        <span className="text-[0.8rem] text-gray-700 inline-block ml-[18%]">
            { timeToEnd } 
        </span>
        <p className="font-semibold text-[1rem]">
            -20% на доставку до країн Європи від Nova Post
        </p>
        <div className="absolute bg-orange-600 text-white text-[0.7rem] left-0 px-4 font-semibold py-1 rounded-sm top-4">
            Акція
        </div>
    </Link>
  )
}
