import IonIcon from "@reacticons/ionicons"

export const TolBar = () => {
    return <div className="topbar">
        <div className="toggle">
            <IonIcon name="menu-outline" />
        </div>

        <div className="search">
            <label>
                <input type="text" placeholder="Search here" />
                <IonIcon name="search-outline" />
            </label>
        </div>

        <div className="user">
            <img src="src/assets/imgs/customer01.jpg" alt="" />
        </div>
    </div>
}