import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isEn, setIsEn] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
<<<<<<< HEAD
  const dropdownRef = useRef(null);
=======
  const dropdownRef = useRef(null); 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm('');
    }
  };
>>>>>>> 4cd832ae41911c95e703af4c2f13218a088a3f93

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLang = () => setIsEn(!isEn);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setShowDropdown(false);
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
        {/* FLUID CONTAINER WRAPPER
            - width: 100% ensures it covers the screen.
            - maxWidth: 1800px ensures it doesn't stretch too far on ultrawide monitors.
            - padding: 0 50px gives it that premium "breathing room" from the edges. 
            - margin: 0 auto keeps it centered on huge screens.
        */}
        <div style={{ width: '100%', maxWidth: '1800px', margin: '0 auto', padding: '0 50px', height: '100%' }}>
          
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
            
            {/* --- LEFT SECTION --- */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', minWidth: '150px' }}>
              <Link to="/" className="logo">
                <div className="logo-icon"><i className="fa-solid fa-code"></i></div>
                <span style={{ background: 'linear-gradient(to right, var(--text-main), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', whiteSpace: 'nowrap' }}>
                  Upskill<span style={{ color: 'var(--primary)' }}>.pro</span>
                </span>
              </Link>
            </div>

            {/* --- MIDDLE SECTION --- */}
            <div className="nav-middle" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
              <form className="search-container" onSubmit={handleSearch}>
                <i 
                  className="fa-solid fa-search search-icon" 
                  onClick={handleSearch} 
                  style={{cursor: 'pointer'}}
                ></i>
                <input 
                  type="text" 
                  placeholder="Type to search..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>

              <ul className="nav-center" style={{ gap: '1rem' }}>
                <li><Link to="/courses" className="nav-link">Courses</Link></li>
                <li><Link to="/quizzes" className="nav-link">Quizzes</Link></li>
                <li><Link to="/internships" className="nav-link">Internships</Link></li>
                <li><Link to="/blog" className="nav-link">Blog</Link></li>
              </ul>
            </div>

            {/* --- RIGHT SECTION --- */}
            <div className="desktop-actions" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
              <button 
                className="btn-secondary" 
                style={{ padding: 0, borderRadius: '50%', width: '44px', height: '44px', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
                onClick={toggleLang}
              >
                {isEn ? 'EN' : 'IN'}
              </button>
              
              <div className="theme-switch-wrapper" onClick={toggleTheme} role="button" tabIndex="0">
                <i className={isDark ? "fa-solid fa-sun icon-bg" : "fa-solid fa-moon icon-bg"}></i>
                <div className="knob" style={{ transform: isDark ? 'translateX(0px)' : 'translateX(26px)' }}></div>
              </div>
              
              {user ? (
                <div style={{ position: 'relative' }} ref={dropdownRef}>
                  <img 
                    src={user.picture} 
                    alt="Profile" 
                    onClick={() => setShowDropdown(!showDropdown)} 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      border: '2px solid var(--primary)', 
                      cursor: 'pointer',
                      display: 'block' 
                    }} 
                  />

                  {showDropdown && (
                    <div className="profile-dropdown-tab" style={{
                      position: 'absolute',
                      top: '55px',
                      right: '0',
                      width: '220px',
                      backgroundColor: 'var(--bg-surface)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: 'var(--shadow-xl)',
                      borderRadius: '12px',
                      padding: '12px',
                      zIndex: '1100',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{ padding: '8px 12px', fontSize: '0.85rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Signed in as</span> <br />
                        <strong style={{ color: 'var(--text-main)' }}>{user.name}</strong>
                      </div>
                      <hr style={{ margin: '8px 0', border: 'none', borderTop: '1px solid var(--border)' }} />
                      
                      {/* LINKED TO PROFILE PAGE SECTIONS */}
                      <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                        <i className="fa-solid fa-user-gear" style={{ marginRight: '10px' }}></i> Edit Profile
                      </Link>
                      
                      <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                        <i className="fa-solid fa-briefcase" style={{ marginRight: '10px' }}></i> Internships
                      </Link>
                      
                      <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                        <i className="fa-solid fa-graduation-cap" style={{ marginRight: '10px' }}></i> My Courses
                      </Link>
                      
                      <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                        <i className="fa-solid fa-trophy" style={{ marginRight: '10px' }}></i> Quiz Stats
                      </Link>
                      
                      <hr style={{ margin: '8px 0', border: 'none', borderTop: '1px solid var(--border)' }} />
                      
                      <button 
                        onClick={handleLogout}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 12px',
                          background: 'none',
                          border: 'none',
                          color: '#ff4d4d',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <i className="fa-solid fa-right-from-bracket"></i> Log Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary">Log In</button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   {user.picture && (
                     <img 
                       src={user.picture} 
                       alt="Profile" 
                       style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)', objectFit: 'cover' }} 
                     />
                   )}
                   <button className="btn btn-primary" onClick={handleLogout} style={{ padding: '10px 24px' }}>Log Out</button>
                </div>
              ) : (
                <Link to="/login">
                    <button className="btn btn-primary" style={{ padding: '10px 24px' }}>Log In</button>
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