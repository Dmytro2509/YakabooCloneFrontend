import { create } from "zustand"


export const useWishListModalState = create((set) => ({
    isWishListModalOpen: false,
    setIsWishListModalOpen: (value) => set({ isWishListModalOpen: value })
}))

export default useWishListModalState