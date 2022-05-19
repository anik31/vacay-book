import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

export function RestrictAuth() {
    const {token} = useSelector(store=>store.auth);
    const location = useLocation();

    return token ? <Navigate to={ location?.state?.from?.pathname || "/" } replace /> : <Outlet/>;
}
