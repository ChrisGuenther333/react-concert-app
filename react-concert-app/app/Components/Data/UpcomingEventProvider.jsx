'use client'
import { createContext, useEffect, useState } from "react"
import {
    currentEventId as testCurrentEventId,
    events as testEvents,
} from "./testData";
import useEventFetchRequest from "./useEventFetchRequest";

export const UpcomingEventContext = createContext()

export default function UpcomingEventProvider({ children }) {
    const [keyword, setKeyword] = useState(localStorage.getItem('keyword') ?? '')
    const [dateTime, setDateTime] = useState('')
    const events = useEventFetchRequest({ keyword })

    const [currentEventId, setCurrentEventId] = useState(testCurrentEventId); // Default current event ID
  
    // Save data to localStorage whenever events change
    useEffect(() => {
      localStorage.setItem("upcomingEvents", JSON.stringify(events)); // Store events data in localStorage
    }, [events]); // Trigger this effect whenever the events state changes
  
    // Save data to localStorage whenever currentEventId changes
    useEffect(() => {
      localStorage.setItem("upcomingCurrentEventId", JSON.stringify(currentEventId)); // Store currentEventId in localStorage
    }, [currentEventId]); // Trigger this effect whenever the currentEventId state changes
  
    // Return an object containing current state and state mutators
    const value = {
      // Current state
      events, // Array of Upcoming concerts
      currentEventId, // ID of the currently selected event
      keyword,
      dateTime,
      // State mutators or functions that change the state
      setCurrentEventId, // Function to update the currently selected event ID
      setKeyword,
      setDateTime
    };

    return (
        <UpcomingEventContext.Provider value={value}>
            {children}
        </UpcomingEventContext.Provider>
    )
}