import { useContext } from "react";
import Context from "../../context/Context";
import LocationInput from "./LocationInput";
import FullTimeContainer from "./FullTimeContainer";
import SearchButtonModal from "./SearchButtonModal";

const Modal = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Not within the contextprovider")
    };
  
    const { isDarkMode } = context;

  return (
    <div className={`${isDarkMode ? "bg-[#19202D]" : "bg-white"} pb-6 flex flex-col justify-between w-[327px] h-[217px] rounded-[6px] absolute z-50 top-[225px] left-1/2 -translate-x-1/2`}>
        <LocationInput />
        <FullTimeContainer />
        <SearchButtonModal />
    </div>
  )
}

export default Modal