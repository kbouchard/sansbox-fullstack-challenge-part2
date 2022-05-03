import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import MessyComponent from "./MessyComponent";

import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="messy">Messy Component</Link>
        </nav>

        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/messy" element={<MessyComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
