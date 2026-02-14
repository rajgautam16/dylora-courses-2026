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
<<<<<<< HEAD
import Profile from './pages/Profile'; // ✅ New Import
import ForgotPassword from './pages/ForgotPassword';
=======
import ForgotPassword from './pages/ForgotPassword'; // ✅ Added this import
import ApplicationFormPage from './pages/ApplicationFormPage';
import Search from './pages/Search';
>>>>>>> 4cd832ae41911c95e703af4c2f13218a088a3f93
import './App.css';

function Layout({ user, setUser }) {
  const location = useLocation();
<<<<<<< HEAD
  const hideLayout = ["/login", "/signup", "/forgot-password"].includes(location.pathname);
=======

  // ✅ Updated to include "/forgot-password" and "/apply" so the Navbar/Footer stays hidden there
  const hideLayout = ["/login", "/signup", "/forgot-password", "/apply"].includes(location.pathname);
>>>>>>> 4cd832ae41911c95e703af4c2f13218a088a3f93

  return (
    <>
      {!hideLayout && <Navbar user={user} setUser={setUser} />}
<<<<<<< HEAD
=======

>>>>>>> 4cd832ae41911c95e703af4c2f13218a088a3f93
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/blog" element={<Blog />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        
        {/* ✅ Protected Profile Route */}
        <Route 
          path="/profile" 
          element={user ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />} 
        />
        
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
=======
          <Route path="/master-tech-skills" element={<MasterTechSkills />} />
          <Route path="/codepen" element={<CodePenDemo />} />
          <Route path="/live-editor" element={<LiveCodeEditorDemo />} />
          <Route path="/monaco-editor" element={<LiveCodeEditorProDemo />} />
          <Route path="/ultimate-editor" element={<UltimateEditorDemo />} />
        
        {/* Auth Routes: All three pass setUser to handle the login logic */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/apply" element={<ApplicationFormPage />} />
      </Routes>

>>>>>>> 4cd832ae41911c95e703af4c2f13218a088a3f93
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