"use client"

import useAuthorsListLangStore from '@/app/stores/AuthorsListLangState'
import React from 'react'

const LANGUAGES = [
  {
    code: "uk",
    title: "Українська",
    id: 1
  },
  {
    code: "lt",
    title: "Латинська",
    id: 2
  }
]

export const LanguageSidebar = () => {

  const { currentLang, setCurrentLang } = useAuthorsListLangStore();

  return (
    <div className="bg-white rounded-md py-4  mb-2">
        <ul className="flex flex-col gap-2 list-none text-[0.9rem] text-gray-500 font-semibold">
            { LANGUAGES.map((lang) => (
              <li className={`px-6 ${currentLang === lang.code ? "border-pink-500 text-pink-500": "border-white"} cursor-pointer border-l-2`} key={lang.id}
              onClick={() => setCurrentLang(lang.code)}>
                { lang.title }
              </li>
            )) }
        </ul>
    </div>
  )
}
