// Function to generate a random ID for events
const getRandomId = () => Math.floor(Math.random() * 10000);

// Retrieve events from localStorage, or use default events if localStorage is empty
export const events = JSON.parse(localStorage.getItem("events") ?? '[]') || [
  // Default events
  {
    id: getRandomId(),
    dateTime: "2024-04-01",
    type: "Music",
    name: "Cigarettes After Sex",
    venue: "Delta Center, SLC, UT",
    rating: null,
  },
  {
    id: getRandomId(),
    dateTime: "2024-04-10",
    type: "Sports",
    name: "Real Salt Lake",
    venue: "America First Field, Sandy, UT",
    rating: null,

  },
  {
    id: getRandomId(),
    dateTime: "2024-04-07",
    type: "Music",
    name: "Olivia Rodrigo",
    venue: "Allegiant Stadium, Las Vegas, NV",
    rating: null,
  },
];

// Retrieve currentEventId from localStorage, or set it to the first event's ID if localStorage is empty
export const currentEventId =events?.[0]?.id

