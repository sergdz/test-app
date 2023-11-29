import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './sliderSinglePage.scss'

const SliderSinglePage = () => {
  const { sliderId } = useParams();
  const [activeSlider, setActiveSlider] = useState();

  useEffect(() => {
    const storedSlider = localStorage.getItem('activeSlider');
    if (storedSlider) {
      setActiveSlider(JSON.parse(storedSlider));
    }
  }, []);

  if (!activeSlider) {
    return <div>Loading...</div>;
  }

  const { original } = activeSlider.src;
  const { alt, photographer } = activeSlider;

  return (
    <div className="slider-single-page">
      <div className="slider-single-page__image-wrapper">
        <img src={original} alt="Product Image" className="slider-single-page__image-wrapper__image" />
      </div>
      <div className="slider-single-page__info">
        <h2 className="slider-single-page__title">{alt}</h2>
        <p className="slider-single-page__description">{photographer}</p>
      </div>
    </div>
  );
};

export default SliderSinglePage;
