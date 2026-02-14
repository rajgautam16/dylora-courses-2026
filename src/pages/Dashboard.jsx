import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Welcome back, {user?.name}! ✨</h1>
          <p style={{ color: '#666' }}>Here is what's happening with your learning journey.</p>
        </div>
        <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
      </header>

      <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <Link to="/courses" className="dash-card">
          <div className="icon">📚</div>
          <h3>My Courses</h3>
          <p>Continue where you left off</p>
        </Link>
        <Link to="/internships" className="dash-card">
          <div className="icon">💼</div>
          <h3>Internships</h3>
          <p>Explore new opportunities</p>
        </Link>
        <Link to="/quizzes" className="dash-card">
          <div className="icon">📝</div>
          <h3>Quizzes</h3>
          <p>Test your latest skills</p>
        </Link>
        <Link to="/blog" className="dash-card">
          <div className="icon">✍️</div>
          <h3>Blog</h3>
          <p>Read industry updates</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;