import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";
import North from "../Images/North.png";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();
      if (
        json?.data?.cards &&
        Array.isArray(json.data.cards) &&
        json.data.cards.length >= 6 &&
        json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      ) {
        setAllRestaurants(
          json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurants(
          json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  function onClickhandler(name) {
    // Initialize the originalArray here with a filtered copy of allRestaurants
    const originalArray = allRestaurants.filter((res) =>
      res.info.cuisines.includes(name)
    );
    setFilteredRestaurants(originalArray);
  }

  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            searchData(e.target.value, allRestaurants);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      <div>
        <div className="main-course">
          <div className="headingg">Eat what makes you happy🍰....</div>

          {/* Filters with Photos */}
          <div className="select-fast">
            <div
              className="select-fast-img ddnn"
              onClick={() => onClickhandler("Pizzas")}
            >
              <img
                src="https://b.zmtcdn.com/data/o2_assets/56242a05c64150a79994df6902cde1dd1633434835.png"
                alt=""
                loading="lazy"
                width={170}
              />
              <h3>Pizza</h3>
            </div>

            <div
              className="select-fast-img"
              onClick={() => onClickhandler("Burgers")}
            >
              <img
                src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
                alt=""
                loading="lazy"
                width={170}
              />
              <h3>Burger</h3>
            </div>

            <div
              className="select-fast-img"
              onClick={() => onClickhandler("North Indian")}
            >
              <img src={North} alt="" loading="lazy" width={170} />
              <h3>North Indian</h3>
            </div>

            <div
              className="select-fast-img"
              onClick={() => onClickhandler("Desserts")}
            >
              <img
                src="https://b.zmtcdn.com/data/dish_images/f728696e2e893afad2bb5f9ee3ed54ac1639737685.png"
                alt=""
                loading="lazy"
                width={170}
              />
              <h3>Desserts</h3>
            </div>

            <div
              className="select-fast-img ddnn"
              onClick={() => onClickhandler("Snacks")}
            >
              <img
                src="https://b.zmtcdn.com/data/dish_images/f6a3d294b0f120f68aac6de2acf2e1721637241776.png"
                alt=""
                loading="lazy"
                width={170}
              />
              <h3>Snacks</h3>
            </div>
          </div>
        </div>
      </div>

      {/* If restaurants data is not fetched, display Shimmer UI. Otherwise, display restaurant cards */}
      <div>
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="restaurant-list">
            {filteredRestaurants.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant?.info.id}
                key={restaurant?.info.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
