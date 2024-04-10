"use client";

import React, { useState } from "react";

const AddConcertButton = ({  }) => {
  const [inputArea, setInputArea] = useState(false);
  const [date, setDate] = useState("");
  const [performer, setPerformer] = useState("");
  const [venue, setVenue] = useState("");

  const handleClick = () => {
    setInputArea(!inputArea);
  };

  const handleClickSave = () => {
    setInputArea(false);
    const newConcert = { date, performer, venue };
    const onAddConcert = (newConcert) => {
      console.log("New concert added:", newConcert);
      // You can implement logic to add the new concert to your data store here
    };
    // Clear input fields
    setDate("");
    setPerformer("");
    setVenue("");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ml-2"
      >
        + Add Concert
      </button>
      {inputArea && (
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-44 h-8 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          />
          <input
            type="text"
            value={performer}
            onChange={(e) => setPerformer(e.target.value)}
            placeholder="Performer"
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-44 h-8 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          />
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="Venue"
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-44 h-8 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          />
          <button onClick={handleClickSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default AddConcertButton;

let nextId = Math.floor(Math.random() * 10000);

const initialConcerts = [
  { id: 0, date: "04/01/2024", performer: "Khalid", venue: "SLC,UT" },
  { id: 1, date: "04/03/2024", performer: "Conan Gray", venue: "Phoenix, AZ" },
  { id: 2, date: "04/05/2024", performer: "Olivia Rodrigo", venue: "SLC,UT" },
];
