import React, { useState } from 'react';
import "../../../Styles/Header.css";
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../photos/logo new.png";
import { useAuth } from '../context/auth';
import toast from "react-hot-toast";



const Header = () => {
  const [auth, setAuth] = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  


  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <div className="img-1">
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span> {/* Hamburger icon */}
        <span className="cross-icon">&#10006;</span> {/* Cross icon */}
      </button>
      <div className="nav-links">
        <Link to="/"><button>Home</button></Link>
        <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}><button>Dashboard</button></NavLink>
        <Link to="/about"><button>About</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
        {!auth.user ? (
          <Link to="/Register"><button>Register</button></Link>
        ) : (
          <Link onClick={handleLogout} to="/Login"><button>Logout</button></Link>
        )}
        <select id="language" name="language">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          <option value="de">Marathi</option>
          <option value="it">Gujarati</option>
        </select>
      </div>
    </nav>
  );
};

export default Header;
