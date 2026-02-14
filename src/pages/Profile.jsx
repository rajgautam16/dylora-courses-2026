import React, { useState, useEffect } from "react";
import "../App.css";

const Profile = ({ user, setUser }) => {
  const [activeTab, setActiveTab] = useState("completion");
  const [college, setCollege] = useState(user?.college || "");
  const [course, setCourse] = useState(user?.course || "");
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSave = () => {
    if (!college || !course) {
      setMessage({ type: "error", text: "Please fill in both fields to complete your profile!" });
      return;
    }
    const updatedUser = { ...user, college, course };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setMessage({ type: "success", text: "Profile updated successfully! Progress reached 100%." });
  };

  const calculateCompletion = () => {
    let percentage = 25;
    if (user?.college) percentage += 35; 
    if (user?.course) percentage += 40;  
    return percentage;
  };

  const badgeLogic = (score) => {
    if (!score || score === 0) return "None";
    return score < 50 ? "Beginner" : "Pro";
  };

  // Reusable Empty State Component
  const EmptyState = ({ icon, title, description, btnText, link }) => (
    <div className="empty-state-container">
      <div className="empty-state-icon">
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <button className="secondary-btn-outline" onClick={() => window.location.href = link}>
        {btnText}
      </button>
    </div>
  );

  return (
    <div className="profile-page-wrapper">
      <div className="container">
        <div className="profile-main-grid">
          
          {/* LEFT SIDEBAR */}
          <aside className="profile-card-sidebar">
            <div className="sidebar-user-header">
              <div className="avatar-container">
                <img src={user?.picture || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="Profile" />
                <div className="online-status"></div>
              </div>
              <h3 className="user-display-name">{user?.name}</h3>
              <span className="user-badge-tag">
                <i className="fa-solid fa-medal"></i> {badgeLogic(user?.quizStats?.score)}
              </span>
            </div>

            <nav className="profile-side-nav">
              <button className={activeTab === "completion" ? "active" : ""} onClick={() => setActiveTab("completion")}>
                <i className="fa-solid fa-id-card"></i> Profile Info
              </button>
              <button className={activeTab === "internships" ? "active" : ""} onClick={() => setActiveTab("internships")}>
                <i className="fa-solid fa-briefcase"></i> My Internships
              </button>
              <button className={activeTab === "courses" ? "active" : ""} onClick={() => setActiveTab("courses")}>
                <i className="fa-solid fa-book-open"></i> Enrolled Courses
              </button>
              <button className={activeTab === "quiz" ? "active" : ""} onClick={() => setActiveTab("quiz")}>
                <i className="fa-solid fa-chart-line"></i> Performance
              </button>
            </nav>
          </aside>

          {/* RIGHT CONTENT AREA */}
          <main className="profile-main-content">
            
            <div className="glass-card completion-card">
              <div className="card-header-flex">
                <div>
                  <h4>Profile Completion</h4>
                  <p>Strength: <b>{calculateCompletion()}%</b></p>
                </div>
                <i className={`fa-solid ${calculateCompletion() === 100 ? 'fa-circle-check' : 'fa-shield-halved'} status-icon`}></i>
              </div>
              <div className="custom-progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${calculateCompletion()}%`,
                    background: calculateCompletion() === 100 ? '#22c55e' : 'linear-gradient(90deg, var(--primary), var(--secondary))' 
                  }}
                ></div>
              </div>
            </div>

            <div className="glass-card content-card">
              {activeTab === "completion" && (
                <div className="tab-pane">
                  <h3 className="pane-title">Personal Details</h3>
                  {message.text && (
                    <div className={`form-message ${message.type}`} style={{ marginBottom: '20px' }}>
                      <i className={message.type === "error" ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-circle-check"}></i>
                      {" " + message.text}
                    </div>
                  )}
                  <div className="form-grid">
                    <div className="input-field-wrapper">
                      <label><i className="fa-solid fa-building-columns"></i> College</label>
                      <div className="input-group">
                        <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} placeholder="University Name" />
                      </div>
                    </div>
                    <div className="input-field-wrapper">
                      <label><i className="fa-solid fa-laptop-code"></i> Interest</label>
                      <div className="input-group">
                        <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="e.g. Web Development" />
                      </div>
                    </div>
                  </div>
                  <button className="primary-btn update-btn" onClick={handleSave}>Update Profile</button>
                </div>
              )}

              {activeTab === "internships" && (
                <div className="tab-pane">
                  {user?.internships?.length > 0 ? (
                    <div className="data-list">
                      {user.internships.map((int, i) => (
                        <div key={i} className="data-item">
                          <i className="fa-solid fa-briefcase"></i>
                          <span>{int.title}</span>
                          <span className="status-badge">{int.status}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <EmptyState 
                      icon="fa-file-invoice" 
                      title="No Applied Internships" 
                      description="You haven't applied for any internships yet. Complete your profile to get personalized recommendations." 
                      btnText="Browse Internships"
                      link="/internships"
                    />
                  )}
                </div>
              )}

              {activeTab === "courses" && (
                <div className="tab-pane">
                  {user?.enrolledCourses?.length > 0 ? (
                    <div className="data-list">
                       {/* Map through courses here */}
                    </div>
                  ) : (
                    <EmptyState 
                      icon="fa-graduation-cap" 
                      title="Ready to Start Learning?" 
                      description="Your course library is empty. Dive into our catalog and pick a skill to master today." 
                      btnText="Explore Courses"
                      link="/courses"
                    />
                  )}
                </div>
              )}

              {/* UPDATED QUIZ SECTION */}
              {activeTab === "quiz" && (
                <div className="tab-pane">
                  <div className="pane-header-flex">
                    <h3 className="pane-title">Performance Analytics</h3>
                    <div className="current-rank">
                      <span className="rank-label">Current Rank:</span>
                      <span className={`rank-value ${badgeLogic(user?.quizStats?.score).toLowerCase()}`}>
                        {badgeLogic(user?.quizStats?.score)}
                      </span>
                    </div>
                  </div>

                  <div className="stats-row">
                    <div className="mini-stat">
                      <div className="stat-icon-circle"><i className="fa-solid fa-play"></i></div>
                      <div className="stat-info">
                        <span className="stat-label">Total Played</span>
                        <span className="stat-value">{user?.quizStats?.played || 0}</span>
                      </div>
                    </div>
                    <div className="mini-stat">
                      <div className="stat-icon-circle"><i className="fa-solid fa-bullseye"></i></div>
                      <div className="stat-info">
                        <span className="stat-label">Avg. Score</span>
                        <span className="stat-value">{user?.quizStats?.score || 0}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="performance-insight">
                    <div className="insight-icon">
                      <i className={user?.quizStats?.score >= 50 ? "fa-solid fa-rocket" : "fa-solid fa-seedling"}></i>
                    </div>
                    <div className="insight-text">
                      {user?.quizStats?.score > 0 ? (
                        <>
                          <h4>{user?.quizStats?.score >= 50 ? "You're a Rising Star!" : "Keep Growing!"}</h4>
                          <p>
                            {user?.quizStats?.score >= 50 
                              ? "Your technical grasp is impressive. Try advanced challenges to hit the 'Pro' rank." 
                              : "You've earned the Beginner Badge. Complete more quizzes to improve your rank."}
                          </p>
                        </>
                      ) : (
                        <>
                          <h4>No Data Yet</h4>
                          <p>Test your skills in our Quiz Arena to unlock your first rank and performance badge.</p>
                        </>
                      )}
                    </div>
                    <button className="primary-btn-sm" onClick={() => window.location.href = "/quizzes"}>
                      Play Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;