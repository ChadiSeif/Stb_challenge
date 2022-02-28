import React from "react";
import "./Chiffre.css";

const Chiffre = () => {
  return (
    <>
      <h3>Nos chiffres clés</h3>
      <div className="chiffreContainer">
        <div className="wrapper">
          <div className="cardtest">
            <h2>
              <span className="enclosed">23ans</span>
              <p>d'experiences</p>
            </h2>
          </div>
        </div>
        <div className="wrapper">
          <div className="cardtest">
            <h2>
              <span className="enclosed">128MDT</span>
              <p>Sous gestion</p>
            </h2>
          </div>
        </div>
        <div className="wrapper">
          <div className="cardtest">
            <h2>
              <span className="enclosed">300</span>
              <p>Investissements en portefeuille</p>
            </h2>
          </div>
        </div>
        <div className="wrapper">
          <div className="cardtest">
            <h2>
              <span className="enclosed">58</span>
              <p>Fonds gérés</p>
            </h2>
          </div>
        </div>

        <div className="wrapper">
          <div className="cardtest">
            <h2>
              <span className="enclosed">91</span>
              <p>Sorties intégrales réalisées</p>
            </h2>
          </div>
        </div>
        <div className="wrapper">
          <div className="cardtest">
            <h2>
              <span className="enclosed">24</span>
              <p>Régions</p>
            </h2>
          </div>
        </div>
      </div>
      <div className="divLeft">
        <div className="wrapper">
          <div className="cardtest">
            <h2>
              <span className="enclosed">1750</span>
              <p>emplois créés durants les 5 derniers années</p>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chiffre;
