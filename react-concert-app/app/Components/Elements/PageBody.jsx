"use client";

import NavBar from "./NavBar"
import LeftPastEventList from "./LeftPastEventList"
import RightDisplayedPastEventDiv from "./RightDisplayedPastEventDiv"
import Footer from "./Footer"


export default function PageBody() {
    return (       
        <main>
            <div className="min-h-screen flex flex-col">
                <nav>
                    <NavBar />
                </nav>

                <div className="flex flex-grow">
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