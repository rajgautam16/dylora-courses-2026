import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ForgotPassword = () => {
  const [theme, setTheme] = useState("light");
  const [email, setEmail] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" }); // ✅ Added for custom error handling
  const navigate = useNavigate();

  // Handle Requesting the Code
  const handleRequestCode = (e) => {
    e.preventDefault();
    if (email) {
      // ✅ Using custom message instead of alert()
      setMessage({ type: "success", text: `Verification code sent to ${email}` });
      setIsCodeSent(true);
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }
  };

  // Handle Verifying the Code
  const handleVerifyCode = (e) => {
    e.preventDefault();
    
    // ✅ 6-digit validation logic
    if (code.length === 6 && /^\d+$/.test(code)) {
      setMessage({ type: "success", text: "Code Verified! Redirecting to login..." });
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setMessage({ type: "error", text: "Please enter a valid 6-digit numeric code." });
    }
  };

  return (
    <div className={`auth-page ${theme}`}>
      <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
      </button>

      <div className="auth-card">
        <div className="brand">✨ upskill.pro</div>
        
        {/* ✅ Custom Error/Success Message Display */}
        {message.text && (
          <div className={`form-message ${message.type}`}>
            {message.type === "error" ? "⚠️ " : "✅ "} {message.text}
          </div>
        )}
        
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
                Didn't get the code? <span onClick={() => {
                  setIsCodeSent(false);
                  setMessage({ type: "success", text: "You can try entering your email again." });
                }}>Resend</span>
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