import { create } from "zustand"

export const useUpdateWishlistModalState = create((set) => ({
    isUpdateWishlistOpen: false,
    setIsUpdateWishlistOpen: (value) => set({ isUpdateWishlistOpen: value })
}))

export default useUpdateWishlistModalState