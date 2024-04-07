// import { useState } from "react";

export default function AddConcertBtn() {
  // const [input, showInput] = useState(0);

  // const active = () => {};

  return (
    <button
      id="add-concert"
      className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      + Add Concert
    </button>
  );
}
