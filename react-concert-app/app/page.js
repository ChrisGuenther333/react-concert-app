'use client'
import NavBar from "./Components/Page-Layout/NavBar.jsx";
import ConcertList from "./Components/Page-Layout/ConcertList.jsx";
import DisplayedConcert from "./Components/Page-Layout/DisplayedConcert.jsx";
import Footer from "./Components/Page-Layout/Footer.jsx";
import PastConcertProvider from "./Components/Data/PastConcertProvider.jsx";

export default function Home() {
  return (
    <PastConcertProvider>
      <div>
        <NavBar/>
        <div className="flex">
          <ConcertList/>
          <DisplayedConcert/>
        </div>
        <Footer/>
      </div>
    </PastConcertProvider>

  );
}

