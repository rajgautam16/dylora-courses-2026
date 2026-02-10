import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Data for easy management
  const platformLinks = [
    { name: "Browse Courses", href: "#courses" },
    { name: "Internships", href: "#internships" },
    { name: "Pricing", href: "#pricing" },
    { name: "For Business", href: "#business" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "#blog" },
    { name: "Cheatsheets", href: "#cheatsheets" },
    { name: "Community Discord", href: "#discord" },
    { name: "Help Center", href: "#help" },
  ];

  const socialLinks = [
    { icon: "fa-brands fa-twitter", href: "#" },
    { icon: "fa-brands fa-linkedin", href: "#" },
    { icon: "fa-brands fa-github", href: "#" },
    { icon: "fa-brands fa-instagram", href: "#" },
  ];

  return (
    <footer style={styles.footer}>
      {/* Internal CSS for Hover Effects */}
      <style>
        {`
          .footer-link:hover { color: var(--primary) !important; padding-left: 5px; }
          .social-icon:hover { color: var(--primary) !important; transform: translateY(-3px); }
          .footer-input:focus { border-color: var(--primary) !important; }
        `}
      </style>

      <div className="container">
        {/* Main Grid */}
        <div style={styles.grid}>
          
          {/* Column 1: Brand & Description */}
          <div style={styles.col}>
            <div className="logo" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="logo-icon" style={styles.logoIcon}>
                <i className="fa-solid fa-code"></i>
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                Upskill<span style={{ color: 'var(--primary)' }}>.pro</span>
              </span>
            </div>
            <p style={styles.text}>
              Empowering the next generation of tech leaders with accessible education and career opportunities. Built for the future.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="social-icon" style={styles.socialIcon}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 style={styles.heading}>Platform</h4>
            <ul style={styles.list}>
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link" style={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 style={styles.heading}>Resources</h4>
            <ul style={styles.list}>
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link" style={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div style={{ maxWidth: '300px' }}>
            <h4 style={styles.heading}>Stay Updated</h4>
            <p style={{ ...styles.text, marginBottom: '15px' }}>
              Join 15,000+ developers getting our weekly digest.
            </p>
            <form style={styles.inputGroup} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="footer-input"
                style={styles.input}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary" style={styles.button} aria-label="Subscribe">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <span>&copy; {currentYear} Upskill Pro. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '25px' }}>
            <a href="#privacy" className="footer-link" style={styles.bottomLink}>Privacy Policy</a>
            <a href="#terms" className="footer-link" style={styles.bottomLink}>Terms of Service</a>
            <a href="#cookies" className="footer-link" style={styles.bottomLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Styles Object for cleaner JSX
const styles = {
  footer: {
    padding: '80px 0 40px',
    backgroundColor: 'var(--bg-footer, transparent)', // Fallback if var missing
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '40px',
    marginBottom: '60px',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--text-main)',
  },
  text: {
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: 'var(--text-muted)',
    textDecoration: 'none',
    display: 'block',
    padding: '8px 0',
    transition: 'all 0.3s ease',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: 'var(--primary)',
    color: '#fff',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
  },
  socialIcon: {
    color: 'var(--text-muted)',
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease, color 0.3s ease',
    textDecoration: 'none',
  },
  inputGroup: {
    display: 'flex',
    background: 'var(--bg-body)',
    padding: '5px',
    borderRadius: '50px',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow-sm)',
    position: 'relative',
  },
  input: {
    border: 'none',
    background: 'transparent',
    padding: '12px 20px',
    outline: 'none',
    color: 'var(--text-main)',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: '0.95rem',
  },
  button: {
    padding: '0',
    borderRadius: '50%',
    width: '46px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    flexShrink: 0,
  },
  bottomBar: {
    borderTop: '1px solid var(--border)',
    paddingTop: '30px',
    textAlign: 'center',
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  bottomLink: {
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  }
};

export default Footer;