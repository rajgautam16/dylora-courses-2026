import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Signup = ({ setUser }) => {
  const [theme, setTheme] = useState("light");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      name: formData.fullName,
      email: formData.email,
      picture: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    alert("Account created successfully!");
    navigate("/courses");
  };

  return (
    <div className={`auth-page ${theme}`}>
      <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
      </button>

      <div className="auth-card">
        <div className="brand">✨ upskill.pro</div>
        <h2>Create Your Account</h2>
        <p className="subtitle">Learn skills. Build career. Get hired.</p>

        <form onSubmit={handleEmailSignup}>
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
          </div>
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          </div>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          </div>
          <div className="input-group">
            <span className="input-icon">🛡️</span>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
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
              setUser(details);
              localStorage.setItem("user", JSON.stringify(details));
              navigate("/courses");
            }}
            shape="pill"
            theme={theme === "dark" ? "filled_black" : "outline"}
            onError={() => alert("Google Signup Failed")}
          />
        </div>

        <p className="switch-auth">
          Already have an account? <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;