import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Signup = ({ setUser }) => {
  const [theme, setTheme] = useState("light");
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      return;
    }

    const newUser = {
      name: formData.fullName,
      email: formData.email,
      picture: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      // ✅ Initializing all profile fields
      college: "",
      course: "",
      interests: [],
      internships: [],
      enrolledCourses: [],
      quizStats: { played: 0, score: 0, badge: "None" }
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    setMessage({ type: "success", text: "Account created successfully!" });
    setTimeout(() => navigate("/courses"), 1500);
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
        <div className="brand"><i className="fa-solid fa-wand-magic-sparkles"></i> upskill.pro</div>
        <h2>Create Your Account</h2>
        <p className="subtitle">Learn skills. Build career. Get hired.</p>

        {message.text && (
          <div className={`form-message ${message.type}`}>
            <i className={message.type === "error" ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-circle-check"}></i>
            {" " + message.text}
          </div>
        )}

        <form onSubmit={handleEmailSignup}>
          <div className="input-field-wrapper">
            <span className="input-icon-top-left"><i className="fa-solid fa-user"></i></span>
            <div className="input-group">
              <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
            </div>
          </div>
          <div className="input-field-wrapper">
            <span className="input-icon-top-left"><i className="fa-solid fa-envelope"></i></span>
            <div className="input-group">
              <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            </div>
          </div>
          <div className="input-field-wrapper">
            <span className="input-icon-top-left"><i className="fa-solid fa-lock"></i></span>
            <div className="input-group">
              <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
            </div>
          </div>
          <div className="input-field-wrapper">
            <span className="input-icon-top-left"><i className="fa-solid fa-shield-halved"></i></span>
            <div className="input-group">
              <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
            </div>
          </div>
          <div className="terms" style={{fontSize: '0.8rem', textAlign: 'left', marginBottom: '15px'}}>
            <input type="checkbox" required /> I agree to <b>Terms & Privacy</b>
          </div>
          <button type="submit" className="primary-btn">Create Account</button>
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
        <p className="switch-auth">Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
      </div>
    </div>
  );
};

export default Signup;