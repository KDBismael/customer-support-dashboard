import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import { useMainStore } from "../stores/mainStore";

export const TolBar = () => {
    const { toggleVisible } = useMainStore();

    return <div className="topbar">
        <div
            onClick={() => toggleVisible()}
            className="toggle">
            <IonIcon name="menu-outline" />
        </div>

        <div className="search">
            <label>
                <input type="text" placeholder="Search here" />
                <IonIcon size="large" name="search-outline" />
            </label>
        </div>
        <Link to={'settings'}>
            <div className="user">
                <img src="/src/assets/image copy.png" alt="user" />
            </div>
        </Link>
    </div>
}