import logoSearch from "../../assets/desktop/icon-search.svg";

const FilterByTitle = () => {
  return (
    <div className="h-[100%] w-[230px] px-[24px] py-[28px] flex justify-between">
        <img src={logoSearch} alt="search" />
        <input placeholder="Filter by title..." className="placeholder:opacity-50"></input>
    </div>
  )
}

export default FilterByTitle