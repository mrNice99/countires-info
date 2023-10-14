import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/AppContext";

import "../styles/countrycard.scss";

const CountryCard = ({ country }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link to={`/country/${country.cca2}`} className={"card-container " + theme}>
      <div className="flag-container">
        <img src={country.flags.svg} alt={country.flags.alt} loading="lazy" />
      </div>
      <div className={"info-container " + theme}>
        <p className="country-name">{country.name.common}</p>
        <p>
          Population: <span> {country.population}</span>
        </p>
        <p>
          Region: <span> {country.region}</span>
        </p>
        <p>
          Capital:
          <span> {country.capital ? country.capital[0] : "Not Available"}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
