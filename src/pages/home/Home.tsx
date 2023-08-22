
import Header from "../../components/Header"
import { useContext } from "react";
import Context from "../../context/Context";

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
        <section className="w-[327px] md:w-[689px] xl:w-[1110px] h-[100%]"></section>
      </main>
    </>
  
  )
}

export default Home