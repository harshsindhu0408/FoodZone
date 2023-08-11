import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRating,
}) => { 

  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant pic" />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5 className="font-extrabold">{areaName}</h5>
      <span>
        <h4
          style={
            avgRating < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa fa-star"></i>
          {avgRating}
        </h4>
        <h4>•</h4>
        <h4>{sla.lastMileTravelString}</h4>
        <h4>•</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
