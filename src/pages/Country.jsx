import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../App";
import { useContext } from "react";
import { ThemeContext } from "../context/AppContext";
import { fetchData } from "../helpers/fetchData";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

import "../styles/country.scss";

const Country = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const [nativeName, setNativeName] = useState("");
  const [currency, setCurrency] = useState("");
  const [language, setLanguage] = useState("");
  const [allCountries, setAllCountries] = useState(null);
  const [borderCountries, setBorderCountries] = useState(null);
  const { theme } = useContext(ThemeContext);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["country"],
    queryFn: () => fetchData(code),
  });

  const reload = () => {
    queryClient.invalidateQueries({ queryKey: ["country"] });
  };

  const handleNativeName = () => {
    if (data && data[0].name.nativeName) {
      const name = Object.entries(data[0].name.nativeName);
      setNativeName(name[0][1].common);
    }
  };

  const handleCurrency = () => {
    if (data && data[0].currencies) {
      const currency = Object.entries(data[0].currencies);
      setCurrency(currency[0][1].name);
    }
  };

  const handleLanguage = () => {
    if (data && data[0].languages) {
      const languageArray = Object.values(data[0].languages);
      setLanguage(languageArray);
    }
  };

  const getCachedData = async () => {
    const cachedData = await queryClient.ensureQueryData({
      queryKey: ["allCountries"],
      queryFn: () => fetchData(),
    });
    setAllCountries(cachedData);
  };

  const handleBorderCountries = () => {
    if (allCountries && data) {
      const findByCCA3 = (cca3) => {
        return allCountries.find((country) => country.cca3 === cca3);
      };
      const borders = data[0].borders?.map((cca3, index) => {
        const country = findByCCA3(cca3);
        return (
          <Link key={index} to={`/country/${cca3}`} onClick={refetch}>
            {country.name.common}
          </Link>
        );
      });
      setBorderCountries(borders);
    }
  };

  useEffect(() => {
    if (data) {
      handleNativeName();
      handleCurrency();
      handleLanguage();
    }
    getCachedData();
    handleBorderCountries();
    reload();
  }, [data, allCountries]);

  return (
    <div className={"country-page " + theme}>
      {isLoading && <Loader />}
      {!isLoading && data && (
        <div className={"country-wrapper " + theme}>
          <button className={"back-btn " + theme} onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Back
          </button>
          <div className="country-info-wrapper">
            <div className="image-container">
              <img src={data[0].flags.svg} alt={data[0].flags.alt} />
            </div>
            <div className="text-container">
              <h1>{data[0].name.common}</h1>
              <div className="small-text-container">
                <div className="left-text">
                  <p>
                    Native Name: <span>{nativeName || "N/A"}</span>
                  </p>
                  <p>
                    Population:{" "}
                    <span>
                      {data[0].population.toLocaleString("en-US") || "N/A"}
                    </span>
                  </p>
                  <p>
                    Region: <span>{data[0].region || "N/A"}</span>
                  </p>
                  <p>
                    Sub Region: <span>{data[0].subregion || "N/A"}</span>
                  </p>
                  <p>
                    Capital: <span>{data[0].capital?.[0] || "N/A"}</span>
                  </p>
                </div>
                <div className="right-text">
                  <p>
                    Top Level Domain: <span>{data[0].tld?.[0] || "N/A"}</span>
                  </p>
                  <p>
                    Currencies: <span>{currency || "N/A"}</span>
                  </p>
                  <p>
                    Languages:{" "}
                    <span>{language ? language.join(", ") : "N/A"}</span>
                  </p>
                  <div className="border-container">
                    <p>Border Countries:</p>
                    <div className={"border-countries " + theme}>
                      {borderCountries || "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
