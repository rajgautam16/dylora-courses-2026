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
import MasterTechSkills from './pages/MasterTechSkills';
import CodePenDemo from './pages/CodePenDemo';
import LiveCodeEditorDemo from './pages/LiveCodeEditorDemo';
import LiveCodeEditorProDemo from './pages/LiveCodeEditorProDemo';
import UltimateEditorDemo from './pages/UltimateEditorDemo';
import Signup from './pages/Signup';
import Profile from './pages/Profile'; 
import ForgotPassword from './pages/ForgotPassword';
import './App.css';

function Layout({ user, setUser }) {
  const location = useLocation();
  const hideLayout = ["/login", "/signup", "/forgot-password"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar user={user} setUser={setUser} />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Commented out because Search component is not imported */}
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        
        <Route 
          path="/profile" 
          element={user ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />} 
        />
        
        <Route path="/forgot-password" element={<ForgotPassword />} />
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