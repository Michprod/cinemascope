// Main.js
import React, { useState } from "react";
import FilmGrid from "./FilmGrid";
import AdvancedSearch from "./AdvancedSearch";
import VideoCategory from "./VideoCategory";
import { videoCategories } from "./videoCategories";
import "./Main.css";
import WelcomeBanner from "./WelcomeBanner";

const Main = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [preferences, setPreferences] = useState([]);

  const handleNewRecommendations = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };

  const handleSelect = (video) => {
    if (preferences.includes(video)) {
      setPreferences(preferences.filter((v) => v.id !== video.id));
    } else {
      setPreferences([...preferences, video]);
    }
  };

  const handleViewPreferences = () => {
    setRecommendations(preferences);
  };

  const isusercontent = false;

  return (
    <main className="container-fluid p-0">
      {isusercontent && (
        <div className="container py-5">
          <section className="recommendations mb-5">
            <h2 className="section-title mb-4">Vos films recommandés</h2>
            <FilmGrid recommendations={recommendations} />
          </section>

          <section className="advanced-search mb-5 bg-light p-4 rounded">
            <h2 className="section-title mb-4">Filtres de recherche</h2>
            <AdvancedSearch onRecommenderSubmit={handleNewRecommendations} />
          </section>

          <section className="preferences bg-light p-4 rounded">
            <h2 className="section-title mb-4">
              Parcourez les différents genres de films et sélectionnez ceux que
              vous aimez pour que nous puissions vous faire des recommandations
              personnalisées.
            </h2>
            {Object.entries(videoCategories).map(([category, videos]) => (
              <VideoCategory
                key={category}
                category={category}
                videos={videos}
                onSelect={handleSelect}
                selectedVideos={preferences}
              />
            ))}
            <div className="d-flex justify-content-end mt-4">
              <button variant="primary" onClick={handleViewPreferences}>
                Voir mes films préférés
              </button>
            </div>
          </section>
        </div>
      )}
      <WelcomeBanner />
    </main>
  );
};

export default Main;
