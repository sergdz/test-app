import 'reset-css'
import Header from '../header/Header';
import Slider from '../slider/Slider';
import AboutCompany from '../aboutCompany/AboutCompany';
import Portfolio from '../portfolio/Portfolio.js'
import FeedbackForm from '../feedbackForm/FeedbackForm';
import Footer from '../footer/Footer';
import Tasks from '../tasks/Tasks';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from '../pages/gallery'

import './App.scss';




function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path='/' element={
            <>
            <Slider />
            <AboutCompany />
            <Tasks />
            <Portfolio />
            <FeedbackForm />
            </>

          }>
          </Route>
          <Route path='/gallery' element={<Gallery/>} />
        </Routes>

        <Footer />

      </div>
    </Router>


  );
}

export default App;
