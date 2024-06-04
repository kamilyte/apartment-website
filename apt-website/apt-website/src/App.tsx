import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/mainPage'
import MainPage from './components/mainPage';
import ServicesPage from './components/servicesPage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import PhotosPage from './components/photosPage';

function App() {
  const { innerWidth: width, innerHeight: height } = window;
  // const [width] = useState(window.screen.width);
  // const [height] = useState(window.screen.height);
  //const { width: width, height: height } = window.screen
  return (
    <div>
    <Container disableGutters maxWidth={false} sx={{height: {height}, width: {width}, overflowX: 'hidden', overflowY: 'auto'}}>
    
      <Router>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/services" Component={ServicesPage} />
          <Route path="/photos" Component={PhotosPage} />
        </Routes>
        
      </Router>
    </Container>
    </div>
  );
}

export default App;
