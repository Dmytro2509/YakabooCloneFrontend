"use client"

import React, { useEffect, useState } from "react"
import useAuthorsListLangStore from "@/app/stores/AuthorsListLangState"
import { LanguageSidebar, LettersUa, SearchContainer } from "../authors"
import { LETTERSLT, LETTERSUA } from "@/app/dataStorage"
import { PublishingContainer } from "."


export const PubslishingMainContainer = () => {
    const { currentLang } = useAuthorsListLangStore();
    const [defaultLetter, setDefaultLetter] = useState("а");
    const [currentPubslishing, setCurrenPublishing] = useState([]);
    const [searchValue, setSearchValue] = useState(null);

    const fetchPubslishingByFirstLetter = async (letter) => {
        try{
            const response = await fetch(`http://127.0.0.1:8003/publishing/first-letter/${letter}`);
            if(!response.ok){
                console.error(response)
            } else {
                const data = await response.json();
                setCurrenPublishing(data);
            }
        }
        catch(error){
            console.error(error)
        }
    }

    const handleLetterChange = (letter) => {
        setDefaultLetter(letter)
        fetchPubslishingByFirstLetter(letter);
    }

    useEffect(() => {
        fetchPubslishingByFirstLetter(defaultLetter)
    }, [])

    return(
        <>
            <div className="w-full h-full flex flex-row gap-10">
                <div className="flex flex-col gap-3 mt-3 w-[15%]">
                    <h1 className="text-[1.5rem] font-extrabold">Видавництва</h1>
                    <LanguageSidebar />
                </div>
                <div className="flex flex-col gap-8 w-[81%]">
                    { currentLang === "uk" ? (<LettersUa lettersList={LETTERSUA} 
                    onLetterChange={ handleLetterChange }/>) :
                    (<LettersUa lettersList={LETTERSLT} onLetterChange={ handleLetterChange } />) }
                    <SearchContainer />
                    { currentPubslishing && <PublishingContainer publishing={currentPubslishing}/> }
                </div>
            </div>
        </>
    )
}