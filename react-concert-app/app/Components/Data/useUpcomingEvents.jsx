'use client'

import { useEffect, useState } from "react";
import useEventFetchRequest from './useEventFetchRequest';

// Custom hook for accessing past events data from the context
export default function useUpcomingEvents () {
  // Access past events data from the PastEventContext using the useContext hook
  const [keyword, setKeyword] = useState(localStorage.getItem('keyword') ?? '')
  const [dateTime, setDateTime] = useState('')
  const events = useEventFetchRequest({ keyword })

  const [currentEventId, setCurrentEventId] = useState(''); // Default current event ID

  // Save data to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("upcomingEvents", JSON.stringify(events)); // Store events data in localStorage
  }, [events]); // Trigger this effect whenever the events state changes

  // Save data to localStorage whenever currentEventId changes
  useEffect(() => {
    localStorage.setItem("upcomingCurrentEventId", JSON.stringify(currentEventId)); // Store currentEventId in localStorage
  }, [currentEventId]); // Trigger this effect whenever the currentEventId state changes

  // Return an object containing current state and state mutators
  return {
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

  // Return the past events data obtained from the context
}