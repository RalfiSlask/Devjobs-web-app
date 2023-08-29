import Header from "../../components/Header";
import { useContext } from "react";
import PurpleButton from "../../components/PurpleButton";
import Context from "../../context/Context";
import CompanyInfo from "./ui/CompanyInfo";
import FooterInfo from "./ui/FooterInfo";
import Requirments from "./ui/Requirments";
import WhatYouWillDo from "./ui/WhatYouWillDo";
import JobInfo from "./ui/JobInfo";


const Devjob = () => {
  const context = useContext(Context);

  if(!context) {
    throw new Error("does not exist")
  };

  const { isDarkMode, selectedJob, screenSize } = context;

  return (
    <>
      <header>
        <Header />
        <CompanyInfo />
      </header>
      <main className={`${isDarkMode ? "bg-[#121721]" : "bg-[#F4F6F8]"} flex flex-col items-center`}>
        <section className={`${isDarkMode ? "bg-[#19202D]" : "bg-white"} flex flex-col gap-[40px] mt-[214px] md:mt-[132px] xl:mt-[145px] w-[327px] md:w-[689px] xl:w-[730px] rounded-[6px] py-[40px] px-[24px] md:px-[48px] md:py-[48px] mb-[64px] md:mb-[53px] xl:mb-[80px]`}>
          <JobInfo job={selectedJob}/>
          <p>{selectedJob?.description}</p>
          <Requirments requirements={selectedJob?.requirements}/>
          <WhatYouWillDo role={selectedJob?.role}/>
        </section>
      </main>
      <footer className={`${isDarkMode ? "bg-[#19202D]" : "bg-white"} justify-center w-full h-[96px] px-[40px] flex`}>
        <div className="flex items-center justify-center w-full md:w-[689px] xl:w-[730px] md:justify-between">
          {(screenSize === "tablet" || screenSize === "desktop") && <FooterInfo />}
          <PurpleButton text={"Apply Now"} width={"w-[327px] md:w-[141px]"}/>
        </div>
      </footer>
    </>
  )
}

export default Devjob