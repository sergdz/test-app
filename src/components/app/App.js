import 'reset-css'
import Header from '../header/Header';
import Slider from '../slider/Slider';
import AboutCompany from '../aboutCompany/AboutCompany';
import Portfolio from '../portfolio/Portfolio.js'
import FeedbackForm from '../feedbackForm/FeedbackForm';

import './App.scss';


function App() {
  return (
   <div className="app">
    <Header/>
    <Slider/>
    <AboutCompany/>
    <Portfolio/>
    <FeedbackForm/>
   </div>


  );
}

export default App;
