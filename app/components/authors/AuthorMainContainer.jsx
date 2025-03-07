"use client"

import React from 'react'
import useAuthorsListLangStore from '@/app/stores/AuthorsListLangState'
import { AuthorsContainer, LanguageSidebar, LettersUa, SearchContainer } from '.'
import { LETTERSLT, LETTERSUA } from '@/app/dataStorage'

export const AuthorMainContainer = () => {

  const { currentLang } = useAuthorsListLangStore();
  return (
    <>
      <div className="w-full h-full flex flex-row gap-10">
        <div className="flex flex-col gap-3 mt-3 w-[15%]">
            <h1 className="text-[1.5rem] font-extrabold">Автори</h1>
            <LanguageSidebar />    
        </div>
        <div className="flex flex-col gap-8 w-[81%]">
            { currentLang === "uk" ? (<LettersUa lettersList={LETTERSUA} />): 
            (<LettersUa lettersList={LETTERSLT} />) }
            <SearchContainer />
            <AuthorsContainer />
        </div>
      </div>
    </>
  )
}
