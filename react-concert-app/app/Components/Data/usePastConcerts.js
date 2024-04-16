import { useEffect, useState } from "react";

import {
  currentEventId as testCurrentEventId,
  events as testEvents,
} from "./testData";

// Custom hook to manage past concerts data
export default function usePastConcerts() {
  // Initialize state variables for events and currentEventId using useState
  const [events, setEvents] = useState(testEvents); // Default events data
  const [currentEventId, setCurrentEventId] = useState(testCurrentEventId); // Default current event ID

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
