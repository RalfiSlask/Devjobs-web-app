import iconSun from "../../assets/desktop/icon-sun.svg";
import iconMoon from "../../assets/desktop/icon-moon.svg";

const ThemeSwitcher = () => {
  return (
    <div className="w-[112px] h-[24px] flex justify-between top-0 items-center">
        <img src={iconSun} alt="sun" className="w-[20px] h-auto object-cover"/>
            <input type="range" defaultValue={1} min="1" max="2"/>
        <img src={iconMoon} alt="moon" className="w-[20px] h-auto object-cover"/>
    </div>
  )
}

export default ThemeSwitcher