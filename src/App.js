import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./components/Pages/Home";
import { Electro } from "./components/Pages/Electro";
import { Rock } from "./components/Pages/Rock";
import { Techno } from "./components/Pages/Techno";
import React, { useState, useEffect } from "react";


function App() {


  return (
    <>
    
    
   
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Electro/*" element={<Electro />} />
            <Route path="Rock/*" element={<Rock />} />
            <Route path="Techno/*" element={<Techno />} />
          </Routes>
        </div>
      </Router>
    </>
    
  );
}

export default App;