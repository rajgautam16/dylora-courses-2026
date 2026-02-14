import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Internships from './pages/Internships';
import Quizzes from './pages/Quizzes';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard'; 
import './App.css';

function Layout({ user, setUser }) {
  const location = useLocation();
  
  // ✅ ADDED "/dashboard" HERE:
  // This ensures the standard top Navbar and bottom Footer disappear 
  // when you are on the Dashboard page.
  const hideLayout = ["/login", "/signup", "/forgot-password", "/dashboard"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar user={user} setUser={setUser} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/blog" element={<Blog />} />
        
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Dashboard Route */}
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard user={user} setUser={setUser} /> : <Navigate to="/login" />} 
        />
      </Routes>
      
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);

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