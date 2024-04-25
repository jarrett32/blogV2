import React, { useState } from "react";
import Image from "next/image";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="slider-container">
        <button onClick={goToPrevious} aria-label="Previous image">
          &#8678;
        </button>
        <div className="image-container">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={500} // Set the desired size
            height={300}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <button onClick={goToNext} aria-label="Next image">
          &#8680;
        </button>

        <style jsx>{`
          .slider-container {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .image-container {
            width: 100%;
            max-width: 500px; // Set the maximum width
            margin: 0 20px;
          }
          button {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
          }
        `}</style>
      </div>
      <div className="pt-2 text-center">
        {currentIndex + 1} / {images.length}
      </div>
    </>
  );
};

export default ImageSlider;
