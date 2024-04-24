import { useContext } from "react";

import { PastEventContext } from "./PastEventProvider";

// Custom hook for accessing past events data from the context
export default function usePastEvents () {
  // Access past events data from the PastEventContext using the useContext hook
  const pastEventsData = useContext(PastEventContext)

  // Return the past events data obtained from the context
  return pastEventsData
}