import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="Logo">
        <img
          src="/assets/FINALLOGOwhite.png"
          alt="logo"
          style={{ width: "20vw" }}
        />
      </div>

      <div>
        <ul className="contact">
          <li style={{ fontSize: "1.5rem", textDecoration: "underline" }}>
            Nous contacter :{" "}
          </li>
          <li>
            {" "}
            Adresse : Siège social, Imm. El Emtiez. Centre Urbain Nord, 1003,
            Tunis.{" "}
          </li>
          <li> Telephone: +216 71 238 729 - +216 71 233 342 </li>
          <li> Fax: +216 71 234 411</li>
          <li> Email: info@stbsicar.com.tn</li>
        </ul>
      </div>
      <div className="copyright">
        <p> Copyright © 2022 Seif Chadi Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default Footer;
