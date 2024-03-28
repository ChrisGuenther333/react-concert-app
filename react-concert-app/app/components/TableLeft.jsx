export function TableLeft() {
  return (
    <div className="bg-zinc-500">
      <div id="buttons" className="flex">
        <button id="add-concert">+ Add Concert</button>
        <button id="search-concert">Search</button>
      </div>
      <div className="flex">
        <h4>Date</h4>
        <h4>Artist/Band</h4>
        <h4>Venue</h4>
      </div>
    </div>
  );
}
