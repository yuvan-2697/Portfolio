// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./HomePage";
import Casa from "./commercial/Casa";
import Nalli from "./commercial/Nalli";
import Nac from "./commercial/Nac";
import Dug from "./commercial/Dug";
import Nallihundred from "./commercial/Nallihundred";
import WebSeries from './WebSeries';
import Movies from './Movies';
import Commercials from './Commercials';
import About from './About';
import Kaiyum from './Kaiyum';
import Bhk from './Bhk';
import Memeboys from './Memeboys';
import Five from './Five';
import Luckyman from './Luckyman';
import Boo from './Boo';
import Kali from './Kali';
import Mission from './Mission';
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
        <Route path="/kaiyum" element={<Kaiyum />} />
        <Route path="/bhk" element={<Bhk />} />
        <Route path="/memeboys" element={<Memeboys />} />
        <Route path="/five" element={<Five />} />
        <Route path="/luckyman" element={<Luckyman />} />
        <Route path="/boo" element={<Boo />} />
        <Route path="/kali" element={<Kali />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/commercial/casa" element={<Casa />} />
        <Route path="/commercial/nalli" element={<Nalli />} />
        <Route path="/commercial/nallihundred" element={<Nallihundred />} />
        <Route path="/commercial/nac" element={<Nac />} />
        <Route path="/commercial/dug" element={<Dug />} />

        {/* Events */}
        <Route path="/events/aravind" element={<Aravind />} />  {/* ← Aravind route */}

        {/* Music */}
        <Route path="/music/videos" element={<Videos />} />  {/* ← Videos route */}
      </Routes>
    </Router>
  );
}

export default App;
