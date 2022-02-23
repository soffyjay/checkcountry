import Header from "./components/Header";
import HomePage from "./pages/homepage";
import CountryCardInfo from "./pages/countrycardinfo";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>{" "}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
