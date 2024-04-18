import { useContext } from "react";

import { PastEventContext } from "./PastEventProvider";

export default function usePastEvents () {
  const pastEventsData = useContext(PastEventContext)

  return pastEventsData
}
