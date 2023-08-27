import Heading from "../../components/Heading";
import Textarea from "../../components/Textarea";
import List from "./List";

type PropsType = {
    role?: {
        content: string;
        items: string[];
    };
};

const WhatYouWillDo: React.FC<PropsType> = ( {role} ) => {
  const {content = "", items = []} = role || {};

  return (
    <div>
      <Heading text={"What You Will Do"}/>
      <Textarea text={content} />
      <List list={items} style={"list-decimal"} />
    </div>
  )
}

export default WhatYouWillDo