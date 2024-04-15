import Logo from "../Elements/Logo/Logo.jsx"
import PastConcertsBtn from "../Elements/PastConcertsBtn.jsx"
import UpcomingConcertsBtn from "../Elements/UpcomingConcertsBtn.jsx"

export default function NavBar() {
    return (
        <nav className="bg-gray-800 flex h-16 items-center mx-auto px-8">
            <div className="flex">
                <Logo/>
                <span className="text-white ms-3">Concert Tracker</span>
            </div>
            <PastConcertsBtn/>
            <UpcomingConcertsBtn/>
        </nav>
    )
}