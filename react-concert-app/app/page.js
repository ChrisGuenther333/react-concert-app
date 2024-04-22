"use client";
import NavBar from "./Components/Elements/NavBar.jsx";
import LeftPastEventList from "./Components/Page-Layout/LeftPastEventList.jsx";
import RightDisplayedPastEventDiv from "./Components/Elements/RightDisplayedPastEventDiv.jsx";
import Footer from "./Components/Elements/Footer.jsx";
import PastEventProvider from "./Components/Data/PastEventProvider.jsx";

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
