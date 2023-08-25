import { useContext } from "react";
import Context from "../context/Context";

type PropsType = {
    text: string;
};

const Heading:React.FC<PropsType> = ( {text} ) => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Does not exist in the provider")
    };

    const { isDarkMode } = context;

  return (
    <h2 className={`${isDarkMode ? "text-[white]" : "text-[black]"} font-bold text-[20px]`}>{text}</h2>
  )
}

export default Heading