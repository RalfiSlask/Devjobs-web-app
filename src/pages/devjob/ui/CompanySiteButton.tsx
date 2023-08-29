import { useContext } from "react";
import Context from "../../../context/Context";

const CompanySiteButton = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Does not exist in the provider")
    };

    const { isDarkMode } = context;

  return (
    <button className={`${isDarkMode ? "text-white bg-white-rgba hover:bg-white-rgba-hover" : "text-[#5964E0] bg-purple-rgba hover:bg-purple-rgba-hover"} rounded-[5px] text-center w-[147px] h-[48px] text-[16px] font-bold `}>Company Site</button>
  )
}

export default CompanySiteButton