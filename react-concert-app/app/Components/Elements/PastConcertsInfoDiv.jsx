"use client";
import React, { useEffect, useState } from "react";
import usePastConcerts from "../Data/usePastConcerts";
import useDeletePastConcerts from "../Data/useDeletePastConcerts";
import Image from "next/image";
import trashDelete from "../Images/trashDelete.png";
import editIcon from "../Images/editIcon.png";

const PastConcerts = () => {
  // Define state variables to hold your data using the custom hook
  const {
    events, // Array of past concerts
    setEvents, // Function to update past concerts data

    currentEventId, // ID of the currently selected event
    setCurrentEventId, // Function to update the currently selected event ID
  } = usePastConcerts(); // Destructure the values returned from the custom hook

  const deletePastConcert = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    if (currentEventId === id) {
      setCurrentEventId(updatedEvents[0]?.id || "");
    }
  };

  // Render your component JSX and logic here
  return (
    <div>
      {/* Header row for displaying column names */}
      <div className="flex text-left text-lg font-semibold border-b-2 mx-5">
        <h2 className="mx-3 px-2">Date</h2>
        <h2 className="ml-16 px-1">Type</h2>
        <h2 className="ml-14 px-1">Name</h2>
        <h2 className="ml-[14rem] pr-2">Venue</h2>
      </div>

      {/* Map over the array of past concerts and render each concert's information */}
      {events.map(({ id, date, type, name, venue }) => (
        <div key={id} className="flex justify-around text-left mx-5">
          <p className="w-26 pt-5">{date}</p>
          <p className="w-16 pt-5">{type}</p>
          <p className="w-60 pt-5">{name}</p>
          <p className="w-80 pr-2 pt-5">{venue}</p>
          {/* <button>
            <Image
              // onClick={() => editPastConcert(id)}
              id="editConcertBtn"
              className="w-26 pt-2"
              src={editIcon}
              height={40}
              alt="logo"
            />
          </button> */}

          <button>
            <Image
              onClick={() => deletePastConcert(id)}
              id="deleteConcertBtn"
              className="w-26 pt-2"
              src={trashDelete}
              height={40}
              alt="logo"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PastConcerts;
