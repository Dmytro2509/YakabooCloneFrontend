import { create } from "zustand";


const useESupportModalStore = create((set) => ({
    isSupportModalOpen: false,
    isBeenOpened: false,
    setIsSupportModalOpen: () => set((state) => ({ isSupportModalOpen: !state.isSupportModalOpen, isBeenOpened: true }))
}))

export default useESupportModalStore