"use client";

import React, { useEffect, useState } from "react";
import usePastEvents from "../Data/usePastEvents";

const AddEventButton = () => {
  const { events, setEvents } = usePastEvents();
  const [inputArea, setInputArea] = useState(false);
  const [date, setDate] = useState("");
  const [performerName, setPerformerName] = useState("");
  const [venue, setVenue] = useState("");

  const handleClick = () => {
    setInputArea(!inputArea);
  };

  const handleClickSave = () => {
    const id = Math.floor(Math.random() * 10000);
    const type = typeSelect.value;

    const newEvent = { id, date, type, name: performerName, venue };

    setEvents([...events, newEvent]);

    console.log("New event added:", newEvent);
    setInputArea(false);

    // Clear input fields
    setDate("");
    setPerformerName("");
    setVenue("");
  };

  const today = new Date();
  today.setDate(today.getDate() - 1);
  const todayString = today.toISOString().split("T")[0];

  return (
    <div>
      <button
        variant="gradient"
        onClick={handleClick}
        className="px-4 py-2 border flex gap-2 border-slate-500 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-200 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150  bg-slate-800 w-48 text-center"
      >
        + Add Event
      </button>
      {inputArea && (
        <div className="my-2">
          <input
            type="date"
            max={todayString}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-mdh-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 my-1 w-48"
          />
          <select
            id="typeSelect"
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md h-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 my-1 w-48"
          >
            <option value="">Select Type</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Misc">Miscellaneous</option>
          </select>
          <input
            onChange={(e) => setPerformerName(e.target.value)}
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md h-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  my-1 w-48"
            type="text"
            value={performerName}
            placeholder="Performer"
          ></input>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="Venue"
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md h-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  my-1 w-48"
          />
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

export default AddEventButton;
