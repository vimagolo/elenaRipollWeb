import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../context/translations";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/" className="logo">
            <h1>EAU</h1>
            <p>Estudio de Arquitectura<br/>y Urbanismo</p>
          </Link>
        </div>
        <div className="footer-contact">
          <h3 className="section-title">{t.contactUs}</h3>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>614354029</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>info@estudiodearquitecturayurbanismo.es</span>
          </div>
        </div>
        <div className="footer-follow">
          <h3 className="section-title">{t.followUs}</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">{t.copyright}</p>
    </footer>
  );
}