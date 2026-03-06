import React, { useContext } from "react";
import "../assets/css/ServicesSection.css";
import architectureImg from "../assets/images/architecture.jpg";
import landscapeImg from "../assets/images/landscape.jpg";
import reportsImg from "../assets/images/reports.jpg";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../context/translations";

const images = [architectureImg, landscapeImg, reportsImg];

const Services = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="services-section">
      <div className="services-container">
        {t.servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <img src={images[index]} alt={service.title} className="service-image" />
            <div className="service-description" dangerouslySetInnerHTML={{ __html: service.description }}></div>
          </div>
        ))}
      </div>
      <p className="contact-us">
        {t.contactUsText}
      </p>
    </section>
  );
};

export default Services;