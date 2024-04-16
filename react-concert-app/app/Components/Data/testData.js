// Function to generate a random ID for events
const getRandomId = () => Math.floor(Math.random() * 10000);

// Retrieve events from localStorage, or use default events if localStorage is empty
export const events = JSON.parse(localStorage.getItem("events")) || [
  // Default events
  {
    id: getRandomId(),
    date: "2024-04-01",
    type: "Music",
    name: "Cigarettes After Sex",
    venue: "Delta Center, SLC, UT",
  },
  {
    id: getRandomId(),
    date: "2024-04-10",
    type: "Sports",
    name: "Real Salt Lake",
    venue: "America First Field, Sandy, UT",
  },
  {
    id: getRandomId(),
    date: "2024-04-07",
    type: "Music",
    name: "Olivia Rodrigo",
    venue: "Allegiant Stadium, Las Vegas, NV",
  },
];

// Retrieve currentEventId from localStorage, or set it to the first event's ID if localStorage is empty
export const currentEventId =
  JSON.parse(localStorage.getItem("currentEventId") || null) ?? // Try to parse currentEventId from localStorage
  events?.[0]?.id ?? // If currentEventId is not found in localStorage, use the ID of the first event
  ""; // If there are no events, set currentEventId to an empty string
