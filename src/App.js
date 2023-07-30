import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Classes from './components/Classes/Classes';
import Home from './components/Home/Home';
import Class1 from './components/Class/Class1';
import Class2 from './components/Class/Class2';
import Class3 from './components/Class/Class3';
import Class4 from './components/Class/Class4';
import Class5 from './components/Class/Class5';
import Class6 from './components/Class/Class6';
import Class7 from './components/Class/Class7';
import Class8 from './components/Class/Class8';
import Exercises from './components/Exercises/Exercises';
import Projects from './components/Proyects/Projects';
import Contact from './components/Contact/Contact';
import Github from './components/Github/Github';
import ProfessionalCareer from './components/ProfessionalCareer/ProfessionalCareer';
import DigitalPortfolio from './components/DigitalPortfolio/DigitalPortfolio';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/0yKRrkDNEiFiv7K326tk" element={<Class1 />} />
        <Route path="/classes/2KLc4SOyBBSsZ3MvrydE" element={<Class2 />} />
        <Route path="/classes/Ok0Mm7iHM1fIw69Twf4o" element={<Class3 />} />
        <Route path="/classes/atVa7k6EyWDn7tZV7v1b" element={<Class4 />} />
        <Route path="/classes/gHRanIzZrKbdu1K8Qb4x" element={<Class5 />} />
        <Route path="/classes/id2wolQKcDk77qxdG24W" element={<Class6 />} />
        <Route path="/classes/kgTSxaASCl9vPGuCGC7t" element={<Class7 />} />
        <Route path="/classes/vxbP355jq6oSL1knWI6d" element={<Class8 />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/github" element={<Github/>} />
        <Route path="/professionalCarrer" element={<ProfessionalCareer/>}/>
        <Route path="/digitalPortfolio" element={<DigitalPortfolio/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
