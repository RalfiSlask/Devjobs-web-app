import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import patternDesktop from "../assets/desktop/bg-pattern-header.svg";
import patternTablet from "../assets/tablet/bg-pattern-header.svg";
import patternMobile from "../assets/mobile/bg-pattern-header.svg";
import ThemeSwitcher from "../pages/home/ThemeSwitcher";
import logo from "../assets/desktop/logo.svg";

const Header = () => {
  const context = useContext(Context);
  const [pattern, setPattern] = useState("");

  if (!context) {
    throw new Error("Header must be used within a ContextProvider");
  };

  const { isDarkMode, screenSize } = context;

  useEffect(() => {
    if(screenSize === "mobile") {
      setPattern(patternMobile)
    } else if(screenSize === "tablet") {
      setPattern(patternTablet)
    } else if(screenSize === "desktop") {
      setPattern(patternDesktop)
    }
  }, [screenSize]);

  return (
    <div className={`${isDarkMode ? "bg-[#121721]" : "bg-[#F4F6F8]"} w-[100%] h-[136px] md:h-[160px] relative`}>
        <img src={pattern} alt="purple background" className="w-full h-full"/>
        <div className="absolute w-[327px] flex justify-between items-center top-[20px] left-1/2 -translate-x-1/2">
          <img src={logo} alt="company logo"/>
          <ThemeSwitcher />
        </div>
    </div>
  )
}

export default Header