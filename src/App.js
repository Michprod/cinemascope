// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { Main, Recommendations } from "./components";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recommandations" element={<Recommendations />} />
        {/*<Route path="/inscription" element={<RegisterForm />} />*/}
        {/*<Route path="/details/:id" element={<MovieDetails />} />cd */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
