// src/pages/ComplaintsPage.js
import React from "react";
import ComplaintMap from "../componenents/ComplaintMap";

const Map = () => {
  return (
    <div>
      <h1>Interactive Map</h1>
      <p>Below is an interactive map displaying all the registered complaints:</p>
      <ComplaintMap />
    </div>
  );
};

export default Map;