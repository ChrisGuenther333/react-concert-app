import AddConcertBtn from "../Elements/AddConcertBtn";
import SearchConcertInput from "../Elements/SearchConcertInput";
import events from "../Elements/PastConcerts";
import PastConcerts from "../Elements/PastConcerts";
// import { InputDivArea, InputProvider } from "../Elements/Inputs";

export default function ConcertList() {
  return (
    <div className="text-center w-1/2 h-svh bg-zinc-500 ">
      <div id="buttons" className=" my-5 flex justify-around">
        <AddConcertBtn />
        <SearchConcertInput />
      </div>
      <PastConcerts />
    </div>
  );
}
