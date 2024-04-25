import Navbar from "./components/Navbar.jsx";
import './App.css'
import Intro from './components/Intro.jsx';
import Service from './components/Service.jsx'
import Experience from "./components/Experience.jsx";
import Works from "./components/Works.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <Works/>
    </div>
  );
}

export default App;
