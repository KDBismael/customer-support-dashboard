import IonIcon from '@reacticons/ionicons';

export const SideBar = () => {
    return <div className="navigation">
        <ul>
            <li>
                <a href="#">
                    <span className="icon">
                        <IonIcon name="logo-apple" />
                    </span>
                    <span className="title">Brand Name</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span className="icon">
                        <IonIcon name="home-outline" />
                    </span>
                    <span className="title">Dashboard</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span className="icon">
                        <IonIcon name="people-outline" />
                    </span>
                    <span className="title">Customers</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span className="icon">
                        <IonIcon name="chatbubble-outline" />
                    </span>
                    <span className="title">Messages</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span className="icon">
                        <IonIcon name="help-outline" />
                    </span>
                    <span className="title">Help</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span className="icon">
                        <IonIcon name="settings-outline" />
                    </span>
                    <span className="title">Settings</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span className="icon">
                        <IonIcon name="lock-closed-outline" />
                    </span>
                    <span className="title">Password</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span className="icon">
                        <IonIcon name="log-out-outline" />
                    </span>
                    <span className="title">Sign Out</span>
                </a>
            </li>
        </ul>
    </div>
}