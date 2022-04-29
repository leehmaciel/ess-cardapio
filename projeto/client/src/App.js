import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Share from "./Share";
import Menu from "./Menu";
import './App.css';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home isMenu={true}/>}>
          <Route path="edit" element={<Menu isMenu={false} />} />
          <Route path="share" element={<Share open={true}/>} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;