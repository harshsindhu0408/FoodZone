import { useState } from "react";
import { IMG_CDN_URL } from "../constants";

// FoodItem card component: Image, name, area
const FoodItem = ({ imageId, name, area, description, price }) => { 
  return (
    <div className="card">
      <img src={IMG_CDN_URL + imageId} />
      <h2>{name}</h2>
      <h3>{area}</h3>
      <h3>{description}</h3>
      <h3>Rupees - { price / 100 }</h3>
    </div>
  );
};

export default FoodItem;
