import "../styles/selectfilter.scss";

import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/AppContext";

const SelectFilter = ({ setSelectRegion }) => {
  const regions = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctic",
  ];

  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleClick = (region) => {
    setSelectRegion(region);
    setShowMenu(false);
  };

  return (
    <div className={"dropdown " + theme}>
      <button
        className={"dropbtn " + theme}
        onClick={() => setShowMenu(!showMenu)}
      >
        Filtriraj po Regionu
        <img
          src="https://www.iconbolt.com/iconsets/basicons/chevron-down-arrow.svg"
          alt="strelica nadole"
        />
      </button>
      <div
        className={
          "dropdown-content " + (showMenu ? "visible" : "") + " " + theme
        }
      >
        {regions.map((region, index) => (
          <button key={index} onClick={() => handleClick(region)}>
            {region}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectFilter;
