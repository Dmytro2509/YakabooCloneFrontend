"use client"

import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { IoCloseSharp } from 'react-icons/io5'
import useUpdateWishlistModalState from '@/app/stores/UpdateWishListModalState';

export const UpdateWishListModal = ({ wishlist, updateWishlistTitle }) => {

    const [newTitle, setNewTitle] = useState(wishlist.title)
    const { setIsUpdateWishlistOpen } = useUpdateWishlistModalState()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleChange = (event) => {
        setNewTitle(event.target.value);
    } 

    const onSubmit = async() => {

        const fetch_body = {title: newTitle, wishlist_id: wishlist.id}
        try {
            const response = await fetch(`http://localhost:8003/wishlists/${wishlist.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(fetch_body)
            });

            if(response.ok) {
                const updatedWishList = await response.json();
                updateWishlistTitle(updatedWishList)
                setIsUpdateWishlistOpen(false);
            } else {
                console.error("Failed to update wishlist")
            }
        } catch(err){
            console.error("Error: ",err)
        }
    }

  return (
    <div className="fixed inset-0 bg-transparent/30 bg-opacity-50 flex w-full h-full z-50 cursor-auto">
        <div className="bg-white rounded-lg shadow-sm absolute top-[25%] right-[35%] w-[550px] h-[230px] flex flex-col gap-2 py-7 px-10 overflow-y-auto
        text-center">
            <button className="p-2 rounded-full text-gray-800 hover:bg-gray-200 text-center cursor-pointer justify-center items-center absolute 
            top-[1%] right-1"
            onClick={() => setIsUpdateWishlistOpen(false) }>
                <IoCloseSharp size={17} />
            </button>
            <h1 className="font-bold text-[1.1rem] text-left">
                Редагувати список бажань
            </h1>
            <form className="w-full justify-start text-left">
                <input type="text" className="bg-gray-100 rounded-gray-200 rounded-md hover:bg-white 
                w-full border border-gray-300 mb-2
                h-[45px] px-4" value={ newTitle } onInput={ handleChange } name="title" id="title" placeholder="Новий список бажань" 
                { ...register("title", {
                    required: "Поле обов'язкове для заповнення",
                    minLength: { value: 3, message: "Введіть мінімум 3 символи"},
                    maxLength: { value: 100, message: "Максимально допустима довжина 100 символів" }
                })}/>
                { errors.title && (<span className="text-red-500 font-semibold">{ errors.title.message }</span>) }
            </form>
            <div className="w-full flex flex-row gap-3 items-center mt-2">
                <button type="submit" className="w-1/2 bg-blue-900 hover:bg-blue-900/80 transition-all 
                duration-300s ease-in-out text-white font-semibold text-center py-3 rounded-md"
                onClick={() => onSubmit()}>
                    Зберегти
                </button>
                <button type="submit" className="w-1/2 bg-red-600 hover:bg-red-700 transition-all 
                duration-300s ease-in-out text-white font-semibold text-center py-3 rounded-md"
                onClick={() => setIsUpdateWishlistOpen(false)}>
                    Скасувати
                </button>
            </div>
        </div>
    </div>
  )
}
