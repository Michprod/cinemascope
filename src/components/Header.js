// Header.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <h1>CinémaScope</h1>
          </Link>
        </div>

        <div className="search-bar">
          <input
            type="search"
            placeholder="Rechercher un film..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" aria-label="Rechercher">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
        </button>

        <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/recommandations">Recommandations</Link>
            </li>
            <li>
              <Link to="/lists">Mes Listes</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li className="join-button">
              <button
                onClick={() => {
                  navigate("/inscription");
                }}
                className="btn btn-primary"
              >
                <i className="bi-person-plus-fill"></i> Join
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
