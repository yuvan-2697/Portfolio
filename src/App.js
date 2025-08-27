// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./HomePage";
import Showreel from "./Showreel";
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
import './animations.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showreel" element={<Showreel />} />
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
      </Routes>
    </Router>
  );
}

export default App;
