import LeftAddEventBtn from "../Elements/LeftAddEventBtn";
import SearchEventInput from "../Elements/SearchEventInput";
import PastEvents from "../Elements/LeftPastEventsInfoDiv";

export default function LeftPastEventList() {
  return (
    <div className="text-center w-2/3 h-svh bg-zinc-500 ">
      <div id="buttons" className=" my-5 flex justify-around">
        <LeftAddEventBtn />
        <SearchEventInput />
      </div>
      <PastEvents />
    </div>
  );
}