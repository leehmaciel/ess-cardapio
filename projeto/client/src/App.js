import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";
import './App.css';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home isMenu={true}/>} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Home isMenu={false}/>} />
      </Routes>
    </Router>
  );
}

export default App;