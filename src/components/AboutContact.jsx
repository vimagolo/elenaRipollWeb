import React, { useContext } from "react";
import "../assets/css/AboutContact.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../context/translations";

export default function AboutContact() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="about-contact">

      <div className="about-contact-container">

        {/* ABOUT */}
        <div className="about-section">
          <h3 className="section-title">{t.aboutMe}</h3>

          <p>
            {t.aboutText1}
          </p>

          <p>
            {t.aboutText2}
          </p>

          <p>
            {t.aboutText3}
          </p>

          <p className="highlight">
            {t.aboutText4}
          </p>
        </div>


        {/* CONTACT */}
        <div className="contact-section">
          <h3 className="section-title">{t.contactMe}</h3>

          <h4 className="contact-question">{t.doYouHaveAnIdea}</h4>

          <p className="contact-text">
            <strong>{t.explainMe}</strong> {t.yourProjectMakeItPossible}
          </p>

          <div className="contact-item">
            <FaPhone className="icon" />
            <span>614354029</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>info@estudiodearquitecturayurbanismo.es</span>
          </div>
        </div>

      </div>
    </section>
  );
}
