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
      <main>

      </main>
    </>
  )
}

export default Devjob