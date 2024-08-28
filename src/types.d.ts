interface User {
    token: string;
    name: string;
    email: string;
    id: string;
}

interface TicketI {
    username: string;
    email: string;
    description: string;
    status: string;
    conversationId: string;
    _id: string
}

interface TicketCountI {
    progress: number;
    anuller: number;
    finis: number;
    attente: number;
}

interface MainStoreI {
    isVisible: boolean,
    user: User
    setUser: (user: User) => void,
    toggleVisible: () => void
    tickets: TicketI[]
    ticketCount: TicketCountI,
    loadTickets: (token: string) => Promise<void>
}

interface MessageI {
    sender: string;
    recipient: string;
    text: string;
    conversation: string;
    _id: string
}