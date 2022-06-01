import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@nickgdev/hellerui/lib/index.css';
import '@nickgdev/hellerui/lib/themes/pinched.css';
import { Home } from './pages/home';

function App() {
  return <Home />;
}

export default App;
