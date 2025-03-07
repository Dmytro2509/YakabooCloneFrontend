"use client"

import useBookImagesModalStore from '@/app/stores/BookImagesModalState'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io";

const IMAGES = [
    "https://static.yakaboo.ua/media/catalog/product/2/7/276_1_2.jpg",
    "https://static.yakaboo.ua/media/catalog/product/2/7/276_2_1.jpg",
    "https://static.yakaboo.ua/media/catalog/product/2/7/276_5_1.jpg",
    "https://static.yakaboo.ua/media/catalog/product/2/7/276_6_1.jpg",
    "https://static.yakaboo.ua/media/catalog/product/2/7/276_3_1.jpg",
    "https://static.yakaboo.ua/media/catalog/product/2/7/276_4_1.jpg"
]

export const BookImagesModal = () => {

    const { isBookImagesModalOpen, setIsBookImagesModalOpen } = useBookImagesModalStore()
    const [activeImage, setActiveImage] = useState(0)
    const imageRefs = useRef([]);

    useEffect(() => {
        if(isBookImagesModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isBookImagesModalOpen])

    const scrollToImage = (index) => {
        if(imageRefs.current[index]){
            imageRefs.current[index].scrollIntoView({ behavior: "smooth" })
        }
    }

    const onRightImageClick = (index) => {
        setActiveImage(index);
        scrollToImage(index)
    }
    
  return (
    <div className="fixed inset-0 bg-transparent/30 bg-opacity-50 flex w-full h-full z-50 cursor-auto transition delay-300 ease-in-out">
        <div className="bg-white rounded-md shadow-sm absolute left-[15%] top-0 h-[100vh] w-[1200px] m-auto flex flex-col gap-5 py-7 px-6 overflow-y-auto 
        overlflow-y-hidden">
            <button className="rounded-full text-gray-600 font-semibold p-2 hover:bg-gray-100 absolute right-2 top-2 transition-all duration-300 ease-in" 
            onClick={ setIsBookImagesModalOpen }>
                <IoMdClose size={20} />
            </button>
            <p className="font-semibold text-[1.1rem] text-black">
                11/22/63
            </p>
            <div className="flex flex-row gap-2 overflow-auto">
                <div className="bg-gray-100 rounded-md p-5 overflow-scroll w-[70%] flex flex-col gap-2">
                    { IMAGES.map((src, index) => (
                        <Image key={index} src={src} alt={`11/22/63-${index + 1}`}
                        width={900}
                        height={800}
                        className="rounded-md m-auto"
                        ref={(el) => (imageRefs.current[index] = el)} />
                    )) }
                </div>
                <div className="flex flex-col gap-2 w-[30%]">
                    <p className="text-[0.9rem] font-semibold">Обкладинка</p>
                    <div className="flex flex-row gap-1 max-h-[60px] flex-wrap">
                        {
                            IMAGES.map((src, index) => (
                                <Image key={index} src={src} alt={`11/22/63-${index + 1}`}
                                width={50} height={60} className={`cursor-pointer rounded-md ${activeImage === index ? "border border-black": ""}`}
                                onClick={() => onRightImageClick(index)} />
                            ))
                        }
                    </div>    
                </div>
                
            </div>
        </div>
    </div>
  )
}
