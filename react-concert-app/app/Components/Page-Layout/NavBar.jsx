import Logo from "../Elements/Logo/Logo.jsx"

export default function NavBar() {
    return (
        <nav className="bg-gray-800 flex h-16 items-center mx-auto px-8">
            <div className="flex">
                <Logo/>
                <span className="text-white ms-3">Concert Tracker</span>
            </div>
            <button className="mx-20 p-3 hover:bg-gray-500">Past Concerts</button>
            <button className="p-3 hover:bg-gray-500">Upcoming Concerts</button>
        </nav>
    )
}