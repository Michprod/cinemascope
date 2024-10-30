// Preferences.js
import React from "react";

const Preferences = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement des préférences ici
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="preferences">Choisissez vos catégories de films:</label>
      <select id="preferences" multiple>
        <option value="comedy">Comédie</option>
        <option value="horror">Horreur</option>
        {/* Autres catégories */}
      </select>
      <button type="submit">Obtenir des Recommandations</button>
    </form>
  );
};

export default Preferences;
