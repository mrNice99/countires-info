import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/AppContext";
import "../styles/nav-bar.scss";

const NavBar = () => {
  const moonImage = "https://www.iconbolt.com/iconsets/anron-line/moon.svg";
  const sunImage = "https://www.iconbolt.com/iconsets/bootstrap-icons/sun.svg";
  const { theme, toggleTheme } = useContext(ThemeContext);

  const iconImage = theme === "dark" ? sunImage : moonImage;

  return (
    <nav className={"navbar " + theme}>
      <ul>
        <li>
          <Link to="/">Where in the world?</Link>
        </li>
        <li>
          <button className={"mode-btn " + theme} onClick={toggleTheme}>
            <img src={iconImage} alt={theme === "dark" ? "sun" : "moon"} />
            <p>{theme === "dark" ? "Light Mode" : "Dark Mode"}</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
