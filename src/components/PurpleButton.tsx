import { useState } from "react";


type PurpleButtonProps = {
    width?: string;
    text: string;
    handleClick?: (text: string, setButtonText: React.Dispatch<React.SetStateAction<string>>) => void;
};

const PurpleButton: React.FC<PurpleButtonProps> = ( {text, width, handleClick} ) => {
  const [buttonText, setButtonText] = useState(text);

  return (
    <button onClick={() => {if(handleClick) {handleClick(buttonText, setButtonText)}}} className={`${width ? width : "w-[141px]"} h-[48px] rounded-[5px] text-white bg-[#5964E0] hover:bg-[#939BF4] cursor-pointer text-center text-[16px] font-bold leading-normal`}>{buttonText}</button>
  )
}

export default PurpleButton