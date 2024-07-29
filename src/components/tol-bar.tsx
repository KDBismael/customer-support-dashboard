import IonIcon from "@reacticons/ionicons"

export const TolBar = ({ toggleVal, toggle }: { toggleVal?: boolean, toggle?: (val: boolean) => void }) => {
    return <div className="topbar">
        <div
            // onClick={() => toggle(!toggleVal)}
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
            <img src="src/assets/imgs/customer01.jpg" alt="" />
        </div>
    </div>
}