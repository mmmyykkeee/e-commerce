import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "jquery-nice-select";

function Upload() {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [description2, setDescription2] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !description2) {
      setError("Please fill in both description fields");
    } else if (images.length === 0) {
      setError("Please select at least one image to upload");
    } else if (!category) {
      setError("Please select a category for the image");
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation(position.coords);
        // handle image upload, description submission, category and location here
      });
    }
  };
  const handleCancel = (img) => {
    const newImages = images.filter(image => image !== img);
    setImages(newImages);
  };
const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position);
      });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };
  const handleFileChange = (e) => {
    const newImages = [...images, ...e.target.files];
    setImages(newImages);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto text-center mt-5 mb-5">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {" "}
          <option value="">Select a category</option>
          <option value="Animals">Animals</option>
          <option value="Animal Products">Animal Products</option>
          <option value="Farm Products">Farm Products</option>
        </select>
        <br />
        <input
          className="mt-2 border btn btn-success"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        <br />
        <div className="d-flex flex-wrap container">
          {images.map((img, index) => (
            <div key={index} className="m-2">
              <div className="buttons">
                <img
                  src={URL.createObjectURL(img)}
                  alt={img.name}
                  width="100"
                  height="100"
                />
                <button
                  onClick={() => handleCancel(img)}
                  className="btn btn-danger btn-dangers py-1"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>

        <input
          className="mt-2"
          type="text"
          placeholder="Enter a description for the image"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <input
          className="mt-2"
          type="text"
          placeholder="Enter another description for the image"
          value={description2}
          onChange={(e) => setDescription2(e.target.value)}
          required
        />
        <br />
        <input
          className="mt-2"
          type="text"
          placeholder="Allow us to get your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button
          className="m-2 btn btn-success"
          type="button"
          onClick={getLocation}
        >
          <i className="bi bi-geo-alt-fill mx-1"></i>Get Location
        </button>
        <br />
        <button className="btn btn-success" type="submit">
          <i className="bi bi-cloud-arrow-up-fill mx-1"></i> Upload
        </button>
        {error && <p>{error}</p>}
      </form>

      <Footer />
    </div>
  );
}

export default Upload;


