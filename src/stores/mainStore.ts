import { create } from 'zustand'
interface MainStoreI {
    isVisible: boolean,
    toggleVisible: () => void
}

export const useMainStore = create<MainStoreI>((set) => ({
    isVisible: false,
    toggleVisible: () => set((state) => ({ isVisible: !state.isVisible }))
}))