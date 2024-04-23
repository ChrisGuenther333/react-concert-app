"use client";
import NavBar from "../../Components/Elements/NavBar.jsx";
import Footer from "../../Components/Elements/Footer.jsx";
import PastEventProvider from "../../Components/Data/PastEventProvider.jsx";

export default function futureEvents() {
  return (
    <PastEventProvider>
      <main>
        <NavBar />
        <div className="flex">
          <p>Just crying </p>
        </div>
        <Footer />
      </main>
    </PastEventProvider>
  );
}
