
type PurpleButtonProps = {
    width?: string;
    text?: string;
};

const PurpleButton: React.FC<PurpleButtonProps> = ( {text, width} ) => {
  return (
    <button className={`${width ? width : "w-[141px]"} h-[48px] rounded-[5px] bg-[#5964E0] text-center text-[16px] font-bold leading-normal`}>{text}</button>
  )
}

export default PurpleButton