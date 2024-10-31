import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Form submitted:", formData);
  };

  const handleGoogleSignIn = () => {
    // Add your Google authentication logic here
    console.log("Google sign-in clicked");
  };

  return (
    <div className="register-container">
      <div className="register-form-wrapper">
        <h2>Créer un compte</h2>
        <p className="form-subtitle">
          Rejoignez CinémaScope pour découvrir des films qui vous correspondent
        </p>

        <button className="google-sign-in" onClick={handleGoogleSignIn}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNMTcuNjQgOS4yMDVjMC0uNjM5LS4wNTctMS4yNTItLjE2NC0xLjg0MUg5djMuNDgxaDQuODQ0YTQuMTQgNC4xNCAwIDAgMS0xLjc5NiAyLjcxNnYyLjI1OWgyLjkwOGMxLjcwMi0xLjU2NyAyLjY4NC00Ljg3MiAyLjY4NC04LjYxNXoiLz48cGF0aCBmaWxsPSIjMzRBODUzIiBkPSJNOSAxOGMzLjI0IDAgNS45NTYtMS4wNzUgNy45NDUtMi45MDhsLTIuOTA4LTIuMjU5Yy0uODA2LjU0LTEuODM3Ljg2LTMuMDM3Ljg2LTIuMzQ0IDAtNC4zMjgtMS41ODQtNS4wMzYtMy43MTFIMy4wNnYyLjMzMkE4Ljk5NyA4Ljk5NyAwIDAgMCA5IDE4eiIvPjxwYXRoIGZpbGw9IiNGQkJDMDUiIGQ9Ik0zLjk2NCA5Ljk4MkMzLjc4NCA5LjMzOCAzLjY4MiA4LjY2IDMuNjgyIDhzLjEwMi0xLjMzOC4yODItMS45ODJWMy42ODZIMy4wNkE4Ljk5NiA4Ljk5NiAwIDAgMCAyIDhjMCA0Ljk3IDQuMDMgOSA5IDl2LTMuNTAxQzYuNjcyIDE1LjU2NiA0LjY3MiAxMy4xMDkgMy45NjQgOS45ODJ6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTkgMy41NzhjMS4zMjEgMCAyLjUwOC40NTQgMy40NCAyLjM0N2wyLjU4Mi0yLjU4QzEzLjQ2MyAxLjczMSAxMS40MDkgMCA5IDAgNS4wMyAwIDIgNC4wMyAyIDljMCAyLjQ4NSAxLjAwNCA0LjczMyAyLjYzMSA2LjM2bDIuODY4LTIuMjZjLS45Mi0xLjUyMi0xLjQ1My0yLjQ5Mi0xLjQ1My0zLjExIDAtMS44OTEgMS41NDUtMy40MjggMy40NTQtMy40Mjh6Ii8+PC9zdmc+"
            alt="Google"
          />
          Continuer avec Google
        </button>

        <div className="divider">
          <span>ou</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nom d'utilisateur"
              required
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              required
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmer le mot de passe"
              required
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            S'inscrire
          </button>
        </form>

        <p className="login-link">
          Déjà membre ?{" "}
          <span onClick={() => navigate("/login")} className="link">
            Se connecter
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
