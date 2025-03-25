import { create } from "zustand";

export const useRedirectAfterLogoutState = create((set) => ({
    isRedirectAfterLogout: false,
    setIsRedirectAfterLogout: (value) => set({ isRedirectAfterLogout: value })
}))

export default useRedirectAfterLogoutState