"use client";

import PastEventProvider from "../Data/EventProvider"
import EventProvider from "../Data/EventProvider"
import NavBar from "./NavBar"
import LeftPastEventList from "./LeftPastEventList"
import RightDisplayedPastEventDiv from "./RightDisplayedPastEventDiv"
import Footer from "./Footer"


export default function PageBody() {
    return (
        <EventProvider>
            <main>
            <div className="h-svh">
            <nav>
                <NavBar />
            </nav>
    
            <div className="flex h-full">
                <LeftPastEventList />
                <RightDisplayedPastEventDiv />
            </div>
            <footer>
                <Footer />
            </footer>
            </div>
            </main>
      </EventProvider>
    )
}