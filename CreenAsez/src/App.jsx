import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Brand from './pages/Brand';
import 'tailwindcss/tailwind.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/brand" element={<Brand />} />
      </Routes>
    </Router>
  )
}

export default App
