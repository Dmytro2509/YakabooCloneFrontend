"use client"

import { WishlistsMainContainer } from "@/app/components";
import { CreateWishListModal } from "@/app/components/shared/modals/CreateWishListModal";
import { useProtectedPage } from "@/app/hooks/useProtectedPage";
import useWishListModalState from "@/app/stores/WishListModalState"
import {useState, useEffect} from "react"
import { FaSpinner } from "react-icons/fa";

export default function WishListPage() {

    const { isWishListModalOpen, setIsWishListModalOpen } = useWishListModalState();
    const { isAuthenticated, loading, handleCloseModal } = useProtectedPage();
    const [wishlists, setWishlists] = useState([])

    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            return match[2]
        }
        return null;
      }

    const fetchWishlists = async () => {
        const userEmail = getCookie("email")
        if (userEmail) {
            try {
                const response = await fetch(`http://localhost:8003/wishlists/${userEmail}`)

                if (response.ok) {
                    const result = await response.json()
                    setWishlists(result)
                } else {
                    console.error(response.message)
                }
            } catch (error) {
                console.error("Error: ", error)
            }
        }
    }

    useEffect(() => {
        fetchWishlists()
    }, [])

    const addWishlist = (newWishlist) => {
        setWishlists((prevWishlists) => [...prevWishlists, newWishlist])
    }

    const deleteWishList = async (id) => {
        try {
            const response = await fetch(`http://localhost:8003/wishlists/${id}`, {
                method: "DELETE"
            })
            if(response.ok){
                setWishlists((prevWishLists) => prevWishLists.filter(wishlist => wishlist.id !== id))
            } else {
                console.error("Failed to delete wishlist")
            }
        } catch(error){
            console.error("Error:", error)
        }
    }

    const updateWishlistTitle = (updatedWishList) => {
        setWishlists((prevWishLists) => 
        prevWishLists.map((wishlist) => 
            wishlist.id === updatedWishList.id ? updatedWishList : wishlist))
    }

    if (loading) {
        return <FaSpinner size={40} className="flex m-auto mt-[10%] animate-spin" />;
    }

    return (
        <div className="bg-gray-100 px-[6.5%] -mt-5 pb-10 h-auto">
            {isWishListModalOpen && <CreateWishListModal addWishlist={addWishlist} />}
            <div className="w-full flex flex-col gap-5 mt-5">
                <h1 className="text-[1.5rem] font-extrabold">
                    Бажане
                </h1>
                {wishlists.length === 0 ? (
                    <div className="text-center justify-center max-w-[40%] mx-auto mt-4 flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-[1.1rem] font-semibold">
                                Ваш список бажань порожній
                            </h1>
                            <p className="text-[0.9rem] font-semibold">
                                Створюйте нові списки та додавайте товари, які вам цікаві
                            </p>
                        </div>
                        <button className="w-[80%] mx-auto bg-blue-900 hover:bg-blue-900/80 text-white text-center 
                        font-semibold py-3 rounded-md transition-all duration-200 ease-in" onClick={() => setIsWishListModalOpen(true)}>
                            Створити список
                        </button>
                    </div>
                ) : (
                    <WishlistsMainContainer wishlists={wishlists} deleteWishlist={deleteWishList} updateWishlist={ updateWishlistTitle } />
                )}
            </div>
        </div>
    )
}
