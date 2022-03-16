import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import React, { useState, useEffect } from "react";


function App() {


  return (
    <>
    
    
   
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About/*" element={<About />} />
            <Route path="Blog/*" element={<Blog />} />
            <Route path="Contact/*" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
    
  );
}

export default App;