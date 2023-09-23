import { Link } from "react-router-dom";

import "../styles/notfound.scss";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page not found.</h2>
      <Link to={"/"}>Take me back to the HomePage</Link>
    </div>
  );
};

export default NotFound;
