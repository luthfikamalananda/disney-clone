import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes () {

    const auth = useContext(AuthContext);
    
    const { credential } = auth;

    return (
        credential ?  <Outlet /> : <Navigate to="/" replace={true}/>
    )
}