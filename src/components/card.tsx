import IonIcon from "@reacticons/ionicons"
import { IconName } from "../icons-name"

export const Card = ({ iconName, name, number }: { number: number, name: string, iconName: IconName }) => {
    return <div className="card">
        <div>
            <div className="numbers">{number}</div>
            <div className="cardName">{name}</div>
        </div>

        <div className="iconBx">
            <IonIcon name={iconName} />
        </div>
    </div>
}