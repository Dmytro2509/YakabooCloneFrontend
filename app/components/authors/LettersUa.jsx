"use client"

import Link from 'next/link'
import React, { useState } from 'react'


export const LettersUa = ({ lettersList, onLetterChange }) => {

  const [currentLetter, setCurrenLetter] = useState("а");

  const handleLetterButtonClick = (letter) => {
    if(letter){
      setCurrenLetter(letter);
      onLetterChange(letter)
    }
  }

  return (
    <div className="bg-white rounded-md flex flex-row items-center gap-2 mt-[4.5%] p-5">
        { lettersList.map((letter) => (
            <Link href="#" className={`${letter.letter.toLowerCase() === currentLetter.toLowerCase() ? "bg-blue-800 text-white": "bg-wite text-blue-900"} 
            ${letter.id !== 1 ? "hover:bg-gray-100": ""}
            hover:opacity-[.80] rounded-full p-2 w-[30px] h-[30px] pt-1 pl-[9px] transition-all 0.3s ease-in-out`} key={ letter.id }
            onClick={() => handleLetterButtonClick(letter.letter.toLowerCase())}>
                { letter.letter }
            </Link>
        )) }
    </div>
  )
}