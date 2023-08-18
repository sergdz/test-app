import 'reset-css'
import Header from '../header/Header';
import Slider from '../slider/Slider';
import AboutCompany from '../aboutCompany/AboutCompany';

import './App.scss';


function App() {
  return (
   <div className="app">
    <Header/>
    <Slider/>
    <AboutCompany/>
   </div>


  );
}

export default App;
