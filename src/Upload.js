import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Upload() {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [description2, setDescription2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !description2) {
      setError("Please fill in both description fields");
    } else if (images.length === 0) {
      setError("Please select at least one image to upload");
    } else {
      // handle image upload and description submission here
    }
  };

  const handleFileChange = (e) => {
    const newImages = [...images, ...e.target.files];
    setImages(newImages);
  };

    return (
        <div>
        <form onSubmit={handleSubmit} className="mx-auto text-center mt-5 mb-5">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
          <input
            type="text"
            placeholder="Enter a description for the image"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter another description for the image"
            value={description2}
            onChange={(e) => setDescription2(e.target.value)}
            required
          />
          <button type="submit">Upload</button>
          {error && <p>{error}</p>}
            </form>
            <Footer />
      </div>
    );
}

export default Upload;
