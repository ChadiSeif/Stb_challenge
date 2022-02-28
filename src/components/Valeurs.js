import React, { useState } from "react";
import "./Valeurs.css";

const Valeurs = () => {
  const [idClicked, setIdClicked] = useState(0);

  const parag = [
    {
      txt: `Nous partageons la conviction que la valeur d’une PME repose sur la
    qualité de son équipe dirigeante. En tant qu’actionnaire, nous nous
    positionnons comme un partenaire actif aux côtés des dirigeants.
    Ainsi, nos critères d’investissement privilégient, au-delà de
    l'analyse économique et industrielle de la société, la qualité et la
  motivation des dirigeants auxquels nous nous associons.`,
      img: "/assets/accompagnement.png",
    },
    {
      txt: `Partager les valeurs de respect, de loyauté et de transparence pour
        poser ensemble les fondations d’un partenariat durable et constructif.
        Notre philosophie d'investissement est résolument « non-intrusive »,
        pour préserver la liberté d’action des dirigeants de l’entreprise.
        Ainsi, tous nos investissements s’effectuent en mode minoritaire, en
        fonds propres et quasi-fonds propres. Nous privilégions une durée
        moyenne de participation « raisonnable », comprise entre 5 et 7 ans.`,
      img: "/assets/valeurs.png",
    },
    {
      txt: ` Chaque partenariat est une aventure riche d’expériences partagées et
        d’ambitions assumées.`,
      img: "/assets/aventure.png",
    },
    {
      txt: `L’accompagnement des participations est une pierre angulaire du
positionnement de la STB SICAR et un marqueur fort de sa stratégie.
Notre expérience montre qu’en apportant des ressources et des
compétences complémentaires à celles des équipes dirigeantes, nous
pouvons contribuer significativement à la création de valeur
stratégique de l’entreprise, tant sur le plan économique que social.`,
      img: "/assets/value.png",
    },
  ];

  const listValues = [
    "Un accompagnement",
    "Des valeurs qui se partagent",
    "Une aventure humaine",
    "Notre valeur ajoutée",
  ];
  //   console.log(parag[idClicked]);
  return (
    <div className="valeur">
      <div className="valeurGauche">
        <h3>Un état d'esprit</h3>
        <p>
          Nous plaçons la confiance comnme valeur fondamentale d'un partenariat
          gagnant
        </p>
        <ul>
          {listValues.map((list, i) => (
            <li
              className={idClicked == i ? "clicked" : null}
              id={i}
              onClick={(e) => setIdClicked(e.target.id)}
            >
              {list}
            </li>
          ))}
        </ul>
      </div>
      <div className="valeurDroite">
        {/* <Valeurs1 /> */}
        <img src={parag[idClicked].img} alt="logo" width={"100vw"} />
        <p>{parag[idClicked].txt}</p>
      </div>
    </div>
  );
};

export default Valeurs;
