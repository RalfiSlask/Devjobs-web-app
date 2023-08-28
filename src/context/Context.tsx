import { createContext, useState, ReactNode, useEffect } from "react";
import { Job } from "../pages/home/Job";
import data from "../data/data.json";

export type ContextType = {
    isDarkMode: boolean;
    screenSize: string;
    selectedJob: Job | null;
    dataList: Job[];
    fulltimeActive: boolean;
    inputs: {location: string, title: string}
    modalOpen: {modal: boolean, lightbox: boolean};
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedJob: React.Dispatch<React.SetStateAction<Job | null>>;
    setInputs: React.Dispatch<React.SetStateAction<{location: string, title: string}>>;
    toggleDarkMode: () => void;
    showAllJobsOnClick:  (text: string, setButtonText: React.Dispatch<React.SetStateAction<string>>) => void;
    handleClickOnFullTime: () => void;
    openModal: () => void;
    closeModal: () => void;
    filterList: () => void;
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
    const [dataList, setDataList] = useState<Job[]>(data);
    const [fulltimeActive, setFullTimeActive] = useState(false);
    const [modalOpen, setModalOpen] = useState({modal: false, lightbox: false});
    const [inputs, setInputs] = useState({location: "", title: ""});

    useEffect(() => {
        reduceList(dataList);
    }, [])

    useEffect(() => {
        const storedJob = JSON.parse(localStorage.getItem("job") || "null");
        if(storedJob) {
            setSelectedJob(storedJob)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("job", JSON.stringify(selectedJob))
    }, [selectedJob]);

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
            closeModal();
            setScreenSize("tablet")
        } else {
            setScreenSize("desktop")
        }
    }, [screenWidth]);

    const handleClickOnFullTime = ():void => {
        setFullTimeActive(prevState => !prevState)
    };

    

    const showAllJobsOnClick = (text:string, setButtonText: React.Dispatch<React.SetStateAction<string>>) => {
        if(text === "Load More") {
            setDataList(data)
            setButtonText("Show Less")
        } else if(text === "Show Less") {
            reduceList(data);
            setButtonText("Load More")
        };
    };

    const reduceList = (array: Job[]) => {
        setDataList(array.filter((object, index) => index < 12))
    };

    const toggleDarkMode = ():void => {
        setIsDarkMode(prevMode => !prevMode)
    };

    const openModal = ():void => {
        setModalOpen({modal: true, lightbox: true})
    };

    const closeModal = ():void => {
        setModalOpen({modal: false, lightbox: false})
    };

   const filterList = ():void => {
        const {title, location} = inputs;
        const lowerTitle = title.toLocaleLowerCase();
        const lowerLocation = location.toLocaleLowerCase();
        let filteredList = data;
        filteredList = filteredList.filter(job => {
            const company = job.company.toLowerCase();
            const position = job.position.toLowerCase();
            const jobLocation = job.location.toLowerCase();
            return (
                (lowerTitle === "" || company.includes(lowerTitle) || position.includes(lowerTitle)) &&
                (lowerLocation === "" ||jobLocation.includes(lowerLocation)) &&
                (!fulltimeActive || job.contract === "Full Time")
            )
        });
        setDataList(filteredList)
    }; 

    const contextValue: ContextType = {
        // states
        isDarkMode: isDarkMode,
        screenSize: screenSize,
        selectedJob: selectedJob,
        dataList: dataList,
        fulltimeActive: fulltimeActive,
        modalOpen: modalOpen,
        inputs: inputs,
        setInputs: setInputs,
        // setters
        setSelectedJob: setSelectedJob,
        setIsDarkMode: setIsDarkMode,
        // functions
        toggleDarkMode: toggleDarkMode,
        showAllJobsOnClick: showAllJobsOnClick,
        handleClickOnFullTime: handleClickOnFullTime,
        openModal: openModal,
        closeModal: closeModal,
        filterList: filterList,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Context;