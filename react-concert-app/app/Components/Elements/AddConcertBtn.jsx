"use client";

import React, { useEffect, useState } from "react";
import usePastConcerts from '../Data/usePastConcerts'


//FIXME:
//date to restrict calendar to prevent user error
const date = new Date();
let today = date.getDate();

const AddConcertButton = () => {
  const {events, setEvents} = usePastConcerts();
  const [inputArea, setInputArea] = useState(false);
  const [date, setDate] = useState("");
  const [performerName, setPerformerName] = useState("");
  const [venue, setVenue] = useState("");

  const handleClick = () => {
    setInputArea(!inputArea);
  };

  //FIXME: displaying in console but not rendering div
  const handleClickSave = () => {
    const id = Math.floor(Math.random() * 10000);
    const type = typeSelect.value;

    const newConcert = { id, date, type, name: performerName, venue };

    setEvents([...events, newConcert]);

    console.log("New concert added:", newConcert);
    setInputArea(false);

    // Clear input fields
    setDate("");
    setPerformerName("");
    setVenue("");

    // console.log("New concert added:", newConcert);
    // events.push(newConcert);

    // setInputArea(false);

    // // const onAddConcert = (newConcert) => {
    // //   console.log("New concert added:", newConcert);
    // // };
    // // Clear input fields
    // setDate("");
    // setPerformerName("");
    // setVenue("");
  };

  return (
    <div>
      <button
        variant="gradient"
        onClick={handleClick}
        className="px-4 py-2 border flex gap-2 border-slate-500 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-200 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150  bg-slate-800 w-48 text-center"
      >
        + Add Concert
      </button>
      {inputArea && (
        <div className="my-2">
          <input
            type="date"
            //FIXME:
            max={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-44 h-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 my-1 w-48"
          />
          <select
            id="typeSelect"
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-44 h-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 my-1 w-48"
          >
            <option value="">Select Type</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="misc">Miscellaneous</option>
          </select>
          <input
            onChange={(e) => setPerformerName(e.target.value)}
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-44 h-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  my-1 w-48"
            type="text"
            value={performerName}
            placeholder="Performer"
          ></input>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="Venue"
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-44 h-10 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  my-1 w-48"
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

export default AddConcertButton;
