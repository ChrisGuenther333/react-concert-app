import { useContext } from "react";

import { PastConcertContext } from "./PastConcertProvider";

export default function usePastConcerts () {
  const pastConcertsData = useContext(PastConcertContext)

  return pastConcertsData
}
