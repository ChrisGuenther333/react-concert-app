import AddEventBtn from "../Elements/AddEventBtn";
import SearchEventInput from "../Elements/SearchEventInput";
import PastEvents from "../Elements/PastEventsInfoDiv";

export default function EventList() {
  return (
    <div className="text-center w-2/3 h-svh bg-zinc-500 ">
      <div id="buttons" className=" my-5 flex justify-around">
        <AddEventBtn />
        <SearchEventInput />
      </div>
      <PastEvents />
    </div>
  );
}
