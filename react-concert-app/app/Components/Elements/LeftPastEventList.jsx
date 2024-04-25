import LeftAddEventBtn from "./LeftAddEventBtn";
import SearchEventInput from "./SearchEventInput";
import PastEvents from "./LeftPastEventsInfoDiv";

export default function LeftPastEventList() {
  return (
    <div className="text-center w-3/5 bg-zinc-500">
      <div id="buttons" className=" my-5 flex justify-around">
        <LeftAddEventBtn />
        <SearchEventInput />
      </div>
      <PastEvents />
    </div>
  );
}
