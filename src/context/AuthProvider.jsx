import { createContext, useEffect, useState } from "react";
import { findDOMNode } from "react-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [credential, setCredential] = useState('');

    // Membuat state loading karena, saat refresh token statenya ada delay sebelum di set. Jadinya nanti malah render login dulu -> homepage, makanya dikasih loading
    const [isLoading, setIsLoading] = useState(true);

    // Set token ke state agar saat di refresh tidak hilang
    const fetchAccount = async () => {
        try {
            const getData = await fetch('http://localhost:3000/v1/accounts/me', {
                credentials: 'include'
            })
            const token = await getData.json();
            setCredential(token.data);
        } catch (error) {
            console.log('error', error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchAccount();
    }, [])

    const value = {
        credential,
        setCredential
    }

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children} 
        </AuthContext.Provider>
    )
} 