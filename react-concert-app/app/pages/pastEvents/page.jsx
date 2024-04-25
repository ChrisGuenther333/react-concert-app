"use client";
import NavBar from "../../Components/Elements/NavBar.jsx";
import LeftPastEventList from "../../Components/Elements/LeftPastEventList.jsx";
import RightDisplayedPastEventDiv from "../../Components/Elements/RightDisplayedPastEventDiv.jsx";
import Footer from "../../Components/Elements/Footer.jsx";
import PastEventProvider from "../../Components/Data/PastEventProvider.jsx";


export default function pastEvents() {
  return (
    <PastEventProvider>
      <div className="min-h-screen flex flex-col">
        <nav>
          <NavBar />
        </nav>

        <div className="flex flex-grow">
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

