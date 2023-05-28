import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper"; // For reusability or readability filterData function is added in Helper.js file of Utils folder
import North from "../Images/North.png"


// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants(); 
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  //console.log(allRestaurants);
  var originalArray = Array.from(allRestaurants);
 
  function onClickhandler (name)  {
    originalArray = originalArray.filter((res) => res.data.cuisines.includes(`${name}`));
                 setFilteredRestaurants(originalArray);
  }

  // use searchData function and set condition if data is empty show error message
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

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => {
            setSearchText(e.target.value)
          // when user will enter the data, it automatically called searchData function so it work same as when you click on Search button
          searchData(e.target.value, allRestaurants);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
        {errorMessage && <div className="error-container">{errorMessage}</div>}

        {/*Filters with Photos*/}
        <div>
          <div className="main-course">
            <div className="headingg">Eat what makes you happy....</div>

              <div className="select-fast">
                <div className="select-fast-img ddnn" onClick={() => {
                  onClickhandler("Pizzas");
                }}>
                  <img src="https://b.zmtcdn.com/data/o2_assets/56242a05c64150a79994df6902cde1dd1633434835.png" alt="" loading="lazy" width={170} />
                  <h3>Pizza</h3>
                </div>

                <div className="select-fast-img" onClick={() => {
                    onClickhandler("Burger");
                }}>
                  <img src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="" loading="lazy" width={170} />
                  <h3>Burger</h3>
                </div>

                <div className="select-fast-img" onClick={() => {
                    onClickhandler("North Indian");
                }}>
                  <img src={North} alt="" loading="lazy" width={170} />
                  <h3>North Indian</h3>
                </div>

                <div className="select-fast-img" onClick={() => {
                    onClickhandler("Desserts");
                }}>
                  <img src="https://b.zmtcdn.com/data/dish_images/f728696e2e893afad2bb5f9ee3ed54ac1639737685.png" alt="" loading="lazy" width={170} />
                  <h3>Desserts</h3>
                </div>

                <div className="select-fast-img ddnn" onClick={() => {
                    onClickhandler("Snacks");
                }}>
                  <img src="https://b.zmtcdn.com/data/dish_images/f6a3d294b0f120f68aac6de2acf2e1721637241776.png" alt="" loading="lazy" width={170} />
                  <h3>Snacks</h3>
                </div>
            </div>
        </div>

      </div>

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      <div>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                {" "}
                {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      )}
      </div>
    </>
  );
};

export default Body;
