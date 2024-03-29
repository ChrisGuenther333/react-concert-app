export default function ConcertList() {
  return (
    <div className="text-center w-1/3 h-svh bg-zinc-500">
      <h1>Concert List</h1>
      <div id="buttons" className="flex justify-around mb-5">
        <button id="add-concert" className="p-2 bg-white">+ Add Concert</button>
        <button id="search-concert" className="p-2 bg-white">Search</button>
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