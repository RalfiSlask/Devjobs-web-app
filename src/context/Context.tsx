import { createContext, useState, ReactNode, useEffect } from "react";
import { Job } from "../pages/home/Job";
import data from "../data/data.json";

export type ContextType = {
    isDarkMode: boolean;
    screenSize: string;
    selectedJob: Job | null;
    dataList: Job[];
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedJob: React.Dispatch<React.SetStateAction<Job | null>>;
    toggleDarkMode: () => void;
    showAllJobsOnClick:  (text: string, setButtonText: React.Dispatch<React.SetStateAction<string>>) => void;
};

const Context = createContext<ContextType | undefined>(undefined);

type ContextProviderType = {
    children: ReactNode;
};

export const ContextProvider = ( {children}: ContextProviderType ) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [screenSize, setScreenSize] = useState("");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [dataList, setDataList] = useState<Job[]>([]);

    const reduceList = (array: Job[]) => {
        setDataList(array.filter((object, index) => index < 12))
    };

    useEffect(() => {
        reduceList(data);
    }, [])

    useEffect(() => {
        console.log(selectedJob)
    })

    const showAllJobsOnClick = (text:string, setButtonText: React.Dispatch<React.SetStateAction<string>>) => {
        if(text === "Load More") {
            setDataList(data)
            setButtonText("Show Less")
        } else if(text === "Show Less") {
            reduceList(data);
            setButtonText("Load More")
        };
    };

    const toggleDarkMode = ():void => {
        setIsDarkMode(prevMode => !prevMode)
    };

    useEffect(() => {
        console.log(selectedJob)
    })

    useEffect(() => {
     const handleResize = () => {
        setScreenWidth(window.innerWidth)
     };

     window.addEventListener("resize", handleResize)

     return () => {
        window.removeEventListener("resize", handleResize);
     };
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
        // states
        isDarkMode: isDarkMode,
        screenSize: screenSize,
        selectedJob: selectedJob,
        dataList: dataList,
        // setters
        setSelectedJob: setSelectedJob,
        setIsDarkMode: setIsDarkMode,
        // functions
        toggleDarkMode: toggleDarkMode,
        showAllJobsOnClick: showAllJobsOnClick,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Context;