import React from "react";
import mapLogo from "./tunisiaLow.svg";

import "./Map.css";

export const Map = () => {
  return (
    <div className="Map">
      <div>
        <h2>Map</h2>
        <img src={mapLogo} alt="map" height="600px" />
        {/* <SVGMap map={Taiwan} />; */}
      </div>
    </div>
  );
};
