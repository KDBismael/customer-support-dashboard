import IonIcon from "@reacticons/ionicons";
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

        <div className="user">
            <img src="/src/assets/imgs/customer01.jpg" alt="" />
        </div>
    </div>
}