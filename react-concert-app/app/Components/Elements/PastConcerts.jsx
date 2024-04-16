"use client";
import React, { useEffect, useState } from "react";
import usePastConcerts from "../Data/usePastConcerts";

const PastConcerts = () => {
  // Define state variables to hold your data using the custom hook
  const {
    events, // Array of past concerts
    setEvents, // Function to update past concerts data

    currentEventId, // ID of the currently selected event
    setCurrentEventId, // Function to update the currently selected event ID
  } = usePastConcerts(); // Destructure the values returned from the custom hook

  // Render your component JSX and logic here
  return (
    <div>
      {/* Header row for displaying column names */}
      <div className="flex justify-evenly text-left text-lg font-semibold border-b-2">
        <h2 className="w-24 px-2">Date</h2>
        <h2 className="w-16 px-1">Type</h2>
        <h2 className="w-60 px-1">Name</h2>
        <h2 className="w-80 pr-2">Venue</h2>
      </div>

      {/* Map over the array of past concerts and render each concert's information */}
      {events.map(({ id, date, type, name, venue }) => (
        <div key={id} className="flex justify-evenly text-left ">
          <p className="w-26 pt-2">{date}</p>
          <p className="w-16 pt-2">{type}</p>
          <p className="w-60 pt-2">{name}</p>
          <p className="w-80 pr-2 pt-2">{venue}</p>
        </div>
      ))}
    </div>
  );
};

export default PastConcerts;
