"use client"

import React from "react"
import useAuthorsListLangStore from "@/app/stores/AuthorsListLangState"
import { LanguageSidebar, LettersUa, SearchContainer } from "../authors"
import { LETTERSLT, LETTERSUA } from "@/app/dataStorage"


export const PubslishingMainContainer = () => {
    const { currentLang } = useAuthorsListLangStore();

    return(
        <>
            <div className="w-full h-full flex flex-row gap-10">
                <div className="flex flex-col gap-3 mt-3 w-[15%]">
                    <h1 className="text-[1.5rem] font-extrabold">Видавництва</h1>
                    <LanguageSidebar />
                </div>
                <div className="flex flex-col gap-8 w-[81%]">
                    { currentLang === "uk" ? (<LettersUa lettersList={LETTERSUA} />) :
                    (<LettersUa lettersList={LETTERSLT} />) }
                    <SearchContainer />
                </div>
            </div>
        </>
    )
}