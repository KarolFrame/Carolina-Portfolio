import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AppShell from './Components/AppShell';
import Profile from './Pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-background fixed inset-0 z-0"></div>
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </AppShell>
    </BrowserRouter>
  );
}

export default App;
