import Heading from "../../../components/Heading";
import Textarea from "./Textarea";
import List from "../List";

type PropsType = {
    requirements?: {
        content: string;
        items: string[];
    }
};

const Requirments:React.FC<PropsType> = ( {requirements} ) => {
    const {content = "", items = []} = requirements || {};

  return (
    <div>
        <Heading text={"Requirments"}/>
        <Textarea text={content} />
        <List list={items} style={"list-disc"} />
    </div>
  )
}

export default Requirments