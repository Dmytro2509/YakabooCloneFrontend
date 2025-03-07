"use client"

import { useState, useEffect } from "react"
import { BookMainContainer, InterestingBooks, NewBooks, PriceContainer } from "../../components";

export default function BookPage({ bookSlug }) {

    const [showPriceContainer, setShowPriceContainer] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPosition = 500;

            if(scrollPosition >= triggerPosition) {
                setShowPriceContainer(true);
            } else {
                setShowPriceContainer(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return(
        <div className="flex flex-col gap-2">
            <div className="bg-white px-[6.5%] -mt-2">
                <BookMainContainer />
            </div>
            <div className="px-[6.5%] bg-gray-100 pt-4">
                <NewBooks />
                <InterestingBooks />    
            </div>
            
            { showPriceContainer && <PriceContainer /> }
            
        </div>
        
    )
}