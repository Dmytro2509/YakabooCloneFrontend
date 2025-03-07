import Link from 'next/link'
import React from 'react'


export const LettersUa = ({ lettersList }) => {
  return (
    <div className="bg-white rounded-md flex flex-row items-center gap-2 mt-[4.5%] p-5">
        { lettersList.map((letter) => (
            <Link href="#" className={`${letter.id === 1 ? "bg-blue-800 text-white": "bg-wite text-blue-900"} 
            ${letter.id !== 1 ? "hover:bg-gray-100": ""}
            hover:opacity-[.80] rounded-full p-2 w-[30px] h-[30px] pt-1 pl-[9px] transition-all 0.3s ease-in-out`} key={ letter.id }>
                { letter.letter }
            </Link>
        )) }
    </div>
  )
}