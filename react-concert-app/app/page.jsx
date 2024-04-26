import NavBar from "./Components/Elements/NavBar.jsx";
import Footer from "./Components/Elements/Footer.jsx";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex items-center justify-center bg-slate-500">
        <h1 className="text-4xl font-extrabold text-slate-800">Welcome to Event Tracker</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
