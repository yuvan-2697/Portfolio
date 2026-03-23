// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./HomePage";


import WebSeries from './WebSeries';
import Movies from './Movies';
import Commercials from './Commercials';
import About from './About';
import NonCinema from "./NonCinema";

import Aravind from "./events/Aravind";  // ← import Aravind page
import Videos from "./music/Videos";
import './animations.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/webseries" element={<WebSeries />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/commercials" element={<Commercials />} />
        <Route path="/about" element={<About />} />
        <Route path="/non-cinema" element={<NonCinema />} />
        
        

        {/* Events */}
        <Route path="/events/aravind" element={<Aravind />} />  {/* ← Aravind route */}

        {/* Music */}
        <Route path="/music/videos" element={<Videos />} />  {/* ← Videos route */}
      </Routes>
    </Router>
  );
}

export default App;
