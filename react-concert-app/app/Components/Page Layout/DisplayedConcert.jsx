export default function DisplayedConcert() {
    return (
      <div className="w-2/3 h-svh text-center bg-stone-200 text-black">
        <h1>Displayed Concert</h1>
        <div className="flex justify-around">
          <h4>Artist/Band</h4>
          <h4>Venue</h4>
        </div>
        <h5>Date</h5>
      </div>
    );
  }