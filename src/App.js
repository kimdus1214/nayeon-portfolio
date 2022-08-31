import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import IntroPage from './pages/IntroPage';
import ProjectPage from './pages/ProjectPage';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>    
      <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
