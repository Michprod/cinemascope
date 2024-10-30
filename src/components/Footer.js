// Footer.js
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <div className="footer-brand">
                <h3>MonSiteFilms</h3>
                <p>
                  Votre destination cinéma préférée pour découvrir, partager et
                  discuter des meilleurs films.
                </p>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h4>Navigation</h4>
              <ul className="footer-links">
                <li>
                  <a href="/">Accueil</a>
                </li>
                <li>
                  <a href="/films">Films</a>
                </li>
                <li>
                  <a href="/series">Séries</a>
                </li>
                <li>
                  <a href="/nouveautes">Nouveautés</a>
                </li>
                <li>
                  <a href="/popular">Populaire</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h4>Légal</h4>
              <ul className="footer-links">
                <li>
                  <a href="/confidentialite">Confidentialité</a>
                </li>
                <li>
                  <a href="/conditions">Conditions</a>
                </li>
                <li>
                  <a href="/cookies">Cookies</a>
                </li>
                <li>
                  <a href="/mentions-legales">Mentions légales</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h4>Newsletter</h4>
              <p>Recevez nos dernières actualités et recommandations.</p>
              <form className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre email"
                    aria-label="Votre email"
                  />
                  <button className="btn btn-primary" type="submit">
                    <i className="bi bi-send-fill"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                © {currentYear} MonSiteFilms. Tous droits réservés.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <a href="/contact">Contact</a>
                <a href="/faq">FAQ</a>
                <a href="/support">Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
