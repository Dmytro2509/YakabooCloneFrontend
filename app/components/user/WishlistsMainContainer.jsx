"use client"

import React, { useState } from 'react'
import { BsFillPencilFill, BsTrash3 } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import useWishListModalState from "@/app/stores/WishListModalState"
import { FlashMessagesWithAgreement, UpdateWishListModal } from '../shared';
import useUpdateWishlistModalState from '@/app/stores/UpdateWishListModalState';

export const WishlistsMainContainer = ({ wishlists, deleteWishlist, updateWishlist}) => {

    const { setIsWishListModalOpen } = useWishListModalState(); 
    const [selectedWishlistForUpdate, setSelectedWishlistForUpdate] = useState(null);
    const { isUpdateWishlistOpen, setIsUpdateWishlistOpen } = useUpdateWishlistModalState()
    const [showFlashMessage, setShowFlashMessage] = useState(false)
    const [wishlistToDelete, setWishlistToDelete] = useState(null)
    const [showBooks, setShowBooks] = useState([])

    const handleDeleteClick = wishlist => {
        setWishlistToDelete(wishlist)
        setShowFlashMessage(true)
    }

    const handleConfirmDelete = () => {
        deleteWishlist(wishlistToDelete.id)
        setShowFlashMessage(false)
    }

    const handleCloseFlashMessage = () => {
        setShowFlashMessage(false);
    }

    const handleUpdateWishlistButton = (wishlist) => {
        setSelectedWishlistForUpdate(wishlist)
        setIsUpdateWishlistOpen(true)
    }

    const setBooksOpen = wishlistId => {
        setShowBooks((prevShowBooks) => [...prevShowBooks, wishlistId])
    }

    const setBooksClose = wishlistId => {
        setShowBooks((prevShowBooks) => prevShowBooks.filter(container => container !== wishlistId))
    }


  return (
    <div className="flex flex-row gap-5 w-full items-start">
        <div className="w-[20%] bg-white rounded-md p-7 flex flex-col gap-4">
            <button className="w-full py-2 text-white text-semibold text-center bg-blue-900 
            hover:bg-blue-900/80 transition-all duration-200s ease-in-out rounded-md"
            onClick={() => setIsWishListModalOpen(true) }>
                Створити список
            </button>
            { wishlists.map((wishlist, index) => (
                <div className="text-gray-500 font-bold text-[0.9rem] cursor-pointer px-2" key={index}>
                    { wishlist.title }
                </div>
            )) }
        </div>

        <div className="flex flex-col w-[80%] gap-5">
            { wishlists.map((wishlist, index) => (
                <div className="flex flex-col gap-0" key={index}>
                    <div className="w-full bg-white p-5 flex flex-row justify-between rounded-md cursor-pointer items-center">
                        <span className="text-gray-500 font-semibold text-[0.9rem]">
                            { wishlist.title }
                        </span>
                        <div className="flex flex-row items-center gap-1">
                            <button className="p-2 bg-gray-100 hover:bg-gray-200 transition-all duration-150 ease-in rounded-full"
                            onClick={() => handleUpdateWishlistButton(wishlist)}>
                                <BsFillPencilFill size={12} />
                            </button>
                            <button className="p-2 bg-gray-100 hover:bg-gray-200 transition-all duration-150 ease-in rounded-full"
                            onClick={ () => handleDeleteClick(wishlist) }>
                                <BsTrash3 size={12} className="text-red-500" />
                            </button>
                            { !showBooks.includes(wishlist.id) ? (
                                <button className="text-gray-500 hover:text-gray-600 transition-all duration-150 ease-in-out ml-4"
                                onClick={() => setBooksOpen(wishlist.id)}>
                                    <FaChevronDown size={12} />
                                </button>    
                            ) : (
                                <button className="text-gray-500 hover:text-gray-600 transition-all duration-150 ease-in-out ml-4"
                                onClick={() => setBooksClose(wishlist.id)}>
                                    <FaChevronUp size={12} />
                                </button>
                            )}
                            
                        </div>
                    </div>
                    <div className={`bg-white border-t border-gray-200 p-5 text-[0.9rem] text-gray-600 font-semibold 
                        ${ showBooks.includes(wishlist.id) ? 'block' : 'hidden' }`}>
                        У цьому списку немає товарів
                    </div>
                </div>
            )) }
            { isUpdateWishlistOpen && <UpdateWishListModal wishlist={selectedWishlistForUpdate} updateWishlistTitle={updateWishlist} /> }
        </div>
        {showFlashMessage && (
            <FlashMessagesWithAgreement 
                message="Ви впевнені, що хочете видалити всі книги зі списку бажань?"
                onConfirm={handleConfirmDelete}
                onClose={handleCloseFlashMessage}
            />
            )}
    </div>
  )
}
