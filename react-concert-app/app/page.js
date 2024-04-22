"use client";
import NavBar from "./Components/Elements/NavBar.jsx";
import LeftPastEventList from "./Components/Page-Layout/LeftPastEventList.jsx";
import RightDisplayedPastEventDiv from "./Components/Elements/RightDisplayedPastEventDiv.jsx";
import Footer from "./Components/Elements/Footer.jsx";
import PastEventProvider from "./Components/Data/PastEventProvider.jsx";
import pastEvents from "./Components/Page-Layout/pastEvents.js";
import futureEvents from "./Components/Page-Layout/futureEvents.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default function Home() {
  return (
    <PastEventProvider>
      <div>
        <NavBar />
        <div className="flex">
          <LeftPastEventList />
          <RightDisplayedPastEventDiv />
        </div>
        <Footer />
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