import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import IntroPage from './pages/IntroPage';
import ProjectPage from './pages/ProjectPage';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import { AnimatePresence } from "framer-motion";


function App() {

  return (
    <AnimatePresence exitBeforeEnter>    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
