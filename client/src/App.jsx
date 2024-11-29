import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Components
import Header from './components/Header';

// Importing Pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';

// Main App Component
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </Router>
  )
}