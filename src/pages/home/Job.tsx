import { useContext, useEffect } from "react";
import Context from "../../context/Context";

type Job = {
    id: number;
      company: string;
      logo: string;
      logoBackground: string;
      position: string;
      postedAt: string;
      contract: string;
      location: string;
      website: string;
      apply: string;
      description: string;
      requirements: {
          content: string;
          items: string[]
      };
      role: {
        content: string;
        items: string[]
      };
  };
  
  interface PropsType {
    job: Job;
  };

const Job:React.FC<PropsType> = ( {job} ) => {
    const { company, contract, location, position, postedAt, logo } = job;

    const context = useContext(Context)

    if(!context) {
        throw new Error("Does not exist")
    };

    const { isDarkMode } = context;

    useEffect(() => {
        console.log(logo)
    })

  return (
    <div className={`${isDarkMode ? "bg-[#19202D]" : "bg-[white]"} w-[327px] md:w-[339px] xl:w-[350px] h-[228px] rounded-[6px] relative text-[16px] font-normal leading-normal px-[32px] pt-[49px] pb-[36px]`}>
        <div>
            <div className="w-[50px] h-[50px] rounded-[15px] bg-orange-500 absolute top-[-25px] z-50 flex items-center justify-center">
            <img src={logo} alt="company"/>
            </div>
           
            <div>
                <p>{`${postedAt} . ${contract}`}</p>
            </div>
            <h2 className={`${isDarkMode ? "text-[white]" : "text-[black]"} font-bold text-[20px]`}>{position}</h2>
            <p>{company}</p>
        </div>
        <p className="text-[#5964E0] font-bold text-[14px]">{location}</p>
     
    </div>
  )
}

export default Job