import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Profile from './components/Profile';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          "particles": {
              "number": {
                  "value": 50
              },
              "size": {
                  "value": 3
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": false,
                      "mode": "repulse"
                  }
              }
          }
      }} />
      <Navbar />
      <Header />
      <Profile />
      <Services />
      <Portfolio />
    </>
  );
}

export default App;
