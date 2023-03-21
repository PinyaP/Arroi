import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Slickfood from './Components/Slickfood';

import Home from './Pages/Home';
import SeeAll from './Pages/SeeAll';
import RestaurantDetail from './Pages/RestaurantDetail';


function App(){
  return (
    <>
      <Navbar/>
      <Slickfood/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/see-all" element={<SeeAll />} />
        <Route exact path="/detail" element={<RestaurantDetail />} />
      </Routes>
    </>
  )
}
export default App;