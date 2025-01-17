import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children, router}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const login = value => {
        document.cookie = "loggedIn=true; path=/"
        setLoggedIn(true);
        setUser(value);
        router.push('/ticket');
    };

    const logout = () => {
        document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        setLoggedIn(false);
        setUser(null);
        if (router.pathname !== '/login') {
            router.push('/login');
        }
    };

    const contextValue = {
        loggedIn,
        login,
        logout,
        user,
        setUser,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
