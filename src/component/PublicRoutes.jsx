import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutes () {

    const auth = useContext(AuthContext);
    
    const { credential } = auth;

    return (
        credential ? <Navigate to="/homepage" replace={true}/> :  <Outlet />
    )
}