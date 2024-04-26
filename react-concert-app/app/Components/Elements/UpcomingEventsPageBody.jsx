"use client";

import NavBar from "./NavBar"
import LeftPastEventList from "./LeftPastEventList"
import UpcomingEventList from "./UpcomingEventList";
import Footer from "./Footer"


export default function UpcomingEventsPageBody() {
    return (       
        <main>
            <div className="min-h-screen flex flex-col">
                <nav>
                    <NavBar />
                </nav>

                <div className="flex flex-grow">
                    <UpcomingEventList />
                    {/* <LeftPastEventList/> */}
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </main>
     
    )
}