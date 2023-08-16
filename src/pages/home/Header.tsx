import { useContext } from "react";
import Context from "../../context/Context";
import patternDesktop from "../../assets/desktop/bg-pattern-header.svg";
import patternTablet from "../../assets/tablet/bg-pattern-header.svg";
import patternMobile from "../../assets/mobile/bg-pattern-header.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "../../assets/desktop/logo.svg";

const Header = () => {
  const context = useContext(Context);

  if (!context) {
      throw new Error("Header must be used within a ContextProvider");
  }

  const { isDarkMode } = context;

  return (
    <div className={`w-[100%] h-[136px] md:h-[160px] relative`}>
        <img src={patternMobile} alt="purple background" className="w-[100%] h-[100%]"/>
        <div className="absolute w-[327px] flex justify-between items-center top-[20px] left-1/2 -translate-x-1/2">
          <img src={logo} alt="company logo"/>
          <ThemeSwitcher />
        </div>
      
    </div>
  )
}

export default Header