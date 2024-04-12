import { useEffect, useState } from 'react'

import { currentEventId as testCurrentEventId, events as testEvents } from './testData'


export default function usePastConcerts() {
  const [events, setEvents] = useState(testEvents);
  const [currentEventId, setCurrentEventId] = useState(testCurrentEventId);
 
 
  // Save data to localStorage whenever events or currentEventId change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);
 
  useEffect(() => {
    localStorage.setItem("currentEventId", JSON.stringify(currentEventId));
  }, [currentEventId]);

  return {
    // current state
    events,
    currentEventId,

    // state 'mutators' or functions that change the state
    setEvents,
    setCurrentEventId
  }

}