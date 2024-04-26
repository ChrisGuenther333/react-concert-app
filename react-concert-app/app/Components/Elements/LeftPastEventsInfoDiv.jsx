"use client";
import React, { useCallback, useContext } from "react";
import { EventContext } from "../Data/EventProvider";
import Image from "next/image";
import trashDelete from "../Images/trashDelete.png";
import Link from 'next/link'

const PastEvents = () => {
  // Define state variables to hold your data using the custom hook

  const {
    events, // Array of past events
    setEvents, // Function to update past events data

    currentEventId, // ID of the currently selected event
    setCurrentEventId, // Function to update the currently selected event ID
  } = useContext(EventContext); // Destructure the values returned from the custom hook

  const deletePastEvent = useCallback((id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    if (currentEventId === id) {
      setCurrentEventId(updatedEvents[0]?.id || "");
    }
  }, [events, setEvents, currentEventId]);

  const handleEventClick = useCallback((id) => {
    // Update clickedPastEventId when an event is clicked
    console.log(currentEventId);
    console.log(events);
    setCurrentEventId(id);

    // renderEventDetails(currentEventId);
  }, [currentEventId, events])

  // Render your component JSX and logic here
  return (
    <div>
      {/* Header row for displaying column names */}
      <div className="flex text-left text-lg font-semibold border-b-2 mx-5">
        <h2 className="mx-[0.25rem] px-2">Date</h2>
        <h2 className="ml-14 px-1">Type</h2>
        <h2 className="ml-10 px-1">Name</h2>
        <h2 className="ml-[12.75rem] pr-2">Venue</h2>
        <h2 className="ml-[12.75rem] pr-1">
          {window?.location?.pathname?.includes('upcomingEvents') ? 'Ticket Link': ''}
        </h2>
      </div>

      {/* Map over the array of past event and render each event's information */}
      {(events ?? []).map(({ id, dateTime, type, name, venue, purchaseUrl }) => (
        <div
          id={id}
          key={id}
          className="flex justify-around text-left mx-5"
          onClick={() => handleEventClick(id)}
        >
          <p className="w-26 pt-5">
            {dateTime}
          </p>
          <p className="w-16 pt-5">
            {type}
          </p>
          <p className="w-60 pt-5">
            {name}
          </p>
          <p className="w-80 pr-2 pt-5">
            {venue}
          </p>
          <div className="w-80 pr-2 pt-5">
            {purchaseUrl ? (<Link href={purchaseUrl} target="_blank" className="px-4 py-2 border flex justify-center border-slate-500 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-200 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 bg-slate-800 w-48 ">Buy Ticket</Link>): null}
          </div>
          <button>
            <Image
              onClick={() => deletePastEvent(id)}
              id="deleteEventBtn"
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

export default PastEvents;
