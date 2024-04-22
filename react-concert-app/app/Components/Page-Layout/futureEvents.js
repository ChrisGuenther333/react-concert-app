"use client";
import NavBar from "../Elements/NavBar.jsx";
import Footer from "../Elements/Footer.jsx";
import PastEventProvider from "../Data/PastEventProvider.jsx";

export default function Home() {
  return (
    <PastEventProvider>
      <div>
        <NavBar />
        <div className="flex">
          <p>Just crying </p>
        </div>
        <Footer />
      </div>
    </PastEventProvider>
  );
}
