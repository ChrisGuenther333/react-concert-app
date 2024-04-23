import { useState, useEffect } from "react"

const useEventFetchRequest = (queryObject) => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        const querySearchParams = new URLSearchParams({
            apikey: 'O7mgiEMxAiHANcefL8qVSA6ab9XSrdZK',
            ...queryObject
        })
        fetch(`https://app.ticketmaster.com/discovery/v2/events?${querySearchParams}`, {
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
          data._embedded.events.forEach(event => {
            console.log(event.url)
          })
          setEvents(data?._embedded?.events ?? [])
        })
    }, [queryObject?.keyword])
    return events
}

export default useEventFetchRequest