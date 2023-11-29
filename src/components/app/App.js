import 'reset-css';
import Header from '../header/Header';
import Slider from '../slider/Slider';
import AboutCompany from '../aboutCompany/AboutCompany';
import Portfolio from '../portfolio/Portfolio.js';
import FeedbackForm from '../feedbackForm/FeedbackForm';
import Footer from '../footer/Footer';
import Tasks from '../tasks/Tasks';

import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Gallery from '../pages/gallery';
import './App.scss';
import SliderSinglePage from '../sliderSinglePage/SliderSinglePage';
import { useEffect, useState } from 'react';
import Contact from '../contact/Contact';
import AboutCompanyPage from '../aboutCompanyPage/AboutCompanyPage';

function App() {
  const [activeSlider, setActiveSlider] = useState();

  const setSlide = (slide) => {
    setActiveSlider(slide);
    localStorage.setItem('activeSlider', JSON.stringify(slide));
  };

  let id
  if (activeSlider) {
    id = activeSlider.id
  } else {
    id = JSON.parse(localStorage.getItem('activeSlider')).id
    console.log(id)
  }
  useEffect(() => {

    console.log(id);

  }, [id])



  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider setSlide={setSlide} />
                <AboutCompany/>
                <Tasks />
                <Portfolio />
                <FeedbackForm />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-company" element={<AboutCompanyPage />} />
          <Route
            path={`slide-${id}`}
            element={<SliderSinglePage activeSlider={activeSlider} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
