import { Link } from "react-router-dom";

import "../styles/nav-bar.scss";

const NavBar = () => {
  const moonImage = "https://www.iconbolt.com/iconsets/anron-line/moon.svg";

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Where in the world?</Link>
        </li>
        <li>
          <button>
            <img src={moonImage} alt="moon" />
            <p>Dark Mode</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
