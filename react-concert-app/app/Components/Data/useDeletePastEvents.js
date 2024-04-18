import { useContext } from "react";

import { PastEventContext } from "./PastEventProvider";

export default function useDeletePastEvent () {
  const pastEventsData = useContext(PastEventContext)

  return pastEventsData
}
