"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../app/Components/Images/Logo/TicketLogo.png";
import PastEventsBtn from "../app/Components/Elements/PastEventsBtn.jsx";
import UpcomingEventsBtn from "../app/Components/Elements/UpcomingEventsBtn.jsx";
import NavBar from "./Components/Elements/NavBar.jsx";
import Footer from "./Components/Elements/Footer.jsx";

function Home() {
  return (
    <main>
      <NavBar/>
      <h1>Welcome to Event Tracker</h1>
      <Footer/>
    </main>
  );
}

export default Home;
