"use client";

import React, { useState } from "react";

export default function AddConcertBtn() {
  const [inputArea, setInputArea] = useState(false); // Initial state is false

  const handleClick = () => {
    // Toggle the inputArea state value
    setInputArea(!inputArea);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        id="add-concert"
        className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        + Add Concert
      </button>
      {/* Render input area conditionally based on inputArea state */}
      {inputArea && (
        <div>
          <div className="flex justify-evenly items-center my-2 bg-black">
            <input
              type="date"
              id="add-concert-date"
              className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-44 h-8 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            ></input>
            <input
              type="search"
              id="add-concert-name"
              className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-44 h-8 mt-1 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              placeholder="Artist/Band"
            ></input>

            <input
              type="search"
              id="add-concert-venue"
              className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-44 h-8 mt-1 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              placeholder="Venue"
            ></input>
          </div>
          <button
            onClick={handleClick}
            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md mt-2 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
