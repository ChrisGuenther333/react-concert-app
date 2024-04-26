import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import usePastEvents from "../Data/usePastEvents";
import { currentEventId } from "../Data/testData";

const EventRating = () => {
  const [hoverRating, setHoverRating] = useState(0);
  // Define state variables to hold your data using the custom hook
  const {
    events, // Array of past events
    setEvents, // Function to update past events data

    currentEventId, // ID of the currently selected event
    setCurrentEventId, // Function to update the currently selected event ID
  } = usePastEvents(); // Destructure the values returned from the custom hook

  const [rating, setRating] = useState(() => {
    // Retrieve rating from local storage for the specific event
    const storedRating = localStorage.getItem(`eventRating_${currentEventId}`);
    return storedRating ? parseInt(storedRating) : 0;
  });



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
    localStorage.setItem(`eventRating_${currentEventId}`, rating.toString());
  }, [rating, currentEventId]);


  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;

        return (
          <label key={index}>
            <input
              className="hidden"
              type="radio"
              name={`rating_${currentEventId}`}
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
