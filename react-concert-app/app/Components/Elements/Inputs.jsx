// app/Components/Elements/Inputs.jsx
// import { createContext, useContext, useState } from "react";

// // Create a context
// const InputContext = createContext();

// // Define a provider
// export const InputProvider = ({ children }) => {
//   const [inputData, setInputData] = useState({
//     artistName: "",
//     concertDate: "",
//     concertVenue: "",
//   });

//   return (
//     <InputContext.Provider value={{ inputData, setInputData }}>
//       {children}
//     </InputContext.Provider>
//   );
// };

// // Input components using the context
// export const InputDivArea = () => {
  
//   return (
//     <div>
//       <InputArtistName />
//       <InputConcertDate />
//       <InputConcertVenue />
//     </div>
//   );
// };

// export const InputArtistName = () => {
//   const { inputData, setInputData } = useContext(InputContext);

//   return (
//     <input
//       type="text"
//       value={inputData.artistName}
//       onChange={(e) =>
//         setInputData({ ...inputData, artistName: e.target.value })
//       }
//       placeholder="Artist/Band"
//     />
//   );
// };

// export const InputConcertDate = () => {
//   const { inputData, setInputData } = useContext(InputContext);

//   return (
//     <input
//       type="date"
//       value={inputData.concertDate}
//       onChange={(e) =>
//         setInputData({ ...inputData, concertDate: e.target.value })
//       }
//       placeholder="Date"
//     />
//   );
// };

// export const InputConcertVenue = () => {
//   const { inputData, setInputData } = useContext(InputContext);

//   return (
//     <input
//       type="text"
//       value={inputData.concertVenue}
//       onChange={(e) =>
//         setInputData({ ...inputData, concertVenue: e.target.value })
//       }
//       placeholder="Venue"
//     />
//   );
// };

export default function SearchConcertInput() {
  return (
    <input
      type="text"
      id="search-concert"
      className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      placeholder="Search..."
    />
  );
}