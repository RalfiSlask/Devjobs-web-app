import { useContext } from "react";
import Context from "../../context/Context";
import { ReactComponent as SearchLogo } from "../../assets/desktop/icon-search.svg";

const TitleInput = () => {
  const context = useContext(Context);

  if(!context) {
      throw new Error("Not within the contextprovider")
  };

  const { isDarkMode, screenSize } = context;

  return (
    <div className="flex items-center gap-4 w-[215px] h-full">
      {screenSize != "mobile" ? <SearchLogo className="fill-[#5964E0]" /> : null}
      <input placeholder="Filter by title..." className={`${isDarkMode ? "bg-[#19202D] text-white" : "bg-white text-black"} placeholder:opacity-50 w-[140px] outline-none cursor-pointer`}></input>
    </div>
  )
}

export default TitleInput