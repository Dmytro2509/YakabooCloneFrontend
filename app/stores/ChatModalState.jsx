import { create } from "zustand";


const useChatModalStore = create((set) => ({
    isChatModalOpen: false,
    setIsChatModalOpen: () => set((state) => ({ isChatModalOpen: !state.isChatModalOpen }))
}))

export default useChatModalStore