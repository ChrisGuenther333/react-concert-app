"use client";

import React, { useEffect, useState, useCallback, useContext } from "react";
import { EventContext } from "../Data/EventProvider";

// Component for the left-side button to add events
const LeftAddEventButton = () => {
  // Use custom hook to access past events data and functions
  // const { events, setEvents } = useEvents();
  const { events, setEvents } = useContext(EventContext)

  // State variables to manage input area visibility and input values
  const [inputArea, setInputArea] = useState(false);
  const [date, setDate] = useState("");
  const [performerName, setPerformerName] = useState("");
  const [venue, setVenue] = useState("");

  // Toggle input area visibility
  const handleClick = () => {
    setInputArea(!inputArea);
  };
  const handleClickSave = () => {
    const id = Math.floor(Math.random() * 10000);

    // Get the selected type from the dropdown
    const type = document.getElementById("typeSelect").value;

    // Create a new event object
    const newEvent = { id, date, type, name: performerName, venue };

    // Update events state with the new event
    setEvents([...events, newEvent]);

    // Log the newly added event
    console.log("New event added:", newEvent);

    // Close the input area
    setInputArea(false);

    // Clear input fields
    setDate("");
    setPerformerName("");
    setVenue("");
  };

  // Get today's date as a string
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const todayString = today.toISOString().split("T")[0];

  return (
    <div>
      {/* Button to toggle input area visibility */}
      <button
        variant="gradient"
        onClick={handleClick}
        className="px-4 py-2 border flex gap-2 border-slate-500 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-200 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150  bg-slate-800 w-48 text-center"
      >
        + Add Event
      </button>
      {/* Input area for adding a new event */}
      {inputArea && (
        <div className="my-2">
          {/* Date input */}
          <input
            type="date"
            max={todayString}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-mdh-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 my-1 w-48"
          />
          {/* Type dropdown */}
          <select
            id="typeSelect"
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md h-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 my-1 w-48"
          >
            <option value="">Select Type</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Misc">Miscellaneous</option>
          </select>
          {/* Performer input */}
          <input
            onChange={(e) => setPerformerName(e.target.value)}
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md h-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  my-1 w-48"
            type="text"
            value={performerName}
            placeholder="Performer"
          ></input>
          {/* Venue input */}
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="Venue"
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md h-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  my-1 w-48"
          />
          {/* Save button */}
          <button
            onClick={handleClickSave}
            className="px-4 py-2 border flex gap-2 border-slate-500 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-200 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150  bg-slate-700 w-48 text-center"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default LeftAddEventButton;
