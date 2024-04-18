// import Logo from "../Elements/Logo/Logo.jsx"

import PastConcertsBtn from "../Elements/PastConcertsBtn.jsx";
import UpcomingConcertsBtn from "../Elements/UpcomingConcertsBtn.jsx";
import Image from "next/image";
import logo from "../Images/Logo/TicketLogo.png";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 flex h-16 items-center mx-auto px-8">
      <Image src={logo} alt="logo" />
      <span className="text-white ms-3">Concert Tracker</span>
      <PastConcertsBtn />
      <UpcomingConcertsBtn />
    </nav>
  );
}
