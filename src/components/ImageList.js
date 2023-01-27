import React, { useState } from "react";

const ImageList = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = props.images;
  const imageList = images.slice(currentIndex, currentIndex + 4);

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const handleNextClick = () => {
    if (currentIndex + 4 < images.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  return (
    <div className="featured__filter">
      <div className="featured__item">
        {imageList.map((image, index) => (
          <div key={index} className="featured__item__pic set-bg">
            <img src={image.src} alt={image.description} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default ImageList;
