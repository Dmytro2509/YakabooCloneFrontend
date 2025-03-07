import { create } from "zustand";

const useSubcategoryModalState = create((set) => ({
    isSubcategoryModalOpen: false,
    setIsSubcategoryModalOpen: (isOpen) => set({ isSubcategoryModalOpen: isOpen }),
    isMouseOnSubcategoryModal: false,
    setIsMouseOnSubcategoryModal: (isMouseOn) => set({ isMouseOnSubcategoryModal: isMouseOn })
}));

export default useSubcategoryModalState