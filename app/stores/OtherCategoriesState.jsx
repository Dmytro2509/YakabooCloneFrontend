import { create } from "zustand"


export const useOtherCategoriesState = create((set) => ({
    isOtherCategoriesOpen: false,
    setIsOtherCategoriesOpen: (value) => set({ isOtherCategoriesOpen: value }),
}))

export default useOtherCategoriesState