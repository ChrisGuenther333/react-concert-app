const getRandomId = () => Math.floor(Math.random() * 10000);

export const events = JSON.parse(localStorage.getItem("events")) || 
[
  {
    id: getRandomId(),
    date: "4/1/2024",
    type: "Music",
    name: "Cigarettes After Sex",
    venue: "Delta Center, SLC, UT",
  },
  {
    id: getRandomId(),
    date: "4/10/2024",
    type: "Sport",
    name: "Real Salt Lake",
    venue: "America First Field, Sandy, UT",
  },
  {
    id: getRandomId(),
    date: "4/7/2024",
    type: "Music",
    name: "Olivia Rodrigo",
    venue: "Allegiant Stadium, Las Vegas, NV",
  },
];

export const currentEventId =
  JSON.parse(localStorage.getItem("currentEventId") || null) ??
  events?.[0]?.id ??
  "";