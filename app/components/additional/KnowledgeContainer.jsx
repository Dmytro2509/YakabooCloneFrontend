'use client'

import React, { useState, useEffect } from 'react'
import { AdditionalSidebar } from '.'
import parse from "html-react-parser"

export const KnowledgeContainer = ({ knowledgeSlug }) => {

    const [knowledge, setKnowledge] = useState(null)

    useEffect(() => {
        fetchKnowledge();
    }, [])

    const fetchKnowledge = async() => {
        const response = await fetch(`http://127.0.0.1:8003/knowledges/${knowledgeSlug}`)
        const data = await response.json()
        setKnowledge(data)
    }

  return (
    <div className="w-full flex flex-col gap-5 mt-5 h-auto">
        {console.log(knowledgeSlug)}
        <h1 className="text-[1.5rem] font-extrabold">
            {knowledge && knowledge.title}
        </h1>
        <div className="w-full flex flex-row gap-5">
            <AdditionalSidebar />
            {knowledge && parse(knowledge.content)}
        </div>
    </div>
  )
}
