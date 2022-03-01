import React from "react";
import "./Responsabilite.css";

const Responsabilite = () => {
  return (
    <div className="resp">
      <h3>RESPONSABILITE SOCIALE</h3>
      <div className="politique">
        <div>
          <h2>Notre politique interne</h2>
          <p>
            Nous permettons à nos collaborateurs de grandir au sein de STB
            SICAR, aussi bien professionnellement que personnellement. Nous
            veillons à l’égalité entre tous et à l’accomplissement de chacun.
          </p>
          <img src="/assets/enbref.png" alt="pic" width="450vw" />
        </div>
        <img
          src="/assets/team/politique.jpg"
          alt="logo"
          width="550vw"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className="engagement">
        <img
          src="/assets/team/engagement.jpg"
          alt="logo"
          width="400vw"
          style={{ borderRadius: "10px", marginLeft: "5%" }}
        />
        <div>
          <h2>Pour nos participations</h2>
          <p>
            Nous sommes conscients de la nécessité de prendre en considération
            les critères environnementaux, sociaux et de qualité de gouvernance
            (ESG) dans la politique d’investissement. Ainsi, nous avons établi
            une charte ESG. Nous sommes également très attachés à la qualité de
            l’approche et à la politique mise en œuvre par nos participations en
            ce qui concerne le respect de l’environnement et la gestion des
            ressources humaines. Pour ce faire, un questionnaire a été envoyé
            aux sociétés financées. Il s’appuie sur un socle commun comprenant
            des indicateurs quantitatifs portant sur les 3 grands thèmes ESG
            prioritaires de la STB SICAR.
          </p>
          <img src="/assets/enbref1.png" alt="pic" width="450vw" />
        </div>
      </div>
    </div>
  );
};

export default Responsabilite;
