import { useContext } from "react";
import Context from "../context/Context";

type PropsType = {
    text: string;
};

const Textarea:React.FC<PropsType> = ( {text} ) => {
    const context = useContext(Context);

    if(!context) {
      throw new Error("does not exist")
    };
  
    const { isDarkMode } = context;

  return (
    <div className={`${isDarkMode ? "text-[#9DAEC2]" : "text-[#6E8098]"} mt-[28px] mb-[32px] md:mb-[24px] text-[16px] font-normal leading-[26px]`}>{text}</div>
  )
};

export default Textarea