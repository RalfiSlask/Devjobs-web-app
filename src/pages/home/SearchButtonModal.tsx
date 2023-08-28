import { useContext } from "react";
import Context from "../../context/Context";

const SearchButtonModal = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error("Not within the contextprovider")
    };

    const { closeModal, filterList } = context;

    const handleClick = ():void => {
      closeModal();
      filterList();
    };

  return (
    <div onClick={handleClick} className={`w-[279px] h-[48px] ml-5 font-bold text-white bg-[#5964E0] flex items-center justify-center rounded-[5px] hover:bg-[#939BF4] cursor-pointer flex-shrink-0`}>
        Search
    </div>
  )
}

export default SearchButtonModal