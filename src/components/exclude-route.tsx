import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useMainStore } from "../stores/mainStore";

const ExcludeRoute = ({ children }: { children: ReactNode | undefined; }) => {
    const { user } = useMainStore();
    if (user.token) return <Navigate to="/dashboard" />;
    return children;
};

export default ExcludeRoute;