import './App.css';
import Hero from './comonents/Hero';
import Navbar from './comonents/Navbar';
import Footer from './comonents/Footer';
import Service from './comonents/Service'
import Projects from './comonents/Projects';
import Contacts from './comonents/Contacts';
import About from './comonents/About'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
