import React, { useState, useEffect } from 'react';
import { BackgroundImages } from '../../data/BackgroundImages';
import { BackgroundContainerStyled } from './BackgroundSlider.styled';

const BackgroundSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random index different from the current one
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * BackgroundImages.length);
      } while (newIndex === currentImageIndex);

      setCurrentImageIndex(newIndex);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [currentImageIndex, BackgroundImages.length]);

  const currentImage = BackgroundImages[currentImageIndex].url; // Access the image URL from the wrapped object

  return <BackgroundContainerStyled backgroundImage={currentImage} />;
};

export default BackgroundSlider;
