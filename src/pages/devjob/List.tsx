import { useContext } from "react";
import Context from "../../context/Context";

type PropsType = {
    list: string[];
    style: string;
};

const List:React.FC<PropsType> = ( {list, style} ) => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Does not exist in Provider")
    };

    const { isDarkMode } = context;

  return (
    <ul className={`ml-4 ${style} flex flex-col gap-[8px]`}>
    {list.map((item, index) => {
        return <li key={index} className="text-[#5964E0]"><p className={`${isDarkMode ? "text-[#9DAEC2]" : "text-[#6E8098]"} ml-6`}>{item}</p></li>
    })}
</ul>
  )
}

export default List