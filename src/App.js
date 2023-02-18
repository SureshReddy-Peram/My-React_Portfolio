import {Routes, Route} from 'react-router-dom';
import Home from './containers/home/Home';
import About from './containers/about/About';
import Contact from './containers/contact/Contact';
import Portfolio from './containers/portfolio/Portfolio';
import Resume from './containers/resume/Resume';
import Skills from './containers/skills/Skills';
import './App.scss';
import Navbar from './components/navBar/Navbar';


function App() {
  return (
    <div className="App">
      {/* 1. tsParticles */}

      {/* 2. Navigation bar */}
          <Navbar />
      {/* 3. Main page content */}

      {/* a.Routing b/w components */}
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/resume" element={<Resume/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />        
      </Routes>

    </div>
  );
}
export default App;
