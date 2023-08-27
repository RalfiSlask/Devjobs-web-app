import { ReactComponent as SearchLogo } from "../../assets/desktop/icon-search.svg";
import { useContext } from "react";
import Context from "../../context/Context";

const SearchButton = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Not within the contextprovider")
    };

    const { screenSize } = context;


  return (
    <div className={`w-[48px] md:w-[80px] h-[48px] bg-[#5964E0] flex items-center justify-center rounded-[5px] hover:bg-[#939BF4]`}>
        {screenSize === "mobile" ? <SearchLogo className="fill-white"/> : <p className="font-bold text-white cursor-pointer">Search</p>}
    </div>
  )
}

export default SearchButton