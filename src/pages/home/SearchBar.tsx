import { useContext } from "react";
import Context from "../../context/Context";
import TitleInput from "./TitleInput";
import { ReactComponent as LogoFilter } from "../../assets/mobile/icon-filter.svg";
import SearchButton from "./SearchButton";
import LocationInput from "./LocationInput";
import FullTimeContainer from "./FullTimeContainer";


const SearchBar = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Not within the contextprovider")
    };

    const { isDarkMode, screenSize, openModal } = context;

  return (
    <div className={`${isDarkMode ? "bg-[#19202D]" : "bg-white"} flex items-center justify-between px-4 md:px-6 absolute rounded-[6px] w-[327px] md:w-[689px] xl:w-[1110px] h-[80px] top-[96px] md:top-[120px] left-1/2 -translate-x-1/2`}>
      <TitleInput />
      {screenSize !== "mobile" ? 
        <>
          <LocationInput />
          <FullTimeContainer />
        </>
      : null}
      {screenSize === "mobile" ? <LogoFilter onClick={openModal} className={`${isDarkMode ? "fill-white" : "fill-[#6E8098]"} mr-6 cursor-pointer`}/> : null }
      <SearchButton />
    </div>
  )
}

export default SearchBar