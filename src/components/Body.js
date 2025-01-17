import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect, use } from "react";

const Body = () => {
  const [Listofrestaurants, setListofrestaurants] = useState(restaurantList);

  useEffect(() => {
    console.log("use effect called");
  }, []);

  return (
    <main className="body">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for restaurants..."
        />
        <button className="search-btn">Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = Listofrestaurants.filter(
              (res) => res.data.avgRating > 4.3
            );
            setListofrestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <section className="restaurant-list">
        {Listofrestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.id}
            restaurant={restaurant.data}
          />
        ))}
      </section>
    </main>
  );
};

export default Body;
