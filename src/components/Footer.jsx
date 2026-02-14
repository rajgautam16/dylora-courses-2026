import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="footer-section" style={styles.footer}>
      <style>
        {`
          .footer-link:hover { color: var(--primary) !important; padding-left: 5px; }
          .social-icon:hover { color: var(--primary) !important; transform: translateY(-3px); }
          .footer-input:focus { border-color: var(--primary) !important; }
          
          /* Mobile Optimizations */
          @media (max-width: 768px) {
            .footer-section { padding: 50px 0 30px !important; }
            .footer-grid { 
              display: flex !important; 
              flex-direction: column; 
              gap: 40px !important; 
              text-align: center; 
            }
            /* Center the items inside the flex columns */
            .footer-col { 
              align-items: center !important; 
            }
            /* Specifically center the form container */
            .newsletter-form { margin: 0 auto; width: 100%; max-width: 320px; }
            .social-links { justify-content: center; }
            .logo { justify-content: center; }
            
            .footer-bottom { flex-direction: column-reverse; gap: 20px !important; text-align: center; }
            .footer-bottom-links { justify-content: center !important; }
          }
        `}
      </style>

      <div className="container">
        {/* Main Grid (Switching to class control for mobile override) */}
        <div className="footer-grid" style={styles.grid}>
          
          {/* Column 1: Brand */}
          <div className="footer-col" style={styles.col}>
            <div className="logo" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="logo-icon" style={styles.logoIcon}>
                <i className="fa-solid fa-code"></i>
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                Upskill<span style={{ color: 'var(--primary)' }}>.pro</span>
              </span>
            </div>
            <p style={styles.text}>
              Empowering the next generation of tech leaders with accessible education and career opportunities.
            </p>
            <div className="social-links" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="social-icon" style={styles.socialIcon}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="footer-col" style={styles.col}>
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
          <div className="footer-col" style={styles.col}>
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

          {/* Column 4: Newsletter - Fixed Centering */}
          <div className="footer-col" style={styles.col}>
            <h4 style={styles.heading}>Stay Updated</h4>
            <p style={{ ...styles.text, marginBottom: '15px' }}>
              Join 15,000+ developers getting our weekly digest.
            </p>
            {/* Added class 'newsletter-form' to handle margin: 0 auto on mobile */}
            <form className="newsletter-form" style={styles.inputGroup} onSubmit={(e) => e.preventDefault()}>
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
        <div className="footer-bottom" style={styles.bottomBar}>
          <span>&copy; {currentYear} Upskill Pro. All rights reserved.</span>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: '25px' }}>
            <a href="#privacy" className="footer-link" style={styles.bottomLink}>Privacy Policy</a>
            <a href="#terms" className="footer-link" style={styles.bottomLink}>Terms of Service</a>
            <a href="#cookies" className="footer-link" style={styles.bottomLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '80px 0 40px',
    backgroundColor: 'var(--bg-footer, transparent)',
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
    // Removed maxWidth constraint here to let the grid/flex handle it
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
    // Default width for desktop (can be overridden by class in mobile)
    width: '100%',
    maxWidth: '300px', 
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
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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