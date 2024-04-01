import NavBar from "./Components/Page Layout/NavBar.jsx";
import ConcertList from "./Components/Page Layout/ConcertList.jsx";
import DisplayedConcert from "./Components/Page Layout/DisplayedConcert.jsx";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="flex">
        <ConcertList/>
        <DisplayedConcert/>
      </div>
    </div>
  );
}

