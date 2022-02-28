import React from "react";
import "./Presentation.css";

const Presentation = () => {
  return (
    <div>
      <div className="intro">
        <div className="introTitle">
          <p>STB SICAR, </p>
          <span>Societe d'Investissement à Capital Risque.</span>
        </div>

        <div className="presentation">
          <h3>Présentation</h3>
          <p>
            La STB SICAR, filiale de la STB BANK, a été créée le 23 mars 1998.
            C'est une société d’investissement à capital risque qui a pour
            objectif la participation, pour son propre compte ou pour le compte
            de bailleurs de fonds au renforcement des opportunités
            d’investissement et des fonds propres des entreprises. Elle permet
            de procurer aux entreprises les fonds nécessaires à leur
            développement et à leur croissance avec obligation de sortie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
