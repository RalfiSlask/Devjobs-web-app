import Header from "../../components/Header"
import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import Job from "./Job";
import PurpleButton from "../../components/PurpleButton";
import SearchBar from "./SearchBar";
import Lightbox from "./Lightbox";
import Modal from "./Modal";

const Home = () => {
  const context = useContext(Context);

  if(!context) {
    throw new Error("does not exist in contextprovider")
  };

  const { isDarkMode, dataList, showAllJobsOnClick, modalOpen } = context;
  const { modal, lightbox} = modalOpen;

  return (
    <>
      <header>
        <Header />
        <SearchBar />
      </header>
      <main className={`${isDarkMode ? "bg-[#121721]" : "bg-[#F4F6F8]"} flex flex-col items-center`}>
        <section className="w-[327px] md:w-[689px] xl:w-[1110px] flex flex-col items-center mt-[90px] md:mt-[100px] xl:mt-[125px] mb-[105px]">
          <div className="flex flex-wrap gap-y-[49px] md:gap-y-[65px] md:gap-x-[11px] xl:gap-x-[30px] mb-[32px] md:mb-[56px]">
            {dataList.map((jobObject, index) => {
              return <Job job={jobObject} key={index}/>
            })}
          </div>
          <PurpleButton text={"Load More"} width={"w-[141px]"} handleClick={showAllJobsOnClick}/>
        </section>
      </main>
      {lightbox && <Lightbox />}
      {modal && <Modal />}
    </>
  
  )
}

export default Home