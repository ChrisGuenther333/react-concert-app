import AddConcertBtn from "../Elements/AddConcertBtn";
import SearchConcertInput from "../Elements/SearchConcertInput";
import PastConcerts from "../Elements/PastConcertsInfoDiv";

export default function ConcertList() {
  return (
    <div className="text-center w-2/3 h-svh bg-zinc-500 ">
      <div id="buttons" className=" my-5 flex justify-around">
        <AddConcertBtn />
        <SearchConcertInput />
      </div>
      <PastConcerts />
    </div>
  );
}
