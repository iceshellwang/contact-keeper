import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      My APP
    </div>
    </Router>
  );
}

export default App;
