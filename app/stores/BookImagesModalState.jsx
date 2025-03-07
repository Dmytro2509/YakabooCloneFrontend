import { create } from "zustand";

const useBookImagesModalStore = create((set) => ({
    isBookImagesModalOpen: false,
    setIsBookImagesModalOpen: () => set((state) => ({ isBookImagesModalOpen: !state.isBookImagesModalOpen }))
}))

export default useBookImagesModalStore