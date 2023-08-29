import 'reset-css'
import Header from '../header/Header';
import Slider from '../slider/Slider';
import AboutCompany from '../aboutCompany/AboutCompany';
import Portfolio from '../portfolio/Portfolio.js'
import FeedbackForm from '../feedbackForm/FeedbackForm';
import Footer from '../footer/Footer';
import Tasks from '../tasks/Tasks';

import './App.scss';


function App() {
  return (
   <div className="app">
    <Header/>
    <Slider/>
    <AboutCompany/>
    <Tasks/>
    <Portfolio/>
    <FeedbackForm/>
    <Footer/>
   </div>


  );
}

export default App;
