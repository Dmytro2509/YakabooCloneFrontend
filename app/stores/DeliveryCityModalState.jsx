import { create } from "zustand"

const useDeliveryModalState = create((set) => ({
    isDeliveryModalOpen: false,
    setIsDeliveryModalOpen: () => set((state) => ({ isDeliveryModalOpen: !state.isDeliveryModalOpen }))
}))

export default useDeliveryModalState;