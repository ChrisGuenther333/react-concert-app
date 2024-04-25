"use client";
import { useState, useEffect } from 'react';
import { EventContext } from "../../Components/Data/EventProvider";
import PageBody from "../../Components/Elements/PageBody";
import useEventFetchRequest from '../../Components/Data/useEventFetchRequest'


export default function UpcomingEventsPage() {

  const [keyword, setKeyword] = useState(localStorage.getItem('keyword') ?? '')
  const [dateTime, setDateTime] = useState('')
  const {events, setEvents} = useEventFetchRequest({ keyword })

  const [currentEventId, setCurrentEventId] = useState(''); // Default current event ID

  // Save data to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("upcomingEvents", JSON.stringify(events)); // Store events data in localStorage
  }, [events]); // Trigger this effect whenever the events state changes

  // Save data to localStorage whenever currentEventId changes
  useEffect(() => {
    localStorage.setItem("upcomingCurrentEventId", JSON.stringify(currentEventId)); // Store currentEventId in localStorage
  }, [currentEventId]); // Trigger this effect whenever the currentEventId state changes



  return (
    <EventContext.Provider value={{
      events, setEvents, currentEventId, setCurrentEventId, dateTime, setDateTime, setKeyword
    }}>
      <PageBody />
    </EventContext.Provider>
  );
}


