import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useMainStore } from "../stores/mainStore";

const PrivateRoute = ({ children }: { children: ReactNode | undefined; }) => {
    const { user } = useMainStore()
    const localUser = JSON.parse(localStorage.getItem('user') ?? '')
    if (!user.token && !localUser.token) return <Navigate to="/login" />;
    return children;
};

export default PrivateRoute;