"use client";

import { events as testEvents, currentEventId as testCurrentEventId} from '../../Components/Data/testData'
import { useState, useEffect } from 'react'
import PastEventsPageBody from "../../Components/Elements/PastEventsPageBody";
import { EventContext } from "../../Components/Data/EventProvider";
import useLocalStorage from 'use-local-storage';

export default function PastEvents() {
  const [events, setEvents] = useLocalStorage('previousEvents', testEvents); // Default events data
  const [currentEventId, setCurrentEventId] = useLocalStorage('previousCurrentEventId', testCurrentEventId); // Default current event ID

  const [keyword, setKeyword] = useLocalStorage('previousEventsKeyword', '')
  const [dateTime, setDateTime] = useState('')
  const [inputArea, setInputArea] = useState(false);
  const [performerName, setPerformerName] = useState("");
  const [venue, setVenue] = useState("");

  const addEvent = (newPastEvent) => {
    setEvents([...events, newPastEvent])
  }




  return (
    <EventContext.Provider value={{
      events, addEvent, setEvents,
      currentEventId, setCurrentEventId, 
      dateTime, setDateTime, 
      keyword, setKeyword,
      inputArea, setInputArea,
      performerName, setPerformerName,
      venue, setVenue
    }}>
      <PastEventsPageBody />
    </EventContext.Provider>
  );
}

