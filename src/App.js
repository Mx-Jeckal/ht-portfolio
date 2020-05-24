import React from 'react';
import Header from './components/Header/Header.js'
import NavBtns from './components/NavBtns/NavBtns.js'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      
        <NavBtns />
        <Header />
      </Router>
    </div>
  );
}

export default App;
