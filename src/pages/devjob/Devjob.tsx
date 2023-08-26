import Header from "../../components/Header";
import { useContext } from "react";
import PurpleButton from "../../components/PurpleButton";
import Context from "../../context/Context";
import CompanyInfo from "./CompanyInfo";

const Devjob = () => {
  const context = useContext(Context);

  if(!context) {
    throw new Error("does not exist")
  };

  const { isDarkMode, selectedJob } = context;

  return (
    <>
      <header>
        <Header />
        <CompanyInfo />
      </header>
      <main className={`${isDarkMode ? "bg-[#121721]" : "bg-[#F4F6F8]"} flex flex-col items-center`}>
        <section className={`${isDarkMode ? "bg-[#19202D]" : "bg-white"} rounded-[6px] py-[40px] px-[24px] md:px-[48px] md:py-[48px]`}></section>
      </main>
    </>
  )
}

export default Devjob