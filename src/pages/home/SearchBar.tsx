import { useContext } from "react";
import Context from "../../context/Context";

const SearchBar = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Not within the contextprovider")
    };

    const { isDarkMode } = context;

  return (
    <div className={`${isDarkMode ? "bg-[#19202D]" : "bg-white"} absolute rounded-[6px] w-[327px] md:w-[689px] xl:w-[1110px] h-[80px] top-[96px] md:top-[120px] left-1/2 -translate-x-1/2`}>SearchBar</div>
  )
}

export default SearchBar