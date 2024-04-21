import { events } from "../Data/testData";
import usePastEvents from "../Data/usePastEvents";

export default function RightDisplayedPastEventDiv() {
  // Define state variables to hold your data using the custom hook
  const {
    events, // Array of past events
    setEvents, // Function to update past events data

    currentEventId, // ID of the currently selected event
    setCurrentEventId, // Function to update the currently selected event ID
  } = usePastEvents(); // Destructure the values returned from the custom hook

  // Function to handle click on an event
  function handleEventClick(id) {
    // Update the current event ID when an event is clicked
    setCurrentEventId(id);
  }

  // Function to render event details
  function renderEventDetails(event) {
    // Render details only if the current event ID matches the event's ID
    if (currentEventId === event.id) {
      return (
        <div>
          <p>{event.date}</p>
          <p>{event.type}</p>
          <p>{event.name}</p>
          <p>{event.venue}</p>
        </div>
      );
    }
    // If currentEventId doesn't match the event's ID, return null
    return null;
  }

  return (
    <div>
      {/* Render event details */}
      {events.map((event) => renderEventDetails(event))}
    </div>
  );
}
