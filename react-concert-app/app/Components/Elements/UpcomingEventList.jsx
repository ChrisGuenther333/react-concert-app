import LeftAddEventBtn from "./LeftAddEventBtn";
// import SearchEventInput from "./SearchEventInput";
import PastEvents from "./LeftPastEventsInfoDiv";

export default function UpcomingEventList() {
  return (
    <div className="text-center w-full bg-zinc-500">
      <div id="buttons" className=" my-5 flex justify-around">
        <LeftAddEventBtn />
        {/* <SearchEventInput /> */}
      </div>
      <PastEvents />
    </div>
  );
}
