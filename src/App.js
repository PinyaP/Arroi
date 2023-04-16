import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import SeeAll from './Pages/SeeAll';
import RestaurantDetail from './Pages/RestaurantDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/see-all/:category" element={<SeeAll />} />
        <Route exact path="/detail/:id" element={<RestaurantDetail />} />
      </Routes>
    </>
  );
}
export default App;
