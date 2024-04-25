'use client'

import { createContext, useEffect, useState } from "react"
import {
    currentEventId as testCurrentEventId,
    events as testEvents,
} from "./testData";
import useEvents from "./useEvents";
  
export const EventContext = createContext()

export default function EventProvider({ children }) {

    const value = useEvents()

    return (
        <EventContext.Provider value={value}>
            {children}
        </EventContext.Provider>
    )
}