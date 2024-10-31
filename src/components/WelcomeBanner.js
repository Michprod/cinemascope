import React from "react";
import "./WelcomeBanner.css";
import { useNavigate } from "react-router-dom";

const WelcomeBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="welcome-banner">
      <div className="banner-content">
        <h1>Bienvenue sur CinémaScope</h1>
        <p>
          CinémaScope vous aide à trouver des films qui vous plairont. Évaluez
          les films pour créer un profil de goût personnalisé, puis CinémaScope
          vous recommande d'autres films à regarder.
        </p>
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
          <button
            onClick={() => {
              navigate("/inscription");
            }}
            className="btn-join"
          >
            Rejoindre gratuitement
          </button>
        </div>
      </div>
      <div className="banner-overlay"></div>
    </section>
  );
};

export default WelcomeBanner;
