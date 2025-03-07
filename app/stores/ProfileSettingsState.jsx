import { create } from "zustand"


export const useProfileSettingsState = create((set) => ({
    isProfileSettingsOpen: false,
    setIsProfileSettingsOpen: (value) => set({ isProfileSettingsOpen: value })
}))

export default useProfileSettingsState