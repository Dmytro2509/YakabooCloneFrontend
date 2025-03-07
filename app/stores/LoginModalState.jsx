import { create } from "zustand";

export const useLoginModalStore = create((set) => ({
    isLoginModalOpen: false,
    setIsLoginModalOpen: (value) => set({ isLoginModalOpen: value })
}))

export default useLoginModalStore