import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = ({ setUser }) => {
  const [theme, setTheme] = useState("light");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    if (email && password.length >= 6) {
      const mockUser = {
        name: email.split('@')[0],
        email: email,
        picture: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      };
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      navigate("/courses");
    } else {
      alert("Please enter a valid email and password (min 6 chars)");
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

        <form onSubmit={handleEmailLogin}>
          <p style={{textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', marginBottom: '5px'}}>Login to your account</p>
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          {/* Updated this line to be clickable */}
          <div className="forgot" onClick={() => navigate("/forgot-password")}>Forgot password?</div>
          <button type="submit" className="primary-btn">Login</button>
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
            onError={() => alert("Google Login Failed")}
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