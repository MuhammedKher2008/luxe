import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Service from "./components/service";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
