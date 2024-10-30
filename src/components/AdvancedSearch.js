// AdvancedSearch.js
import React from "react";

const AdvancedSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de filtrage ici
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="genre">Genre:</label>
      <select id="genre">
        <option value="all">Tous</option>
        <option value="action">Action</option>
        <option value="drama">Drame</option>
        {/* Autres genres */}
      </select>
      <button type="submit">Filtrer</button>
    </form>
  );
};

export default AdvancedSearch;
