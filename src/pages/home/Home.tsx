import Header from "../../components/Header"
import { useContext } from "react";
import Context from "../../context/Context";
import Job from "./Job";
import data from "../../data/data.json";

const Home = () => {
  const context = useContext(Context);

  if(!context) {
    throw new Error("does not exist in contextprovider")
  };

  const { isDarkMode } = context;

  return (
    <>
      <header>
        <Header />
      </header>
      <main className={`${isDarkMode ? "bg-[#121721]" : "bg-[#F4F6F8]"} flex flex-col items-center`}>
        <section className="w-[327px] md:w-[689px] xl:w-[1110px] flex items-center flex-wrap gap-y-[49px] md:gap-y-[65px] md:gap-x-[11px] xl:gap-x-[30px] mt-[57px] md:mt-[70px] xl:mt-[105px]">
          {data.map((jobObject, index) => {
            return <Job job={jobObject} key={index}/>
          })}
        </section>
      </main>
    </>
  
  )
}

export default Home