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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
              <h3>Home</h3>                
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
