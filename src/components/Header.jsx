import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import { LanguageContext } from "../context/LanguageContext";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>EAU</h1>
          <p>Estudio de Arquitectura<br/>y Urbanismo</p>
        </Link>

        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/services">services</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>

          <div className="language-toggle">
            <button onClick={toggleLanguage} className="lang-btn">
              <span className={language === "es" ? "active" : ""}>ES</span>
              <span className="separator"> / </span>
              <span className={language === "en" ? "active" : ""}>EN</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
