import React from "react";
import PlantCard from "./PlantCard";

function PlantList(plantObj) {
  console.log(plantObj);
  return (
    <ul className="cards">
      <PlantCard name={plantObj.name} price={plantObj.price} />
    </ul>
  );
}

export default PlantList;
