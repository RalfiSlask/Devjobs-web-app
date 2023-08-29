import iconSun from "../../assets/desktop/icon-sun.svg";
import iconMoon from "../../assets/desktop/icon-moon.svg";
import { useContext } from "react";
import Context from "../../context/Context";

const ThemeSwitcher = () => {
  const context = useContext(Context)

  if(!context) {
    throw new Error("Must be within contextprovider")
  };

  const { setIsDarkMode } = context;

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    Number(event.target.value) === 2 ? setIsDarkMode(true) : setIsDarkMode(false)
  };

  return (
    <div className="w-[112px] h-[24px] flex justify-between top-0 items-center">
        <img src={iconSun} alt="sun" className="w-[20px] h-auto object-cover"/>
            <input onChange={(e) => {handleChange(e)}} type="range" defaultValue={1} min="1" max="2"/>
        <img src={iconMoon} alt="moon" className="w-[20px] h-auto object-cover"/>
    </div>
  )
}

export default ThemeSwitcher