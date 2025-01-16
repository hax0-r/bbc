import { createContext, useState } from 'react';

export const NavbarContext = createContext(null);

export const NavbarProvider = ({ children }) => {

    const [navTabs, setNavTabs] = useState("home")

    const value = {
        navTabs,
        setNavTabs
    }

    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    );
};