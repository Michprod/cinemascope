// Main.js
import React, { useState } from "react";
import FilmGrid from "./FilmGrid";
import AdvancedSearch from "./AdvancedSearch";
import Preferences from "./Preferences";
import VideoCategory from "./VideoCategory"; // Importer le nouveau composant
import { videoCategories } from "./videoCategories"; // Importer les catégories
import "./Main.css";
import WelcomeBanner from "./WelcomeBanner";

const Main = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [preferences, setPreferences] = useState([]);

  // Fonction pour mettre à jour les recommandations
  const handleNewRecommendations = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };

  // Fonction pour gérer la sélection des vidéos
  const handleSelect = (video) => {
    setPreferences((prev) => [...prev, video]);
  };

  return (
    <main className="container-fluid p-0">
      <WelcomeBanner />
      <div className="container py-5">
        {/*<section className="recommendations mb-5">*/}
        {/*  <h2 className="section-title mb-4">Films Recommandés</h2>*/}
        {/*  <FilmGrid recommendations={recommendations} />*/}
        {/*</section>*/}

        {/*<section className="advanced-search mb-5 bg-light p-4 rounded">*/}
        {/*  <h2 className="section-title mb-4">Filtre de Recherche Avancé</h2>*/}
        {/*  <AdvancedSearch onRecommenderSubmit={handleNewRecommendations} />*/}
        {/*</section>*/}

        <section className="preferences bg-light p-4 rounded">
          <h2 className="section-title mb-4">Vos Préférences</h2>
          {/* Affichage des catégories de vidéos */}
          {Object.entries(videoCategories).map(([category, videos]) => (
            <VideoCategory
              key={category}
              category={category}
              videos={videos}
              onSelect={handleSelect}
            />
          ))}
          <div>
            <h3>Préférences sélectionnées :</h3>
            <ul>
              {preferences.map((pref) => (
                <li key={pref.id}>{pref.title}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
