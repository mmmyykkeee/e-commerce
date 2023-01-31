import React, { useState } from "react";
import Footer from "./Footer";
import "jquery-nice-select";

function Upload() {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const [description5, setDescription5] = useState("");
  const [description6, setDescription6] = useState("");
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
    <div className="d-flex"> 
      <form onSubmit={handleSubmit} className="mx-auto text-center mt-5 mb-5 form">
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

        
        <input
          className="mt-2 mx-1 border 3tn btn-s4ccess"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />

        <div className="d-flex flex-wrap container mx-auto">
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
        <div className="container">
          <div className="row d-flex">
            
            <input
              className="mt-2 mx-auto col-lg-4 col-md-6 col-sm-10 col-xs-10"
              type="text"
              placeholder="Enter a description for the image"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            
            <input
              className="mt-2 mx-auto col-lg-4 col-md-6 col-sm-10 col-xs-10"
              type="text"
              placeholder="Enter another description for the image"
              value={description2}
              onChange={(e) => setDescription2(e.target.value)}
              required
            />

            
            <input
              className="mt-2 mx-auto col-lg-4 col-md-6 col-sm-10 col-xs-10"
              type="text"
              placeholder="Enter another description for the image"
              value={description3}
              onChange={(e) => setDescription3(e.target.value)}
              required
            />

            
            <input
              className="mt-2 mx-auto col-lg-4 col-md-6 col-sm-10 col-xs-10"
              type="text"
              placeholder="Enter another description for the image"
              value={description4}
              onChange={(e) => setDescription4(e.target.value)}
              required
            />

            
            <input
              className="mt-2 mx-auto col-lg-4 col-md-6 col-sm-10 col-xs-10"
              type="text"
              placeholder="Enter another description for the image"
              value={description5}
              onChange={(e) => setDescription5(e.target.value)}
              required
            />

            
            <input
              className="mt-2 mx-auto col-lg-4 col-md-6 col-sm-10 col-xs-10"
              type="text"
              placeholder="Enter another description for the image"
              value={description6}
              onChange={(e) => setDescription6(e.target.value)}
              required
            />
            <div className="d-flex col-lg-12">
              
              <input
                className="mt-2 col-lg-3 col-md-4"
                type="text"
                placeholder="Allow us to get your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <button
                className="m-2 btn btn-success col-lg-2 col-md-4"
                type="button"
                onClick={getLocation}
              >
                <i className="bi bi-geo-alt-fill mx-1"></i>Get Location
              </button>
            </div>
          </div>
        </div>
<br/>
        <button className="btn btn-success" type="submit">
          <i className="bi bi-cloud-arrow-up-fill mx-1"></i> Upload
        </button>
        {error && <p>{error}</p>}
      </form>

    </div>
      <Footer />
    </div>
  );
}

export default Upload;


