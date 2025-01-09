import logo from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  } = restaurant;

  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img className="image" src={logo} alt={name} />
      </div>
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="area">{area}</p>
        <p className="distance">{lastMileTravelString}</p>
        <p className="cost">{costForTwoString}</p>
        <p
          className={`rating ${avgRating >= 4 ? "high-rating" : "low-rating"}`}
        >
          ⭐ {avgRating}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
