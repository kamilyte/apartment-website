import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/mainPage'
import MainPage from './components/mainPage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" Component={MainPage} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
