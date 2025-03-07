"use client";

import React from 'react'
import { BsChatRightDotsFill } from "react-icons/bs";
import useChatModalStore from "../../stores/ChatModalState";
import { IoClose } from "react-icons/io5";

export const Chat = () => {

  const { isChatModalOpen, setIsChatModalOpen } = useChatModalStore();

  return (
    <>
        <div className="bg-[#ea33c0] rounded-[50px] fixed bottom-[12.5%] left-[1.5%] -z-1 animate-ping transform-all duration-700 w-[65px] h-[65px]" />
        <button className="w-[80px] h-[80px] rounded-full fixed bottom-32 left-5 bg-black z-10" onClick={ setIsChatModalOpen }>
            { isChatModalOpen ? (
              <IoClose size={50} className="text-gray-300 absolute bottom-4 left-[15px]" />
            ) : (<BsChatRightDotsFill size={50} className="text-pink-500 absolute -left-1 top-4 rotate-x-180" />)}
            
        </button>
    </>
    
  )
}