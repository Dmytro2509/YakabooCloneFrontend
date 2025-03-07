import { create } from "zustand"

export const useMainInfoModalStore = create((set) => ({
    isMainInfoModalOpen: false,
    setIsMainInfoModalOpen: () => set((state) => ({ isMainInfoModalOpen: !state.isMainInfoModalOpen }))
}))

export default useMainInfoModalStore