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
        <div
          id="search-concert"
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          placeholder="Search..."
        ></div>
      )}
    </div>
  );
}
