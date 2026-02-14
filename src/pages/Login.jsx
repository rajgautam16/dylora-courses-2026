import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = ({ setUser }) => {
  const [theme, setTheme] = useState("light");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    if (email && password.length >= 6) {
      const mockUser = {
        name: email.split('@')[0],
        email: email,
        picture: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        // ✅ Added fields to prevent Profile page errors
        college: "",
        course: "",
        interests: [],
        internships: [],
        enrolledCourses: [],
        quizStats: { played: 0, score: 0, badge: "None" }
      };
      setMessage({ type: "success", text: "Login successful!" });
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      setTimeout(() => navigate("/courses"), 1500);
    } else {
      setMessage({ type: "error", text: "Invalid credentials (min 6 chars)." });
    }
  };

  return (
    <div className={`auth-page ${theme}`}>
      <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <i className={theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i> 
        {theme === "light" ? " Dark" : " Light"} Mode
      </button>

      <div className="auth-card">
        <div className="glow-shape glow-1"></div>
        <div className="glow-shape glow-2"></div>

        <div className="brand">
          <i className="fa-solid fa-wand-magic-sparkles"></i> upskill.pro
        </div>
        <h2>Welcome Back</h2>
        <p className="subtitle">Learn skills. Build career. Get hired.</p>

        {message.text && (
          <div className={`form-message ${message.type}`}>
            <i className={message.type === "error" ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-circle-check"}></i>
            {" " + message.text}
          </div>
        )}

        <form onSubmit={handleEmailLogin}>
          <h2 style={{textAlign: 'left', fontSize: '1.2rem', fontWeight: '800', marginBottom: '15px'}}>Login</h2>
          <div className="input-field-wrapper">
            <span className="input-icon-top-left"><i className="fa-solid fa-envelope"></i></span>
            <div className="input-group">
              <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="input-field-wrapper">
            <span className="input-icon-top-left"><i className="fa-solid fa-lock"></i></span>
            <div className="input-group">
              <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="forgot" onClick={() => navigate("/forgot-password")}>Forgot password?</div>
          <button type="submit" className="primary-btn">Login</button>
        </form>

        <div className="or">─── OR ───</div>
        <div className="google-login-wrapper">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const details = jwtDecode(credentialResponse.credential);
              const fullUser = { ...details, college: "", course: "", interests: [], internships: [], enrolledCourses: [], quizStats: { played: 0, score: 0, badge: "None" } };
              setUser(fullUser);
              localStorage.setItem("user", JSON.stringify(fullUser));
              navigate("/courses");
            }}
            shape="pill"
            theme={theme === "dark" ? "filled_black" : "outline"}
          />
        </div>
        <p className="switch-auth">Don’t have an account? <span onClick={() => navigate("/signup")}>Sign up</span></p>
      </div>
    </div>
  );
};

export default Login;