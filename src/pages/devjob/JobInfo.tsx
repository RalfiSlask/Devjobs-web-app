import { Job } from "../home/Job";
import { useEffect } from "react";
import Heading from "../../components/Heading";
import PurpleButton from "../../components/PurpleButton";

type PropsType = {
    job: Job | null;
};

const JobInfo:React.FC<PropsType> = ( {job} ) => {

    useEffect(() => {
        console.log(job)
    })

    const { postedAt = "", contract = "", position = "", location = "" } = job ||{};

  return (
    <div className="flex flex-col gap-[54px] md:flex-row justify-between md:items-center">
        <div>
            <div>
                <p>{`${postedAt} . ${contract}`}</p>
            </div>
            <Heading text={position} style={"28px"}/>
            <p className="text-[#5964E0] font-bold text-[14px]">{location}</p>
        </div>
        <PurpleButton text={"Apply Now"} width={"w-[279px] md:w-[141px]"}/>
    </div>
  )
}

export default JobInfo