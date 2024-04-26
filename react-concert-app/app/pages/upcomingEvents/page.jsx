"use client";
import { useState, useEffect } from 'react';
import { EventContext } from "../../Components/Data/EventProvider";
import useLocalStorage from 'use-local-storage';
import UpcomingEventsPageBody from '../../Components/Elements/UpcomingEventsPageBody';

async function fetchTicketPurchaseUrl (queryObject) {
  const querySearchParams = new URLSearchParams({
      apikey: 'O7mgiEMxAiHANcefL8qVSA6ab9XSrdZK',
      ...queryObject
  })

  try {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events?${querySearchParams}`)
    const data = await response.json();

    return data?._embedded?.events?.[0]?.url ?? ''
  } catch(e) {
    console.log('Issue with fetching ticket purchase url')
    return ''
  }
}


export default function UpcomingEventsPage() {

  const [keyword, setKeyword] = useLocalStorage('upcomingKeyword', '')
  const [dateTime, setDateTime] = useLocalStorage('upcomingDateTime', '')
  const [currentEventId, setCurrentEventId] = useLocalStorage('upcomingCurrentEventId', ''); // Default current event ID

  const [inputArea, setInputArea] = useState(false);
  const [performerName, setPerformerName] = useState("");
  const [venue, setVenue] = useState("");


  const [events, setEvents] = useLocalStorage("upcomingEvents", []);

  const addEvent = (newUpcomingEvent) => {
    (async () => {
      
      let queryObject = {}

      if (keyword) {
        queryObject.keyword = keyword
      }

      if (dateTime) {
        queryObject.startDateTime = `${dateTime}T00:00:00Z` 
      }

      const purchaseUrl = await fetchTicketPurchaseUrl(queryObject)

      const newUpcomingEventWithPurchaseUrl = {
        ...newUpcomingEvent,
        purchaseUrl,
      }
      setEvents([...events, newUpcomingEventWithPurchaseUrl]) 
    })()

    
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
      <UpcomingEventsPageBody />
    </EventContext.Provider>
  );
}


