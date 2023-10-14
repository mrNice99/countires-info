import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../helpers/fetchData";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/AppContext";
import SearchFilter from "../components/SearchFilter";
import SelectFilter from "../components/SelectFilter";
import CountryCard from "../components/CountryCard";
import Loader from "../components/Loader";
import "../styles/home.scss";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["allCountries"],
    queryFn: () => fetchData(),
  });

  const [visibleCards, setVisibleCards] = useState(12);
  const [searchWord, setSearchWord] = useState("");
  const [selectRegion, setSelectRegion] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleLoadMore = () => {
    setVisibleCards((prevState) => prevState + 12);
  };

  return (
    <section className={"home-container " + theme}>
      <div className="filter-container">
        <SearchFilter setSearchWord={setSearchWord} />
        <SelectFilter setSelectRegion={setSelectRegion} />
      </div>
      <div className={"country-container " + theme}>
        {isLoading && <Loader />}
        {data &&
          data
            .filter((country) => {
              if (searchWord === "") {
                return country;
              } else if (
                country.name.common
                  .toLowerCase()
                  .includes(searchWord.toLowerCase())
              ) {
                return country;
              }
            })
            .filter((country) => {
              if (selectRegion == "") {
                return country;
              } else if (
                country.region
                  .toLowerCase()
                  .includes(selectRegion.toLowerCase())
              ) {
                return country;
              }
            })
            .slice(0, visibleCards)
            .map((country) => (
              <CountryCard country={country} key={country.cca2} />
            ))}
      </div>
      {data && visibleCards <= data.length && (
        <button
          onClick={handleLoadMore}
          className={"load-more-button " + theme}
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default Home;
