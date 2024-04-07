import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider ({children}) {
    const [credential, setCredential] = useState('')

    const value = {
        credential,
        setCredential
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
} 