"use client";
import { useEffect } from "react";
import NavBar from "./Components/Elements/NavBar.jsx";
import LeftPastEventList from "./Components/Page-Layout/LeftPastEventList.jsx";
import RightDisplayedPastEventDiv from "./Components/Elements/RightDisplayedPastEventDiv.jsx";
import Footer from "./Components/Elements/Footer.jsx";
import PastEventProvider from "./Components/Data/PastEventProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


export default function Home() {

  return (
    <PastEventProvider>
      <div>
        <nav>
          <NavBar />
        </nav>

        <div 
        className="flex h-screen"
        >
          <LeftPastEventList />
          <RightDisplayedPastEventDiv />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </PastEventProvider>
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
        path: "upcoming events",
        element: <upcomingEvents />,
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
