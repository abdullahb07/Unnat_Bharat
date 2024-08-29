import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="text-uppercase">Unnat Bharat</h5>
            <p>
              Unnat Bharat is dedicated to empowering citizens by promoting
              transparency and accountability in governance.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/register-complaint" className="text-dark">
                  Register Complaint
                </Link>
              </li>
              <li>
                <Link to="/yojana" className="text-dark">
                  Government Schemes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2024 Unnat Bharat Team. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
