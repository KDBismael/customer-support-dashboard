import { useEffect } from "react";
import { Card } from "../components/card";
import { RecentTicket } from "../components/recentTicket";
import { useMainStore } from "../stores/mainStore";

export const DashBoard = () => {
    const { loadTickets, ticketCount } = useMainStore();
    const user = JSON.parse(localStorage.getItem('user') ?? '')

    useEffect(() => {
        loadTickets(user.token);
    }, [])

    return <>
        <div className="cardBox">
            <Card iconName='shield-checkmark-outline' name='Finis' number={ticketCount?.finis} />
            <Card iconName='eye-outline' name='En progress' number={ticketCount?.progress} />
            <Card iconName='hand-left-outline' name='En attente' number={ticketCount?.attente} />
            <Card iconName='close-outline' name='Annuler' number={ticketCount?.anuller} />
        </div>
        <div className="details">
            <RecentTicket />
        </div>
    </>
}