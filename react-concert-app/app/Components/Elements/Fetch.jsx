"use client"

import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [performers, setPerformers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://www.setlist.fm/setlists/1.0/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setPerformers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredPerformers = performers.filter((performer) =>
    performer.artists.artistName
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search performers..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredPerformers.map((performer, index) => (
        <p key={index}>{performer.artists.artistName}</p>
      ))}
    </div>
  );
};

export default Fetch;
