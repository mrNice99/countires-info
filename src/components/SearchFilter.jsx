import "../styles/searchfilter.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/AppContext";

const SearchFilter = ({ setSearchWord }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <form className={"search-filter " + theme}>
      <button type="submit">Search</button>
      <input
        className={"input " + theme}
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </form>
  );
};

export default SearchFilter;
