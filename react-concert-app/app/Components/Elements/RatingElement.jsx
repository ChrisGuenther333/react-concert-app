import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const EventRating = () => {
  const [rating, setRating] = useState(() => {
    // Retrieve rating from local storage on component mount
    const storedRating = localStorage.getItem("eventRating");
    return storedRating ? parseInt(storedRating) : 0;
  });
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
  };

  useEffect(() => {
    // Save rating to local storage whenever it changes
    localStorage.setItem("eventRating", rating.toString());
  }, [rating]);

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;

        return (
          <label key={index}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={starRating}
              onClick={() => handleClick(starRating)}
            />
            <FaStar
              className="star "
              color={
                starRating <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"
              }
              size={24}
              onMouseEnter={() => handleMouseEnter(starRating)}
              onMouseLeave={handleMouseLeave}
            />
          </label>
        );
      })}
    </div>
  );
};

export default EventRating;
