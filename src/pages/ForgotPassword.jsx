import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ForgotPassword = () => {
  const [theme, setTheme] = useState("light");
  const [email, setEmail] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleRequestCode = (e) => {
    e.preventDefault();
    if (email) {
      alert(`A verification code has been sent to ${email}`);
      setIsCodeSent(true);
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (code.length === 6) {
      alert("Code Verified! You can now reset your password.");
      // Navigate to actual reset password form or back to login for this demo
      navigate("/login");
    } else {
      alert("Please enter a valid 6-digit code.");
    }
  };

  return (
    <div className={`auth-page ${theme}`}>
      <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
      </button>

      <div className="auth-card">
        <div className="brand">✨ upskill.pro</div>
        
        {!isCodeSent ? (
          <>
            <h2>Reset Password</h2>
            <p className="subtitle">Enter your email and we'll send you a recovery code.</p>
            <form onSubmit={handleRequestCode}>
              <div className="input-group">
                <span className="input-icon">📧</span>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <button type="submit" className="primary-btn">Send Code</button>
            </form>
          </>
        ) : (
          <>
            <h2>Verify Code</h2>
            <p className="subtitle">We sent a 6-digit code to <b>{email}</b></p>
            <form onSubmit={handleVerifyCode}>
              <div className="input-group">
                <span className="input-icon">🔢</span>
                <input 
                  type="text" 
                  placeholder="Enter 6-digit code" 
                  maxLength="6"
                  required 
                  onChange={(e) => setCode(e.target.value)} 
                />
              </div>
              <button type="submit" className="primary-btn">Verify & Proceed</button>
              <p className="switch-auth" style={{marginTop: '15px'}}>
                Didn't get the code? <span onClick={() => setIsCodeSent(false)}>Resend</span>
              </p>
            </form>
          </>
        )}

        <p className="switch-auth">
          Remember your password? <span onClick={() => navigate("/login")}>Back to Login</span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;