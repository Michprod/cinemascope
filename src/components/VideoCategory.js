import React, { useState } from "react";
import "./VideoCategory.css";

const VideoCategory = ({ category, videos, onSelect, selectedVideos }) => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [userRatings, setUserRatings] = useState({});

  const handleStarHover = (rating) => {
    setHoveredStars(rating);
  };

  const handleStarLeave = () => {
    setHoveredStars(0);
  };

  const handleRate = (videoId, rating) => {
    setUserRatings((prev) => ({
      ...prev,
      [videoId]: rating,
    }));
  };

  const renderStars = (rating, isInteractive = false, videoId) => {
    const stars = [];
    const currentRating = hoveredStars || userRatings[videoId] || rating;

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= currentRating ? "filled" : "empty"} ${isInteractive ? "interactive" : ""}`}
          onMouseEnter={isInteractive ? () => handleStarHover(i) : undefined}
          onMouseLeave={isInteractive ? handleStarLeave : undefined}
          onClick={isInteractive ? () => handleRate(videoId, i) : undefined}
        >
          ★
        </span>,
      );
    }
    return stars;
  };

  return (
    <div className="video-category mb-5">
      <h3 className="mb-4">{category}</h3>
      <div className="video-grid">
        {videos.map((video) => (
          <div
            className={`video-card ${selectedVideos.includes(video) ? "selected" : ""}`}
            key={video.id}
          >
            <div className="poster-container">
              <img
                src={video.poster}
                alt={video.title}
                className="film-poster"
              />
              <div className="video-card-content">
                <h4 className="video-title">{video.title}</h4>
                <div className="video-info">
                  {video.year && <div className="video-year">{video.year}</div>}
                  {video.rating && (
                    <div className="video-rating">
                      <div className="stars">{renderStars(video.rating)}</div>
                      <span className="rating-value">{video.rating}/5</span>
                    </div>
                  )}
                </div>
                <button
                  className={`select-btn ${
                    selectedVideos.includes(video)
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => onSelect(video)}
                >
                  {selectedVideos.includes(video) ? "Déjà choisi" : "Choisir"}
                </button>
              </div>
              <div className="overlay">
                <div className="overlay-content">
                  <p className="video-description">{video.description}</p>
                  <div className="user-rating">
                    <span className="rating-label">Votre note :</span>
                    <div className="stars interactive">
                      {renderStars(userRatings[video.id] || 0, true, video.id)}
                    </div>
                    <span className="rating-value">
                      {userRatings[video.id]
                        ? `${userRatings[video.id]}/5`
                        : "-"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCategory;
