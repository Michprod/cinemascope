// WelcomeBanner.js
import React from "react";
import "./WelcomeBanner.css";
import { useNavigate } from "react-router-dom";

const WelcomeBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="welcome-banner">
      <div className="banner-content">
        <h1>Bienvenue sur CinémaScope</h1>
        <p>Découvrez des films qui vous correspondent</p>
        <div className="banner-buttons">
          <button
            onClick={() => {
              navigate("/recommandations");
            }}
            className="btn-primary"
          >
            Explorer
          </button>
          <button className="btn-secondary">En savoir plus</button>
        </div>
      </div>
      <div className="banner-overlay"></div>
    </section>
  );
};

export default WelcomeBanner;
