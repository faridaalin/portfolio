import React from "react";
import { Link } from "react-router-dom";

import "./Home.styles.css";

function Home() {
  return (
    <div className="container">
      <ul className="home-nav-container">
        <li>
          <Link className="home-nav-links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="home-nav-links" to="/projects">
            projects
          </Link>
        </li>
        <li>
          <Link className="home-nav-links" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
