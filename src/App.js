import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import React from 'react';

/**
 * Render a JSX Element to the website
 * @return {JSX.Element} a HTML file.
 */
function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div >
        <NavBar/>
        <Routes>
          <Route path="/" element={<Banner/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
