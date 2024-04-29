import Navbar from "./components/Navbar.jsx";
import './App.css'
import Intro from './components/Intro.jsx';
import Service from './components/Service.jsx'
import Experience from "./components/Experience.jsx";
import Works from "./components/Works.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Testimonial from "./components/Testimonial.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
    </div>
  );
}

export default App;
