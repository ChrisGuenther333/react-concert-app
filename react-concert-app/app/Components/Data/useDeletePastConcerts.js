import { useContext } from "react";

import { PastConcertContext } from "./PastConcertProvider";

export default function useDeletePastConcerts () {
  const pastConcertsData = useContext(PastConcertContext)

  return pastConcertsData
}
