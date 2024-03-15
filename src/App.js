import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import './App.css';
import AgeVerificationModal from './components/AgeVerificationModal';

function App() {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (isOver21) => {
    if (isOver21) {
      setIsVerified(true);
    } else {
      window.location.href = 'https://www.google.com'; // Redirect to another page
    }
  };

  if (!isVerified) {
    return <AgeVerificationModal onVerify={handleVerification} />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
