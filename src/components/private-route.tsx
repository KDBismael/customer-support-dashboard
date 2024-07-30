import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useMainStore } from "../stores/mainStore";

const PrivateRoute = ({ children }: { children: ReactNode | undefined; }) => {
    const { user } = useMainStore()
    if (!user.token) return <Navigate to="/login" />;
    return children;
};

export default PrivateRoute;