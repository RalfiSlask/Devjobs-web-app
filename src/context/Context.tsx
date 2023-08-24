import { createContext, useState, ReactNode, useEffect } from "react";

export type ContextType = {
    isDarkMode: boolean;
    screenSize: string;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    toggleDarkMode: () => void;
};

const Context = createContext<ContextType | undefined>(undefined);

type ContextProviderType = {
    children: ReactNode;
};

export const ContextProvider = ( {children}: ContextProviderType ) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [screenSize, setScreenSize] = useState("");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleDarkMode = ():void => {
        setIsDarkMode(prevMode => !prevMode)
    };

    useEffect(() => {
     const handleResize = () => {
        setScreenWidth(window.innerWidth)
     };

     window.addEventListener("resize", handleResize)

     return () => (
        window.removeEventListener("resize", handleResize)
     );
    });

    useEffect(() => {
        if(screenWidth < 772) {
            setScreenSize("mobile")
        } else if(screenWidth < 1280) {
            setScreenSize("tablet")
        } else {
            setScreenSize("desktop")
        }
    }, [screenWidth])

    const contextValue: ContextType = {
        isDarkMode: isDarkMode,
        screenSize: screenSize,
        setIsDarkMode: setIsDarkMode,
        toggleDarkMode: toggleDarkMode,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Context;