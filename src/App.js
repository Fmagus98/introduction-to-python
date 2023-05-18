import React from 'react';
import './App.css';
import Classes from './components/Classes/Classes';
import Footer from './components/Footer/Footer';
import Index from './components/Index/Index';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clase1 from './components/Clases/Clase1';
import Clase2 from './components/Clases/Clase2';
import Clase3 from './components/Clases/Clase3';
import Clase4 from './components/Clases/Clase4';
import Clase5 from './components/Clases/Clase5';
import Clase6 from './components/Clases/Clase6';
import Clase7 from './components/Clases/Clase7';
import Clase8 from './components/Clases/Clase8';
import Exercises from './components/Exercises/Exercises';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/0yKRrkDNEiFiv7K326tk" element={<Clase1/>} />
        <Route path="/classes/2KLc4SOyBBSsZ3MvrydE" element={<Clase2/>} />
        <Route path="/classes/Ok0Mm7iHM1fIw69Twf4o" element={<Clase3/>} />
        <Route path="/classes/atVa7k6EyWDn7tZV7v1b" element={<Clase4/>} />
        <Route path="/classes/gHRanIzZrKbdu1K8Qb4x" element={<Clase5/>} />
        <Route path="/classes/id2wolQKcDk77qxdG24W" element={<Clase6/>} />
        <Route path="/classes/kgTSxaASCl9vPGuCGC7t" element={<Clase7/>} />
        <Route path="/classes/vxbP355jq6oSL1knWI6d" element={<Clase8/>} />
        <Route path="/exercises" element={<Exercises/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
