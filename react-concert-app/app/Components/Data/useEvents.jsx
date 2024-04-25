'use client'
import { useState, useEffect } from 'react'
import { usePathname } from "next/navigation"
import usePastEvents from "./usePastEvents"
import useUpcomingEvents from "./useUpcomingEvents"

export default function useEvents () {
    const pathname = usePathname()
    const isUpcomingEvent = false
    
    const pastEventsData = usePastEvents()
    const upcomingEventsData = useUpcomingEvents()

    const [events, setEvents] = useState([])

    const [currentEventId, setCurrentEventId] = useState('')

    useEffect(() => {
        setEvents(isUpcomingEvent ? upcomingEventsData.events : pastEventsData.events)
    }, [pathname])

    useEffect(() => {
        setCurrentEventId(isUpcomingEvent ? upcomingEventsData.currentEventId : pastEventsData.currentEventId)
    }, [pathname])

    return {
        // Current state
        events, // Array of past concerts
        currentEventId, // ID of the currently selected event
    
        // State mutators or functions that change the state
        setEvents, // Function to update past concerts data
        setCurrentEventId, // Function to update the currently selected event ID
      };
}