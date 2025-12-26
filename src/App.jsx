import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// main screens
import Home from './Pages/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy';



function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
    
  );
}

export default App;