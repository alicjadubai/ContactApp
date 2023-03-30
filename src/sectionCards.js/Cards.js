import React from "react";
import Card from "./Card";
import Units from "../sectionAddress/Units";

const Cards = () => {
  return (
    <div className="cardsUnits">
      <Card units={Units} />
    </div>
  );
};

export default Cards;
