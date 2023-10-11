import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage(plantObj, key) {
  console.log(plantObj);
  console.log(key);
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantObj />
    </main>
  );
}

export default PlantPage;
