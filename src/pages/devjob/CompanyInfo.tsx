import { useContext } from "react";
import Context from "../../context/Context";
import Heading from "../../components/Heading";

const CompanyInfo = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Does not exist in the provider")
    };

    const { isDarkMode, selectedJob } = context;
    const { color = "", company = "", website = "", logo = ""} = selectedJob || {};
   
  return (
    <div className={`${isDarkMode ? "bg-[#19202D]" : "bg-white"} flex flex-col items-center pb-[32px] pt-[49px] w-[327px] md:w-[689px] xl:w-[730px] h-[205px] md:h-[140px] relative`}>
        <div style={{backgroundColor: color}} className={`w-[50px] h-[50px] rounded-[15px] absolute top-[-25px] z-50 flex items-center justify-center`}>
            <img src={logo} alt="company"/>
        </div>
        <div>
            <Heading text={company} />
            <p>{website}</p>
        </div>

    </div>
  )
}

export default CompanyInfo