import { useContext, useState } from "react";
import Context from "../../context/Context";
import checkmark from "../../assets/desktop/icon-check.svg";

const FullTimeContainer = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Not within the contextprovider")
    };
  
    const { isDarkMode, fulltimeActive, handleClickOnFullTime } = context;

  return (
    <div className='w-[108px] ml-[20px] mr-[28px] flex items-center justify-between'>
        <div onClick={handleClickOnFullTime} className={`${fulltimeActive ? "bg-[#5964E0]" : isDarkMode ? "bg-fulltime-dark" : "bg-fulltime-light"}  flex justify-center items-center w-[24px] h-[24px] rounded-[3px] cursor-pointer`}>
            {fulltimeActive && <img src={checkmark} alt="checkmark" />}
        </div>
        <div className={`${isDarkMode ? "text-white" : "text-black"} text-[16px] font-bold`}>Full Time</div>
    </div>
  )
}

export default FullTimeContainer