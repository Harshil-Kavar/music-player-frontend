import "./SearchInput.css";
import { searchIconGray } from "../../assets/icons";

const SearchInput = () => {
  return (
    <>
      <div className="search-input-container flex mtb-10">
        <img src={searchIconGray} alt="Search" className="mlr-5" />
        <input placeholder="Find Your Music" />
      </div>
    </>
  );
};

export default SearchInput;
