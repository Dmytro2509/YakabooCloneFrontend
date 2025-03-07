import { create } from "zustand";

export const useCartModalStore = create((set) => ({
    isCartModalOpen: false,
    setIsCartModalOpen: () => set((state) => ({ isCartModalOpen: !state.isCartModalOpen }))
}))

export default useCartModalStore