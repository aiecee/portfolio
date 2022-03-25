import { Link } from "react-router-dom";

import "./Nav-Bar.css";

const NavBar = () => {
  return (
    <nav className="navigation">
      <h1 className="navigation-heading">Matt Collinge</h1>
      <div className="navigation-items">
        <Link className="navigation-item" to="/">
          <span className="navigation-item-label">H</span>ome
        </Link>
        <Link className="navigation-item" to="/about">
          <span className="navigation-item-label">A</span>bout
        </Link>
        <Link className="navigation-item" to="/projects">
          <span className="navigation-item-label">P</span>rojects
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
