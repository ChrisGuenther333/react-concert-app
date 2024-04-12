import AddConcertBtn from "../Elements/AddConcertBtn";
import SearchConcertInput from "../Elements/SearchConcertInput";
import events from "../Elements/PastConcerts";
import PastConcerts from "../Elements/PastConcerts";
// import { InputDivArea, InputProvider } from "../Elements/Inputs";

export default function ConcertList() {
  return (
    <div className="text-center w-1/2 h-svh bg-zinc-500">
      <h1>Concert List</h1>
      <div id="buttons" className=" mb-5">
        <AddConcertBtn />
        <SearchConcertInput />
      </div>
      <PastConcerts />
    </div>
  );
}
