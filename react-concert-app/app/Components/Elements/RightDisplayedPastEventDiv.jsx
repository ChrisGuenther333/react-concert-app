'use client'

import { useContext} from "react";
import { EventContext } from "../Data/EventProvider";
import EventRating from "./RatingElement";
// import BandPhotoInput from "./RightAddEventPic";

function EventDetails({ date, name, venue }) {
    return (
      <div className="flex justify-evenly items-center ">
        <EventRating/>
        <div>
          <p key={date} className="text-lg mt-5">
            {date}
          </p>
          {/* <p className="text-lg"> {event.type}</p> */}
          <p key={name} className="text-3xl m-1">
            {name}
          </p>
          <div className="border m-2"></div>
          <p key={venue} className="text-xl">
            {venue}
          </p>
        </div>
      </div>
    );
}

export default function RightDisplayedPastEventDiv() {
  // Define state variables to hold your data using the custom hook
  const {
    events, // Array of past events

    currentEventId, // ID of the currently selected event
  } = useContext(EventContext) // Destructure the values returned from the custom hook

  const event = events.find(e => e.id === currentEventId)

  return (
    <div key="bandDetails" className="bg-slate-600 w-2/5 flex flex-col text-center justify-center"> 
      {/* Render event details */}
      {event ? <EventDetails {...event} /> : null}
      {/* <BandPhotoInput /> */}
    </div>
  );
}
