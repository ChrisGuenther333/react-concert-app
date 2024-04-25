"use client";

import NavBar from "./NavBar"
import LeftPastEventList from "./LeftPastEventList"
import RightDisplayedPastEventDiv from "./RightDisplayedPastEventDiv"
import Footer from "./Footer"


export default function PageBody() {
    return (
       
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
     
    )
}