import React from "react";
import "./Equipe.css";
import EquipeCard from "./EquipeCard";

const equipeList = [
  {
    name: "Mr Mohamed Metoui",
    role: "Directeur General",
    img: "/assets/team/mohamedmetoui.jpg",
  },
  {
    name: "Hajer Hannachi",
    role: "Auditrice Interne",
    img: "/assets/team/hajerhannachi.png",
  },
  {
    name: "Ines Mlika",
    role: "Responsable back office",
    img: "/assets/team/inesmlika.jpg",
  },
  {
    name: "Anis Mlika",
    role: "Responsable Contentieux",
    img: "/assets/team/anismlika.jpg",
  },
  {
    name: "Radhia Haddad",
    role: "Responsable RH",
    img: "/assets/team/radhiahaddad.jpg",
  },
  {
    name: "Dorra Chouchane",
    role: "Responsable Front Office",
    img: "/assets/team/avatar.png",
  },
  {
    name: "Karim Aouadi",
    role: "Responsable Etudes et Mise en place",
    img: "/assets/team/avatar.png",
  },
  {
    name: "Haifa Jebnoun",
    role: "Responsable suivi du porte-feuille",
    img: "/assets/team/haifajebnoun.png",
  },
  {
    name: "Sana Ben Nejma",
    role: "Responsable gestion des sorties",
    img: "/assets/team/sanabennejma.png",
  },
];

console.log(equipeList);

const Equipe = () => {
  return (
    <div>
      <h3 style={{ fontSize: "2.5rem", textDecoration: "underline" }}>
        Notre équipe
      </h3>

      <div className="equipe">
        <div></div>

        {equipeList.map((user) => (
          <div>
            <EquipeCard user={user} />
            {/* <li>test</li> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipe;
