import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Internships from './pages/Internships';
import Quizzes from './pages/Quizzes';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword'; // ✅ Added this import
import Search from './pages/Search';
import './App.css';

function Layout({ user, setUser }) {
  const location = useLocation();
  
  // ✅ Updated to include "/forgot-password" so the Navbar/Footer stays hidden there too
  const hideLayout = ["/login", "/signup", "/forgot-password"].includes(location.pathname);

  return (
    <>
      {/* Passes user state to Navbar to toggle between "Log In" and "Log Out" */}
      {!hideLayout && <Navbar user={user} setUser={setUser} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* Auth Routes: All three pass setUser to handle the login logic */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);

  // Checks if the user is already logged in when the browser refreshes
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Error loading user session", e);
      }
    }
  }, []);

  return (
    <Router>
      <Layout user={user} setUser={setUser} />
    </Router>
  );
}

export default App;