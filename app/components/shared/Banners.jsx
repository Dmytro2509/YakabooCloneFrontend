"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { Endpoints } from '@/app/endpoints';

export const Banners = () => {

    const [currentFirstImageIndex, setCurrentFirstImageIndex] = useState(0);
    const [images, setImages] = useState(null);

    useEffect(() => {
        fetchBanners()
    }, [])

    const fetchBanners = async() => {
        const response = await fetch(Endpoints.allBanners)
        const data = await response.json()
        setImages(data);
    }

    const handleNext = () => {
        if(images){
            setCurrentFirstImageIndex((prevIndex) => (prevIndex + 1) % images.length);    
        }
    };

    const handlePrev = () => {
        if(images) {
            setCurrentFirstImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);    
        }
    };

    const handleSelectImage = (index) => {
        setCurrentFirstImageIndex(index);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFirstImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

    const displayedImages = images ? [
        images[currentFirstImageIndex],
        images[(currentFirstImageIndex + 1) % images.length],
        images[(currentFirstImageIndex + 2) % images.length]
    ] : [];

    return (
        <div className="w-full bg-white rounded-md p-4 mt-2 relative">
            <div className="flex gap-3 overflow-x-hidden max-w-[100%] z-10">
                { displayedImages.map((image) => (
                    <Link href={ image.link } key={ image.id } className="flex-none transition-all">
                        <Image src={ image.image_src } width={410} height={250} alt={`Banner ${image.id}`} />
                    </Link>
                )) }
            </div>
            <button onClick={handlePrev} className="bg-white/70 absolute px-4 py-6 justify-center rounded-lg text-gray-500 top-[40%] left-0" >
                <MdOutlineChevronLeft size={30} />
            </button>
            <button onClick={handleNext} className="bg-white/70 absolute px-4 py-6 justify-center rounded-lg text-gray-500 top-[40%] right-0">
                <MdOutlineChevronRight size={30} />
            </button>
            { images && (
                <div className="absolute bottom-[10%] flex flex-row items-center gap-2 left-[29%]">
                    {[...Array(images.length)].map((_, index) => (
                        <div className={`h-[7px] w-[70px] rounded-md cursor-pointer ${index === currentFirstImageIndex ? 'bg-black' : 'bg-black/40'}`} 
                        key={index}
                        onClick={() => handleSelectImage(index)} />
                    ))}
                </div>    
            ) }    
        </div>
    )
}
