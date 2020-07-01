import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, useHistory } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile/:name">
          <Profile />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
