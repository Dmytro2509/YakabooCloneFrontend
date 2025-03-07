import { create } from "zustand"

const useRegisterModalStore = create((set) => ({
    isRegisterModalOpen: false,
    setIsRegisterModalOpen: () => set((state) => ({ isRegisterModalOpen: !state.isRegisterModalOpen }))
}))

export default useRegisterModalStore