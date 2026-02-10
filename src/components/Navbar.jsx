import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isEn, setIsEn] = useState(true);
  const navigate = useNavigate();

  // Toggle Theme
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLang = () => setIsEn(!isEn);

  // Logout Function
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
      
      <div className={`mobile-menu-container ${isMobileMenuOpen ? 'active' : ''}`} id="mobile-menu">
        <div className="mobile-menu-header">
          <span style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>Menu</span>
          <i className="fa-solid fa-xmark" style={{ fontSize: '1.5rem', cursor: 'pointer' }} onClick={toggleMobileMenu}></i>
        </div>
        <div className="mobile-nav-list">
          <Link to="/courses" className="mobile-nav-link" onClick={toggleMobileMenu}>Courses</Link>
          <Link to="/quizzes" className="mobile-nav-link" onClick={toggleMobileMenu}>Quizzes</Link>
          <Link to="/internships" className="mobile-nav-link" onClick={toggleMobileMenu}>Internships</Link>
          <Link to="/blog" className="mobile-nav-link" onClick={toggleMobileMenu}>Blog</Link>
        </div>
        
        <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid var(--border)' }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={toggleLang}>
            {isEn ? 'Switch Language (EN)' : 'Switch Language (IN)'}
          </button>
          
          {/* MOBILE LOGIN/LOGOUT LOGIC */}
          {user ? (
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleLogout}>Log Out</button>
          ) : (
            <Link to="/login" style={{width: '100%'}} onClick={toggleMobileMenu}>
               <button className="btn btn-primary" style={{ width: '100%' }}>Log In</button>
            </Link>
          )}
        </div>
      </div>

      <header>
        <div className="container">
          <nav>
            <Link to="/" className="logo">
              <div className="logo-icon"><i className="fa-solid fa-code"></i></div>
              <span style={{ background: 'linear-gradient(to right, var(--text-main), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Upskill<span style={{ color: 'var(--primary)' }}>.pro</span>
              </span>
            </Link>

            <div className="search-container">
              <i className="fa-solid fa-search search-icon"></i>
              <input type="text" placeholder="Type to search courses..." />
            </div>

            <ul className="nav-center">
              <li><Link to="/courses" className="nav-link">Courses</Link></li>
              <li><Link to="/quizzes" className="nav-link">Quizzes</Link></li>
              <li><Link to="/internships" className="nav-link">Internships</Link></li>
              <li><Link to="/blog" className="nav-link">Blog</Link></li>
            </ul>

            <div className="flex-center desktop-actions" style={{ gap: '12px' }}>
              <button 
                className="btn-secondary" 
                style={{ padding: 0, borderRadius: '50%', width: '44px', height: '44px', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
                onClick={toggleLang}
              >
                {isEn ? 'EN' : 'IN'}
              </button>
              
              <div className="theme-switch-wrapper" onClick={toggleTheme} role="button" tabIndex="0">
                <i className="fa-regular fa-moon icon-bg"></i>
                <div className="knob"></div>
              </div>
              
              {/* DESKTOP LOGIN/LOGOUT LOGIC */}
              {user ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   {user.picture && (
                     <img 
                       src={user.picture} 
                       alt="Profile" 
                       style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2px solid var(--primary)' }} 
                     />
                   )}
                   <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
                </div>
              ) : (
                <Link to="/login">
                    <button className="btn btn-primary">Log In</button>
                </Link>
              )}
            </div>

            <div className="mobile-toggle" onClick={toggleMobileMenu}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;