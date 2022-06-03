import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@nickgdev/hellerui/lib/index.css';

import { Home } from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
