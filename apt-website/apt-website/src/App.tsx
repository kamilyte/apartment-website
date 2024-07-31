import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/mainPage';
import ServicesPage from './components/servicesPage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import PhotosPage from './components/photosPage';
import HomeBookPage from './components/homebookPage';

function App() {
  const { innerWidth: width, innerHeight: height } = window;
  // const [width] = useState(window.screen.width);
  // const [height] = useState(window.screen.height);
  //const { width: width, height: height } = window.screen
  return (
    <div>
    
      <Router>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/services" Component={ServicesPage} />
          <Route path="/photos" Component={PhotosPage} />
          <Route path="/homebook" Component={HomeBookPage} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
