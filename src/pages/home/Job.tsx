import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import Heading from "../../components/Heading";

export type Job = {
      id: number;
      company: string;
      color: string;
      logo: string;
      logoBackground: string;
      position: string;
      postedAt: string;
      contract: string;
      location: string;
      website: string;
      apply: string;
      description: string;
      requirements?: {
          content: string;
          items: string[]
      };
      role?: {
        content: string;
        items: string[]
      };
  };
  
  interface PropsType {
    job: Job;
  };

const Job:React.FC<PropsType> = ( {job} ) => {
    const { company, contract, location, position, postedAt, logo, color } = job;

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/devjob")
      setSelectedJob(job)
    };

    const context = useContext(Context)

    if(!context) {
        throw new Error("Does not exist")
    };

    const { isDarkMode, setSelectedJob } = context;

  return (
    <div onClick={handleClick} className={`${isDarkMode ? "bg-[#19202D]" : "bg-[white]"} flex flex-col justify-between w-[327px] md:w-[339px] xl:w-[350px] h-[228px] rounded-[6px] relative text-[16px] font-normal leading-normal px-[32px] pt-[49px] pb-[36px] cursor-pointer`}>
        <div className="h-[85px] flex flex-col justify-between">
            <div style={{backgroundColor: color}} className={`w-[50px] h-[50px] rounded-[15px] absolute top-[-25px] z-50 flex items-center justify-center`}>
            <img src={logo} alt="company"/>
            </div>
            <div>
                <p>{`${postedAt} . ${contract}`}</p>
            </div>
            <Heading text={position} />
            <p>{company}</p>
        </div>
        <p className="text-[#5964E0] font-bold text-[14px]">{location}</p>
    </div>
  )
}

export default Job