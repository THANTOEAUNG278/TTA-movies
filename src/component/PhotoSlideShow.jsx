import React, { useState, useEffect } from 'react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const images = [
  'https://i.pinimg.com/originals/ba/58/f2/ba58f2caf6d6a8e7efd4febb590151fb.gif',
  'https://i.pinimg.com/originals/56/f9/1a/56f91a7381db0249739bca6861fb932a.gif',
  'https://i.pinimg.com/originals/41/fe/12/41fe12a8e789b671a15304fc3757eed5.gif',
  'https://i.pinimg.com/originals/5f/bd/66/5fbd66cd0b3e457f334ce677125cd897.gif',
];

const SlideShow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  return (
      <div className="w-[91%] h-[50vh] relative flex ml-16">
          <button className="absolute left-[-50px] top-0 h-[50vh] bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={prevSlide}><GrPrevious/></button>
          <div className="w-full h-full ml-16 "  style={{boxShadow: ' 0px 2px 2px 0px rgba(0, 0, 0, 0.5), inset 0px -3px 6px -2px rgba(0, 0, 0, 0.3)'}}>
              <img className="w-full h-full object-cover absolute rounded-md inset-0" src={images[currentImageIndex]} alt="Slideshow" />
          </div>
          <button className="absolute right-[-50px] h-[50vh] top-0 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextSlide}><GrNext/></button>
      </div>

  );
};

const PhotoSlideshow = () => {
  return (
    <div className="text-center">
      <SlideShow images={images} />
    </div>
  );
};

export default PhotoSlideshow;
