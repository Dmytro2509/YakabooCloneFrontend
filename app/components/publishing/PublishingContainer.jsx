import React from 'react'
import Link from "next/link";


export const PublishingContainer = ({ publishing }) => {
  return (
    <div className="w-full bg-white rounded-md p-4 grid grid-cols-4 gap-3">
        { publishing.length > 0 ? ( publishing.map(pub => (
            <Link key={pub.id} 
            href="#"
            className="flex flex-row items-center 
            justify-between text-blue-900 hover:bg-gray-100 px-1">
                <span className="font-semibold">{ pub.title }</span>
            </Link>
        )) ) : (
        <div className="w-[50%] m-auto text-gray-500 font-bold 
        ml-[170%]">
            Нічого не знайдено
        </div>
    )}
    </div>
  )
}
