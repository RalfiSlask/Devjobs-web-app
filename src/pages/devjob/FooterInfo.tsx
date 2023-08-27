import { useContext } from "react";
import Context from "../../context/Context";

const FooterInfo = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Does not exist in provider")
    };

    const { selectedJob, isDarkMode } = context;

  return (
    <div>
        <p className={`${isDarkMode ? "text-white" : "text-black"} text-[20px] font-bold`}>{selectedJob?.position}</p>
        <p>So Digital Inc.</p>
    </div>
  )
}

export default FooterInfo