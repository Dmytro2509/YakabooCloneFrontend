import React from 'react'
import Image from 'next/image'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

export const Review = ({ username, date, grade, reviewHeader, reviewText, likesCount=0, dislikeCount=0}) => {
  return (
    <div className="w-full flex flex-col gap-4 rounded-md p-5 bg-gray-100 text-[0.9rem]">
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-0 font-semibold">
                <span className="text-gray-800">
                    { username }
                </span>
                <span className="text-[0.8rem] text-gray-600 font-semibold">
                    { date }
                </span>
            </div>
            <div className="flex flex-col gap-0">
                <div className="flex flex-row items-center gap-1">
                    {[...Array(grade)].map((_, index) => (
                    <Image src="/review_star.svg" alt="star review" key={index} width={12} height={12} />
                    ))}     
                </div>
                <span className="text-pink-500 text-[0.9rem] font-semibold">
                    { grade } балів
                </span>
            </div>
        </div>
        <div className="flex flex-col gap-1 text-black">
            <span className="font-semibold">
                { reviewHeader }
            </span>
            <p className="text-left overflow-hidden whitespace-nowrap overflow-elipsis">
                { reviewText }
            </p>
        </div>
        <div className="flex flex-row items-center justify-between">
            <button className="text-gray-600 font-semibold hover:text-gray-500">
                Читати повністю
            </button>
            <div className="flex flex-row items-center gap-2 text-white text-[0.9rem] font-semibold">
                <button className={`${ likesCount > 0 ? "bg-pink-500 hover:bg-pink-400 text-white" : 
                "bg-gray-200 hover:bg-gray-100 text-gray-500" } rounded-full flex flex-row gap-1 items-center 
                w-[60px] text-center justify-center h-[30px]`}>
                    <AiOutlineLike size={18} />
                    {likesCount > 0 && likesCount}
                </button>
                <button className={`${ dislikeCount > 0 ? "bg-orange-500 hover:bg-orange-400 text-white" 
                    : "bg-gray-200 hover:bg-gray-100 text-gray-500" } w-[60px] text-center justify-center h-[30px]
                    rounded-full flex flex-row gap-1 items-center font-semibold `}>
                    <AiOutlineDislike size={18} />
                    { dislikeCount > 0 && dislikeCount }
                </button>
            </div>
        </div>
    </div>
  )
} 