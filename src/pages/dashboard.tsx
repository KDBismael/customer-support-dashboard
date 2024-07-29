import { Card } from "../components/card"
import { RecentTicket } from "../components/recentTicket"

export const DashBoard = () => {
    return <>
        <div className="cardBox">
            <Card iconName='eye-outline' name='Daily Views' number={1504} />
            <Card iconName='eye-outline' name='Daily Views' number={1504} />
            <Card iconName='eye-outline' name='Daily Views' number={1504} />
            <Card iconName='cash-outline' name='Earning' number={7842} />
        </div>
        <div className="details">
            <RecentTicket />
        </div>
    </>
}