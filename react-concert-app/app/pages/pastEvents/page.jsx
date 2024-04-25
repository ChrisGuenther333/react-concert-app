"use client";

import { events as testEvents, currentEventId as testCurrentEventId} from '../../Components/Data/testData'
import { useState, useEffect } from 'react'
import PageBody from "../../Components/Elements/PageBody";
import { EventContext } from "../../Components/Data/EventProvider";

export default function PastEvents() {
  const [events, setEvents] = useState(JSON?.parse(localStorage.getItem("events") ?? '[]') ?? testEvents); // Default events data
  const [currentEventId, setCurrentEventId] = useState(testCurrentEventId); // Default current event ID

  useEffect(() => {
    console.log('currentEventId', currentEventId)
  }, [currentEventId])

  // Save data to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events)); // Store events data in localStorage
  }, [events]); // Trigger this effect whenever the events state changes

  // Save data to localStorage whenever currentEventId changes
  useEffect(() => {
    localStorage.setItem("currentEventId", JSON.stringify(currentEventId)); // Store currentEventId in localStorage
  }, [currentEventId]); // Trigger this effect whenever the currentEventId state changes


  return (
    <EventContext.Provider value={{
      events, setEvents, currentEventId, setCurrentEventId
    }}>
      <PageBody />
    </EventContext.Provider>
  );
}

