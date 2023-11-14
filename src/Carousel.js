import React, { useState } from 'react';
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['./images/img1.png', './images/img0.jpg', 'img4.png'];
  const handlePreviousClick = () => {
    setActiveIndex((activeIndex - 1 + 3) % 3);
  };
  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % 3);
  };
  return (
    <div className="carousel">
      <img
        src={images[activeIndex]}
        alt={`Image ${activeIndex}`}
        className="carousel-item active"
      />
      <button className="carousel-button previous" onClick={handlePreviousClick}>
        Previous
      </button>
      <button className="carousel-button next" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
