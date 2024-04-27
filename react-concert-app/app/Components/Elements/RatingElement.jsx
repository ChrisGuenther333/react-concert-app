import React, { useState, useEffect, useContext } from "react";
import { FaStar } from "react-icons/fa";
// import usePastEvents from "../Data/usePastEvents";
import { EventContext } from "../Data/EventProvider";

function getInitialRating({ events, currentEventId }) {
  const currentEvent = getCurrentEvent({ events, currentEventId })

  return currentEvent?.rating ?? 0
}

function getCurrentEvent({ events, currentEventId }) {
  return  (events ?? [])?.find(eventItem => eventItem.id === currentEventId)
}


const EventRating = () => {

  // // Define state variables to hold your data using the custom hook
  const {
    events, // Array of past events
    setEvents, // Function to update past events data

    currentEventId, // ID of the currently selected event
    setCurrentEventId, // Function to update the currently selected event ID
  } = useContext(EventContext); // Destructure the values returned from the custom hook

  const currentEvent = getCurrentEvent({ events, currentEventId })

  const [rating, setRating] = useState(getInitialRating(currentEvent?.rating ?? 0));

  const [hoverRating, setHoverRating] = useState(getInitialRating(currentEvent?.rating ?? 0));

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };



  const handleClick = (starRating) => {

    currentEvent.rating = starRating
    setEvents([...events])

    setRating(starRating);
  };

  useEffect(() => {
    // Save rating to local storage whenever it changes
    localStorage.setItem(`eventRating_${currentEventId}`, rating.toString());
  }, [rating, currentEventId]);

  useEffect(() => {
    const initialRating = getInitialRating({ events, currentEventId })
    setRating(initialRating)
    setHoverRating(initialRating)
  }, [currentEventId, events])

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
