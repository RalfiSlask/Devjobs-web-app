import { useContext } from "react";
import Context from "../../context/Context";
import Heading from "../../components/Heading";
import CompanySiteButton from "./CompanySiteButton";

const CompanyInfo = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Does not exist in the provider")
    };

    const { isDarkMode, selectedJob } = context;
    const { color = "", company = "", website = "", logo = ""} = selectedJob || {};
   
  return (
    <div className={`${isDarkMode ? "bg-[#19202D]" : "bg-white"} flex flex-col md:flex-row items-center justify-between pb-[32px] pt-[49px] md:py-0 md:pr-[40px] md:pl-[180px] w-[327px] md:w-[689px] xl:w-[730px] h-[205px] rounded-[6px] md:h-[140px] absolute top-[120px] left-1/2 -translate-x-1/2`}>
        <div style={{backgroundColor: color}} className={`w-[50px] h-[50px] md:w-[140px] md:h-[140px] rounded-[15px] md:rounded-r-none md:rounded-l-[6px] absolute top-[-25px] md:top-0 md:left-0 z-50 flex items-center justify-center`}>
            <img src={logo} alt="company" className="md:w-[81px] h-auto"/>
        </div>
        <div className="flex flex-col items-center md:items-start h-[49px] justify-between">
            <Heading text={company} />
            <p>{website}</p>
        </div>
        <CompanySiteButton />
    </div>
  )
}

export default CompanyInfo