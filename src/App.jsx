import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AppShell from './Components/AppShell';
import Profile from './Pages/Profile';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-background fixed inset-0 z-0"></div>
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppShell>
    </BrowserRouter>
  );
}

export default App;
