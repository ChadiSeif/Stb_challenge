import React from "react";
import "./Invest.css";

const Invest = () => {
  return (
    <div className="Invest">
      <div className="principeInvest">
        <h3>Principes d'Investissement</h3>
        <div className="principes">
          <div className="principesList">
            <p>Investir dans des projets viables</p>
            <p>Investir dans l'equity ou quasi equity</p>
            <p>Investir minoritairement</p>
            <p>Investir en respect des ratios règlementaire</p>
          </div>
          <img
            src="/assets/profits.png"
            alt="logoinvestissement"
            height={"200px"}
          />
        </div>
      </div>
      <div className="Mode">
        <h3>Modes d'intervention</h3>
        <div className="ModeDiv">
          <div className="ModeList">
            <p>Les action ordinaires (A.O) en sortie libre</p>
            <p>Les obligations convertibles en actions (O.C.A)</p>
            <p>Les avances sous forme de compte courant associé (C.C.A)</p>
          </div>

          <img
            src="/assets/rinse.png"
            alt="logoinvestissement"
            height={"200px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Invest;
