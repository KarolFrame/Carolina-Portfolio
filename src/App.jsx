import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AppShell from './Components/AppShell';

function App() {
  return (
    <BrowserRouter>
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppShell>
    </BrowserRouter>
  );
}

export default App;
