import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./GlobalStyles";

import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import Hero from "./components/Hero";
import About from "./components/About";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Creations />
      <Footer />
    </div>
  );
};

export default App;
