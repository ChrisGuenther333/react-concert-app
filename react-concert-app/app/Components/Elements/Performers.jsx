"use client";
import React, { useState, useEffect } from "react";


function fetchPerformers() {
  
}

const Performers = () => {
  const [performers, setPerformers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const apiKey='O7mgiEMxAiHANcefL8qVSA6ab9XSrdZK'
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=Queen&apikey=${apiKey}&page=2`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log('data', data)
        setPerformers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredPerformers = [].filter((performer) =>
    performer.artistName
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <select
        placeholder="Search performers..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      > </select>
      {filteredPerformers.map((performer, index) => (
        <option key={index}>{performer.artists.artistName}</option>
      ))}
    </div>
  );
};

export default Performers;
// export Performers