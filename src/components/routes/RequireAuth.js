import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

export function RequireAuth() {
    const {token} = useSelector(store=>store.auth);
    const location = useLocation();

    return token ? <Outlet/> : <Navigate to="/login" state={{ from: location }} replace />;
}
