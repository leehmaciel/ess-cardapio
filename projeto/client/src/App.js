import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import './App.css';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home isMenu={true} isSettings={false}/>} />
        <Route path="/edit" element={<Home isMenu={false} isSettings={false}/>} />
        <Route path="/edit/settings" element={<Home isMenu={false} isSettings={true}/>} />
      </Routes>
    </Router>
  );
}

export default App;