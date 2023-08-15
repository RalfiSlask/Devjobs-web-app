import { createContext, useState, ReactNode } from "react";


export type ContextType = {
    isDarkMode: boolean;
}

const Context = createContext<ContextType | undefined>(undefined);


type ContextProviderType = {
    children: ReactNode;
}

export const ContextProvider = ( {children}: ContextProviderType ) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const contextValue: ContextType = {
        isDarkMode: isDarkMode
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Context;