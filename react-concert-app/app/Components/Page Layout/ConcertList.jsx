import AddConcertBtn from "../Elements/Buttons";
import SearchConcertInput from "../Elements/Inputs";

export default function ConcertList() {
  return (
    <div className="text-center w-1/3 h-svh bg-zinc-500">
      <h1>Concert List</h1>
      <div id="buttons" className="flex justify-around mb-5">
        <AddConcertBtn />
        <SearchConcertInput />
      </div>
      <div className="flex justify-around border py-1">
        <h4>Date</h4>
        <h4>Artist/Band</h4>
        <h4>Venue</h4>
      </div>
      <div className="flex justify-around border py-1">
        <h4>Date</h4>
        <h4>Artist/Band</h4>
        <h4>Venue</h4>
      </div>
      <div className="flex justify-around border py-1">
        <h4>Date</h4>
        <h4>Artist/Band</h4>
        <h4>Venue</h4>
      </div>
    </div>
  );
}
