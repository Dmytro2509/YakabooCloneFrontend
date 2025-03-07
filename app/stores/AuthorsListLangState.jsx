import { create } from "zustand"

const useAuthorsListLangStore = create((set) => ({
    currentLang: "uk",
    setCurrentLang: (newLang) => set(() => ({ currentLang: newLang })),
    resetLang: () => set(() => ({ currentLang: "uk" })) 
}))

export default useAuthorsListLangStore;