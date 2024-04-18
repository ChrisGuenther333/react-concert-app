// import Logo from "../Elements/Logo/Logo.jsx"

import PastEventsBtn from "../Elements/PastEventsBtn.jsx";
import UpcomingEventsBtn from "../Elements/UpcomingEventsBtn.jsx";
import Image from "next/image";
import logo from "../Images/Logo/TicketLogo.png";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 flex h-16 items-center mx-auto px-8">
      <Image src={logo} alt="logo" />
      <span className="text-white ms-3">Event Tracker</span>
      <PastEventsBtn />
      <UpcomingEventsBtn />
    </nav>
  );
}
