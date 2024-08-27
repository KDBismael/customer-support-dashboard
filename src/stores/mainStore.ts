import { create } from 'zustand';
import { getAllTicket } from '../api';

export const useMainStore = create<MainStoreI>((set) => ({
    user: { token: '', name: '', email: '', id: '' },
    isVisible: false,
    setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
    toggleVisible: () => set((state) => ({ isVisible: !state.isVisible })),
    tickets: [],
    ticketCount: {
        progress: 0,
        anuller: 0,
        finis: 0,
        attente: 0
    },
    loadTickets: async (token) => {
        const res = await getAllTicket(token);
        set((state) => {
            const counts = res?.reduce((acc: TicketCountI, currentTicket: { status: string; }) => {
                switch (currentTicket.status) {
                    case 'En progress':
                        acc.progress += 1;
                        break;
                    case 'Anuller':
                        acc.anuller += 1;
                        break;
                    case 'Finis':
                        acc.finis += 1;
                        break;
                    case 'En attente':
                        acc.attente += 1;
                        break;
                    default:
                        break;
                }
                return acc;
            }, {
                progress: 0,
                anuller: 0,
                finis: 0,
                attente: 0
            });
            return { ticketCount: counts, tickets: res }
        })
    },
}))