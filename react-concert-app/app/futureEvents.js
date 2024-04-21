"use client";
import NavBar from "./Components/Elements/NavBar.jsx";
import LeftPastEventList from "./Components/Page-Layout/LeftPastEventList.jsx";
import RightDisplayedPastEventDiv from "./Components/Elements/RightDisplayedPastEventDiv.jsx";
import Footer from "./Components/Elements/Footer.jsx";
import PastEventProvider from "./Components/Data/PastEventProvider.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <PastEventProvider>
      <div>
        <NavBar />
        <div className="flex">
          <p>Just crying </p>
        </div>
        <Footer />
      </div>
    </PastEventProvider>
  );
}
