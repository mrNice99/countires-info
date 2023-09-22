import "../styles/selectfilter.scss";

import { useState } from "react";

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

  const handleClick = (region) => {
    setSelectRegion(region);
    setShowMenu(false);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => setShowMenu(!showMenu)}>
        Filter by Region
        <img
          src="https://www.iconbolt.com/iconsets/basicons/chevron-down-arrow.svg"
          alt="down arrow"
        />
      </button>
      <div className={"dropdown-content " + (showMenu ? "visible" : "")}>
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
