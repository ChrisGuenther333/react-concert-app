import React, { useState } from "react";

const BandPhotoInput = () => {
  const [bandPhoto, setBandPhoto] = useState(null);

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setBandPhoto(file); // Set the band photo state to the selected file
  };

  // Function to handle form submission (you can submit the photo to a server here)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bandPhoto) {
      const reader = new FileReader();

      // Define a callback function to be executed when the file is read
      reader.onload = (event) => {
        // Get the data URL of the uploaded photo
        const photoDataURL = event.target.result;

        // Store the data URL in local storage
        localStorage.setItem("bandPhoto", photoDataURL);

        console.log("Band photo uploaded to local storage:", photoDataURL);
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(bandPhoto);
    } else {
      console.log("No band photo selected");
    }
  };

  return (
    <div>
      <h2>Upload Band Photo</h2>
      <form onSubmit={handleSubmit}>
        {/* File input for band photo */}
        <input
          type="file"
          accept="image/*" // Accept only image files
          onChange={handleFileChange}
        />
        {/* Submit button */}
        <button type="submit">Upload Photo</button>
      </form>
      {/* Display preview of selected photo */}
      {bandPhoto && (
        <div>
          <h3>Preview:</h3>
          <img
            src={URL.createObjectURL(bandPhoto)} // Create a temporary URL for the selected image
            alt="Band"
            style={{ maxWidth: "300px" }}
          />
        </div>
      )}
    </div>
  );
};

export default BandPhotoInput;
