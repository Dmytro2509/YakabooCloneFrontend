"use client"

import React, {useState, useEffect} from 'react'
import { IoCloseSharp } from 'react-icons/io5'

const CLOSE_MESSAGE_TIME = 10000

export const FlashMessagesWithAgreement = ({ message, onConfirm, onClose }) => {
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
          <div className="flex flex-row items-center justify-between gap-10 w-full">
            <button className="bg-blue-900 hover:bg-blue-900/80 rounded-md text-white text-[0.9rem] py-2 
            w-[40%] text-center font-semibold" onClick={onConfirm}>
                Видалити
            </button>
            <button className="bg-blue-900 hover:bg-blue-900/80 rounded-md text-white text-[0.9rem] py-2 
            w-[40%] text-center font-semibold" onClick={handleClose}>
                Скасувати
            </button>
          </div>
        </div>
    )
}
