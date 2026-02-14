import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = ({ setUser }) => {
  const [theme, setTheme] = useState("light");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ✅ State for custom error/success messages
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  // ✅ Auto-clear messages after 3 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    
    // ✅ Validation and Error Handling
    if (email && password.length >= 6) {
      const mockUser = {
        name: email.split('@')[0],
        email: email,
        picture: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      };
      
      setMessage({ type: "success", text: "Login successful! Redirecting..." });
      
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      
      // Short delay for the user to see the success message
      setTimeout(() => navigate("/courses"), 1500);
    } else {
      // ✅ Custom error popup logic
      setMessage({ 
        type: "error", 
        text: "Invalid credentials. Password must be at least 6 characters." 
      });
    }
  };

  return (
    <div className={`auth-page ${theme}`}>
      <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
      </button>

      <div className="auth-card">
        <div className="brand">✨ upskill.pro</div>
        <h2>Welcome Back</h2>
        <p className="subtitle">Learn skills. Build career. Get hired.</p>

        {/* ✅ Custom Popup/Message Logic */}
        {message.text && (
          <div className={`form-message ${message.type}`}>
            {message.type === "error" ? "⚠️ " : "✅ "} {message.text}
          </div>
        )}

        <form onSubmit={handleEmailLogin}>
          <h2 style={{textAlign: 'left', fontSize: '1.5rem', fontWeight: '800', marginBottom: '3px'}}>Login</h2>
          
          <div className="input-group">
            <span className="input-icon">📧 </span>
            <input 
              type="email" 
              placeholder="Email" 
              required 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input 
              type="password" 
              placeholder="Password" 
              required 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div className="forgot" onClick={() => navigate("/forgot-password")}>
            Forgot password?
          </div>
          
          <button type="submit" className="primary-btn">Login</button>
        </form>

        <div className="or">─── OR ───</div>

        <div className="google-login-wrapper">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const details = jwtDecode(credentialResponse.credential);
              setUser(details);
              localStorage.setItem("user", JSON.stringify(details));
              setMessage({ type: "success", text: "Google Login Successful!" });
              setTimeout(() => navigate("/courses"), 1500);
            }}
            shape="pill"
            theme={theme === "dark" ? "filled_black" : "outline"}
            onError={() => setMessage({ type: "error", text: "Google Login Failed" })}
          />
        </div>

        <p className="switch-auth">
          Don’t have an account? <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;