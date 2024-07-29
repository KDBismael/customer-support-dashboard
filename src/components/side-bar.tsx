import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';

export const SideBar = ({ isActive }: { isActive: boolean }) => {

    return <div className={`navigation ${isActive ? 'active' : ''}`}>
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
                <Link to="dashboard">
                    <span className="icon">
                        <IonIcon name="home-outline" />
                    </span>
                    <span className="title">Dashboard</span>
                </Link>
            </li>

            <li>
                <Link to={'tickets'}>
                    <span className="icon">
                        <IonIcon name="people-outline" />
                    </span>
                    <span className="title">Tickets</span>
                </Link>
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