'use client'

import { useContext, useState, useEffect, useMemo } from "react";
import { events as testEvents, currentEventId as testCurrentEventId } from './testData'


// Custom hook for accessing past events data from the context
export default function usePastEvents () {
  const [events, setEvents] = useState(testEvents); // Default events data
  const [currentEventId, setCurrentEventId1] = useState(testCurrentEventId); // Default current event ID

  
  const setCurrentEventId = (id) => {
    console.log('testing!', id)
    setCurrentEventId1(id)
  }

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

  // Return an object containing current state and state mutators
  return {
    // Current state
    events, // Array of past concerts
    currentEventId, // ID of the currently selected event

    // State mutators or functions that change the state
    setEvents, // Function to update past concerts data
    setCurrentEventId, // Function to update the currently selected event ID
  };

}