import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homeblog from './components/blogpage/Homeblog';
import AuthPage from './components/blogpage/login';



const App = () => ( 
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Navbar />} />
            <Route path="/contact" element={<Footer />} />
            <Route path="/homeblog" element={<Homeblog />} />
            <Route path="/login" element={<AuthPage />} />
        </Routes>
    </Router>
);

export default App;
