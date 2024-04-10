export default function SearchConcertInput() {
  return (
    <input
      type="text"
      id="search-concert"
      className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 m-2"
      placeholder="Search..."
    />
  );
}