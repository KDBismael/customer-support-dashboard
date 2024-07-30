import { create } from 'zustand'
interface MainStoreI {
    isVisible: boolean,
    user: {
        token: string,
        name: string,
        email: string,
    },
    toggleVisible: () => void
}

export const useMainStore = create<MainStoreI>((set) => ({
    user: { token: 'hey', name: 'KDB', email: 'kdb@gmail.com' },
    isVisible: false,
    toggleVisible: () => set((state) => ({ isVisible: !state.isVisible }))
}))