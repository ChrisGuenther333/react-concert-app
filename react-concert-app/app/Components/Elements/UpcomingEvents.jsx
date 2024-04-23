"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import usePastEvents from "../Data/usePastEvents";
import Image from "next/image";
import trashDelete from "../Images/trashDelete.png";
import renderEventDetails from "./RightDisplayedPastEventDiv";
import { UpcomingEventContext } from "../Data/UpcomingEventProvider";

const UpcomingEvents = () => {
  // Define state variables to hold your data using the custom hook

  const {events, setKeyword, keyword } = useContext(UpcomingEventContext)

  // Render your component JSX and logic here
  return (
    <div>
      <input onChange={e => {setKeyword(e.target.value)}} value={keyword}></input>
      {/* Header row for displaying column names */}
      <div className="flex text-left text-lg font-semibold border-b-2 mx-5">
        <h2 className="mx-3 px-2">Date</h2>
        <h2 className="ml-10 px-1">Type</h2>
        <h2 className="ml-10 px-1">Name</h2>
        <h2 className="ml-52 pr-2">Venue</h2>
        <h2 className="ml-52 pr-2">Buy Ticket</h2>
      </div>

      {/* Map over the array of past event and render each event's information */}
      {events.map(({ id, date, type, name, venue, url }) => (
        <div
          id={id}
          key={id}
          className="flex justify-around text-left mx-5"
          onClick={() => handleEventClick(id)}
        >
          <p key={date} className="w-26 pt-5">
            {date}
          </p>
          <p key={type} className="w-16 pt-5">
            {type}
          </p>
          <p key={name} className="w-60 pt-5">
            {name}
          </p>
          <p key={venue} className="w-80 pr-2 pt-5">
            {venue}
          </p>
          <Link href={url} target="_blank"><button>Buy Ticket</button></Link>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
