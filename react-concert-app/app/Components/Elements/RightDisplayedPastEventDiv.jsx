'use client'

import { useEffect, } from "react";
import { events } from "../Data/testData";
import useEvents from "../Data/useEvents";
// import BandPhotoInput from "./RightAddEventPic";

function EventDetails({ date, name, venue }) {

 
    return (
      <div>
        <p key={date} className="text-lg mt-5">
          {date}
        </p>
        {/* <p className="text-lg"> {event.type}</p> */}
        <p key={name} className="text-3xl m-3">
          {name}
        </p>
        <p key={venue} className="text-xl">
          {venue}
        </p>
      </div>
    );
}


export default function RightDisplayedPastEventDiv() {
  // Define state variables to hold your data using the custom hook
  const {
    events, // Array of past events
    setEvents, // Function to update past events data

    currentEventId, // ID of the currently selected event
    setCurrentEventId, // Function to update the currently selected event ID
  } = useEvents(); // Destructure the values returned from the custom hook

  // Function to handle click on an event
  function handleEventClick(id) {
    // Update the current event ID when an event is clicked
    setCurrentEventId(id);
  }

  // Function to render event details

  const event = events[0]


  console.log('Asdfasdf currentEventId', currentEventId)

  useEffect(() => {
    console.log(currentEventId, 'testing in RightDisplayedaasdfasfdasdf')
  }, [currentEventId])

  return (
    <div key="bandDetails" className="bg-slate-600 w-2/5 flex flex-col text-center"> 
      {/* Render event details */}
      {event ? <EventDetails {...event} /> : null}
      {/* <BandPhotoInput /> */}
    </div>
  );
}
