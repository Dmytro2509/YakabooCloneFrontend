import { create } from "zustand"

const useSendingCodeStore = create((set) => ({
    isSendingCodeModalOpen: false,
    setIsSendingCodeModalOpen: (value) => set({ isSendingCodeModalOpen: value })
}))

export default useSendingCodeStore