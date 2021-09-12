import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from "./components/Footer";

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
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
