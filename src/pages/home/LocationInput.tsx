import { useContext } from "react";
import Context from "../../context/Context";
import { ReactComponent as LocationLogo } from "../../assets/desktop/icon-location.svg";

const LocationInput = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Not within the contextprovider")
    };
  
    const { isDarkMode } = context;
    
  return (
    <div className="flex items-center gap-4 border-[#6E8098] border-opacity-20 border-y md:border-y-0 md:border-x h-[70px] md:h-full w-full md:w-[215px] xl:w-[300px] px-[20px]">
        <LocationLogo className="fill-[#5964E0]" />
        <input placeholder="Filter by location..." className={`${isDarkMode ? "bg-[#19202D] text-white" : "bg-white text-black"} placeholder:opacity-50 w-[140px] outline-none cursor-pointer`}></input>
    </div>
  )
}

export default LocationInput