import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomePage.css";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Unnat Bharat</h1>
      <p>Empowering citizens through transparency and accountability.</p>
      <Link to="/register-complaint" className="btn btn-primary">
        Register a Complaint
      </Link>
      <Link to="/yojana" className="btn btn-secondary">
        Explore Government Schemes
      </Link>
    </div>
  );
};

export default HomePage;
