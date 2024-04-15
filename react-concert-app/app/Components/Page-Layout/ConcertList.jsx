import AddConcertBtn from "../Elements/AddConcertBtn";
import SearchConcertInput from "../Elements/SearchConcertInput";
// import { InputDivArea, InputProvider } from "../Elements/Inputs";

export default function ConcertList() {
  return (
    <div className="text-center w-1/2 h-svh bg-zinc-500">
      <div id="buttons" className=" mb-5">
        <AddConcertBtn />
        <SearchConcertInput />
      </div>
      {/* <InputProvider>
        <InputDivArea />
      </InputProvider> */}
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
