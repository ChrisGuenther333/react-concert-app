"use client";
import React, { useEffect, useState } from "react";
import usePastConcerts from "../Data/usePastConcerts";

const PastConcerts = () => {
  // Define state variables to hold your data
  const {
    events,
    setEvents,

    currentEventId,
    setCurrentEventId,
  } = usePastConcerts();

  // Your component JSX and logic here
  return (
    <div>
      <div className="flex justify-evenly text-left text-lg font-semibold border-b-2">
        <h2 className="w-24 px-2">Date</h2>
        <h2 className="w-16 px-1">Type</h2>
        <h2 className="w-60 px-1">Name</h2>
        <h2 className="w-80 pr-2">Venue</h2>
      </div>

      {events.map(({ id, date, type, name, venue }) => (
        <div key={id} className="flex justify-evenly text-left ">
          <p className="w-24 px-2">{date}</p>
          <p className="w-16 px-1">{type}</p>
          <p className="w-60 px-1">{name}</p>
          <p className="w-80 pr-2">{venue}</p>
        </div>
      ))}
    </div>
  );
};

export default PastConcerts;
