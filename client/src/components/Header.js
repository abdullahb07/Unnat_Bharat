import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="Title-UB">
            <Link className="navbar-brand" to="/">
              Unnat Bharat
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register-complaint">
                  Register Complaint
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/complaint-status">
                  Check Status
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/yojana">
                  Government Schemes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
