import React, { lazy,Suspense  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Classes from './components/Classes/Classes';
import Home from './components/Home/Home';
const Class1 = lazy(() => import('./components/Class/Class1'));
const Class2 = lazy(() => import('./components/Class/Class2'));
const Class3 = lazy(() => import('./components/Class/Class3'));
const Class4 = lazy(() => import('./components/Class/Class4'));
const Class5 = lazy(() => import('./components/Class/Class5'));
const Class6 = lazy(() => import('./components/Class/Class6'));
const Class7 = lazy(() => import('./components/Class/Class7'));
const Class8 = lazy(() => import('./components/Class/Class8'));
const MicropythonClass1 = lazy(() => import('./components/MicropythonClass/MicropythonClass1'));
const MicropythonClass2 = lazy(() => import('./components/MicropythonClass/MicropythonClass2'));
const MicropythonClass3 = lazy(() => import('./components/MicropythonClass/MicropythonClass3'));
const MicropythonClass4 = lazy(() => import('./components/MicropythonClass/MicropythonClass4'));
const MicropythonClass5 = lazy(() => import('./components/MicropythonClass/MicropythonClass5'));
const MicropythonClass6 = lazy(() => import('./components/MicropythonClass/MicropythonClass6'));
const MicropythonClass7 = lazy(() => import('./components/MicropythonClass/MicropythonClass7'));
const MicropythonClass8 = lazy(() => import('./components/MicropythonClass/MicropythonClass8'));
const Exercises = lazy(() => import('./components/Exercises/Exercises'));
const Algorithms = lazy(() => import('./components/Algorithms/Algorithms'))
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Github = lazy(() => import('./components/Github/Github'));
const ProfessionalCareer = lazy(() => import('./components/ProfessionalCareer/ProfessionalCareer'));
const DigitalPortfolio = lazy(() => import('./components/DigitalPortfolio/DigitalPortfolio'));


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/micropython" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/micropython/classes" element={<Classes />} />
        <Route path="/classes/0yKRrkDNEiFiv7K326tk" element={<Class1 />} />
        <Route path="/classes/2KLc4SOyBBSsZ3MvrydE" element={<Class2 />} />
        <Route path="/classes/Ok0Mm7iHM1fIw69Twf4o" element={<Class3 />} />
        <Route path="/classes/atVa7k6EyWDn7tZV7v1b" element={<Class4 />} />
        <Route path="/classes/gHRanIzZrKbdu1K8Qb4x" element={<Class5 />} />
        <Route path="/classes/id2wolQKcDk77qxdG24W" element={<Class6 />} />
        <Route path="/classes/kgTSxaASCl9vPGuCGC7t" element={<Class7 />} />
        <Route path="/classes/vxbP355jq6oSL1knWI6d" element={<Class8 />} />
        <Route path="/micropython/classes/DGNVKaHVIjv8RsBsi1yD" element={<MicropythonClass1 />} />
        <Route path="/micropython/classes/MYel0kO6E1gEbrgonfGJ" element={<MicropythonClass2 />} />
        <Route path="/micropython/classes/NSSBz68HqHvwFtPEtNrX" element={<MicropythonClass3 />} />
        <Route path="/micropython/classes/PkxJof23pZmY2DOzvDZk" element={<MicropythonClass4 />} />
        <Route path="/micropython/classes/VY0ycApFvi30o3AMocYr" element={<MicropythonClass5 />} />
        <Route path="/micropython/classes/biHDw8gF0oV14msUfiD5" element={<MicropythonClass6 />} />
        <Route path="/micropython/classes/mqV4nby5dHGGxzcEHVXq" element={<MicropythonClass7 />} />
        <Route path="/micropython/classes/xAZ9Kuxrx9Ve1Kaz7kTN" element={<MicropythonClass8 />} />
        <Route path="/micropython/exercises" element={<Exercises/>} />
        <Route path="/exercises" element={<Exercises/>} />
        <Route path="/algorithms" element={<Algorithms/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/micropython/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/micropython/contact" element={<Contact/>} />
        <Route path="/github" element={<Github/>} />
        <Route path="/microPython/github" element={<Github/>} />
        <Route path="/professionalCarrer" element={<ProfessionalCareer/>}/>
        <Route path="/digitalPortfolio" element={<DigitalPortfolio/>}/>
      </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
