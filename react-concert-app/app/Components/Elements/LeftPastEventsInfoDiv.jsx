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
<table className="w-full">
  {/* Header row for displaying column names */}
  <tr className="flex text-left text-lg font-semibold border-b-2">
    <th className="w-1/5 px-2">Date</th>
    <th className="w-1/5 px-1">Type</th>
    <th className="w-2/5 px-1">Name</th>
    <th className="w-2/5 pr-2">Venue</th>
    <th className="w-1/5 pr-1">
      {window?.location?.pathname?.includes('upcomingEvents') ? 'Ticket Link' : ''}
    </th>
    <th className="w-1/5"></th> {/* Placeholder for delete button */}
  </tr>

  {/* Map over the array of past event and render each event's information */}
  {(events ?? []).map(({ id, dateTime, type, name, venue, purchaseUrl }) => (
    <tr
      key={id}
      className="flex text-left "
      onClick={() => handleEventClick(id)}
    >
      <td className="w-1/5 px-2 py-3">{dateTime}</td>
      <td className="w-1/5 px-1 py-3">{type}</td>
      <td className="w-2/5 px-1 py-3">{name}</td>
      <td className="w-2/5 pr-2 py-3">{venue}</td>
      <td className="w-1/5 pr-1 py-3">
        {purchaseUrl && (
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border flex justify-center border-slate-500 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-200 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 bg-slate-800 w-48"
          >
            Buy Ticket
          </a>
        )}
      </td>
      <td className="w-1/5 py-3">
        <button onClick={() => deletePastEvent(id)}>
          <Image
            id="deleteEventBtn"
            className="w-26"
            src={trashDelete}
            height={40}
            alt="Delete"
          />
        </button>
      </td>
    </tr>
  ))}
</table>
  );
};

export default PastEvents;
