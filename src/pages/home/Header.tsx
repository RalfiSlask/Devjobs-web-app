import { useContext } from "react";
import Context from "../../context/Context";
import patternDesktop from "../../assets/desktop/bg-pattern-header.svg";
import patternTablet from "../../assets/tablet/bg-pattern-header.svg";
import patternMobile from "../../assets/mobile/bg-pattern-header.svg";

const Header = () => {
  const context = useContext(Context);

  if (!context) {
      throw new Error("Header must be used within a ContextProvider");
  }

  const { isDarkMode } = context;

  return (
    <div className={`w-[100%] h-[136px] md:h-[160px]`}>
        <img src={patternMobile} alt="purple background" />
    </div>
  )
}

export default Header