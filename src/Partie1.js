import React from "react";
import Chiffre from "./components/Chiffre";
import Equipe from "./components/Equipe";
import Invest from "./components/Invest";
import { Map } from "./components/Map";
import Presentation from "./components/Presentation";
import Responsabilite from "./components/Responsabilite";
import Valeurs from "./components/Valeurs";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Partie1 = () => {
  return (
    <div>
      <NavBar />
      <Presentation />
      <Chiffre />
      <Invest />
      <Valeurs />
      <Equipe />
      <Responsabilite />
      <Map />
      <Footer />
    </div>
  );
};

export default Partie1;
