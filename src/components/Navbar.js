import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand" to="/">
          <h2 className="glitter">
          GameZone
          </h2>

        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">

            
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
              <h3>Home</h3>                
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">

              <h3>About</h3>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                
              </a>
            </li>            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
