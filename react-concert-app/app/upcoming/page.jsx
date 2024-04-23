"use client";
import { useEffect } from "react";
import NavBar from "../Components/Elements/NavBar.jsx";
import LeftPastEventList from "../Components/Page-Layout/LeftPastEventList.jsx";
import RightDisplayedPastEventDiv from "../Components/Elements/RightDisplayedPastEventDiv.jsx";
import Footer from "../Components/Elements/Footer.jsx";
import PastEventProvider from "../Components/Data/PastEventProvider.jsx";
import pastEvents from "../Components/Page-Layout/pastEvents.js";
import futureEvents from "../Components/Page-Layout/futureEvents.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useEventFetchRequest from "../Components/Data/useEventFetchRequest.jsx";
import UpcomingEventProvider from "../Components/Data/UpcomingEventProvider.jsx";
import UpcomingEvents from "../Components/Elements/UpcomingEvents.jsx";

export default function Home() {

  return (
    <UpcomingEventProvider>
        <div>
            <nav>
            <NavBar />
            </nav>
        
            <div 
            className="flex h-screen"
            >
            <UpcomingEvents/>
            </div>
            <footer>
            <Footer />
            </footer>
        </div>
    </UpcomingEventProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "past events",
        element: <pastEvents />,
      },
      {
        path: "future events",
        element: <futureEvents />,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider
//     router={router}
//     fallbackElement={<BigSpinner />}
//   />
// );
