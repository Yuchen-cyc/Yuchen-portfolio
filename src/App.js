import Navbar from "./components/Navbar.jsx";
import './App.css'
import Intro from './components/Intro.jsx';
import Service from './components/Service.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
    </div>
  );
}

export default App;
