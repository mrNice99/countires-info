import "../styles/searchfilter.scss";

const SearchFilter = ({ setSearchWord }) => {
  return (
    <form className="search-filter">
      <button type="submit">Search</button>
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </form>
  );
};

export default SearchFilter;
