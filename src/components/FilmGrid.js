import React from "react";

const FilmGrid = () => {
  const films = [
    {
      title: "Film 1",
      genre: "Action",
      rating: 8.5,
      poster: "https://via.placeholder.com/300x450",
      year: 2023,
    },
    {
      title: "Film 2",
      genre: "Drame",
      rating: 7.2,
      poster: "https://via.placeholder.com/300x450",
      year: 2024,
    },
    {
      title: "Film 3",
      genre: "Comédie",
      rating: 7.8,
      poster: "https://via.placeholder.com/300x450",
      year: 2023,
    },
    {
      title: "Film 4",
      genre: "Science-Fiction",
      rating: 8.1,
      poster: "https://via.placeholder.com/300x450",
      year: 2024,
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {films.map((film, index) => (
        <div className="col" key={index}>
          <div className="card h-100 film-card">
            <img src={film.poster} className="card-img-top" alt={film.title} />
            <div className="card-body">
              <h5 className="card-title">{film.title}</h5>
              <div className="card-text">
                <p className="mb-1">
                  <span className="badge bg-primary me-2">{film.genre}</span>
                  <span className="badge bg-secondary">{film.year}</span>
                </p>
                <div className="rating mb-3">
                  <span className="star-rating">⭐ {film.rating}/10</span>
                </div>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary">
                  <i className="bi bi-plus-circle me-2"></i>
                  Ajouter à la Liste
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-info-circle me-2"></i>
                  Détails
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmGrid;
