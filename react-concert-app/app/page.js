'use client'
import NavBar from "./Components/Page-Layout/NavBar.jsx";
import EventList from "./Components/Page-Layout/EventList.jsx";
import DisplayedEvent from "./Components/Page-Layout/DisplayedEvent.jsx";
import Footer from "./Components/Page-Layout/Footer.jsx";
import PastEventProvider from "./Components/Data/PastEventProvider.jsx";

export default function Home() {
  return (
    <PastEventProvider>
      <div>
        <NavBar/>
        <div className="flex">
          <EventList/>
          <DisplayedEvent/>
        </div>
        <Footer/>
      </div>
    </PastEventProvider>

  );
}

