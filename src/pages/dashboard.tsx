import { Card } from "../components/card"
import { RecentTicket } from "../components/recentTicket"

export const DashBoard = () => {
    return <>
        <div className="cardBox">
            <Card iconName='shield-checkmark-outline' name='Finis' number={1} />
            <Card iconName='eye-outline' name='En progress' number={0} />
            <Card iconName='hand-left-outline' name='En attente' number={1} />
            <Card iconName='close-outline' name='Annuler' number={1} />
        </div>
        <div className="details">
            <RecentTicket />
        </div>
    </>
}