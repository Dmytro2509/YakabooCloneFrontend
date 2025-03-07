"use client"

import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5"

const CLOSE_MESSAGE_TIME = 10000

export const FlashMessages = ({ message, onClose }) => {

    const [visible, setVisible] = useState(true);
    const [timerId, setTimerId] = useState(null)

    useEffect(() => {
        if(message) {
            setVisible(true);
            const id = setTimeout(() => {
                setVisible(false);
                setTimeout(() => onClose(), 300);
            }, CLOSE_MESSAGE_TIME);

            setTimerId(id);

            return () => clearTimeout(timerId)
        }
    }, [message, onClose])

    const handleClose = () => {
        setVisible(false);
        clearTimeout(timerId);
        setTimeout(() => onClose(), 300)
    }

  return (
    <div className={`fixed top-5 right-5 bg-white rounded-mx px-3 py-5 shadow-lg flex flex-col gap-2
        ${ visible ? "animate-slide-in" : "animate-slide-out" }`}>
        <button onClick={ handleClose } 
        className="p-2 rounded-full text-gray-800 hover:bg-gray-200 text-center cursor-pointer justify-center items-center
        absolute top-0 right-2">
            <IoCloseSharp size={17} />
        </button>
        <span className="text-left text-[0.9rem] mt-2 font-semibold max-w-[95%] mx-auto">
            { message }
        </span>
        <button className="w-full rounded-md text-center text-[0.9rem] py-2 bg-blue-800 hover:bg-blue-900 text-white
        font-semibold" onClick={ handleClose }>
            ОК
        </button>
    </div>
  )
}
