import Navbar from "./components/Navbar.jsx";
import './App.css'
import Intro from './components/Intro.jsx';
import Service from './components/Service.jsx'
import Experience from "./components/Experience.jsx";
import Works from "./components/Works.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
