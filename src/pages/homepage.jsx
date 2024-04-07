import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Homepage() {

    // CARA REDUNDANT (SPAGET)
    // const auth = useContext(AuthContext);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!auth.credential) {
    //         navigate('/') 
    //     }
    // },[])

    return (
        <div className="main-wrapper bg-gradient-to-b from-[#091732] to-[#0f1014]">
            <h2 className="text-white">Hello World!</h2>
        </div>


    )
}