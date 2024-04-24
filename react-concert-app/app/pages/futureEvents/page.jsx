"use client";
import NavBar from "../../Components/Elements/NavBar.jsx";
import LeftPastEventList from "../../Components/Elements/LeftPastEventList.jsx";
import RightDisplayedPastEventDiv from "../../Components/Elements/RightDisplayedPastEventDiv.jsx";
import Footer from "../../Components/Elements/Footer.jsx";
import UpcomingEvents from "../../Components/Elements/UpcomingEvents.jsx";
import UpcomingEventProvider from "../../Components/Data/UpcomingEventProvider.jsx";




export default function Home() {

  return (
    <main>
      <UpcomingEventProvider>
        <div className="h-svh">
          <nav>
            <NavBar />
          </nav>

          <div className="flex h-full">
            {/* <LeftPastEventList />
            <RightDisplayedPastEventDiv /> */}
            <UpcomingEvents/>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </UpcomingEventProvider>
    </main>
  );
}


