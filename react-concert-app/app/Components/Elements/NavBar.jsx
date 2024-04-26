import PastEventsBtn from "./PastEventsBtn.jsx";
import UpcomingEventsBtn from "./UpcomingEventsBtn.jsx";
import Image from "next/image";
import logo from "../Images/Logo/TicketLogo.png";
import Link from "next/link";

export default function NavBar() {
  return (
    <main>
      <nav className="bg-gray-800 flex h-16 items-center mx-auto px-8">
        <Link className="flex items-center decoration-0" href="/">
          <Image src={logo} alt="logo" />
        <span className="text-white ms-3 font-bold hover:text-slate-500">Event Tracker</span>
        </Link>

        <button>
          <Link href="/pages/pastEvents">
            <PastEventsBtn />
          </Link>
        </button>
        <button>
          <Link href="/pages/upcomingEvents">
            <UpcomingEventsBtn />
          </Link>
        </button>
      </nav>
    </main> );
}
