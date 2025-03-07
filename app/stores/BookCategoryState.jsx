import { create } from "zustand";

export const useBookCategoryStore = create((set) => ({
    isBookCategoryModalOpen: false,
    activeButtonIndex: 0,
    setIsBookCategoryModalOpen: () => set((state) => ({ isBookCategoryModalOpen: !state.isBookCategoryModalOpen })),
    setActiveButtonIndex: (index) => set(() => ({ activeButtonIndex: index }))
}))

export default useBookCategoryStore