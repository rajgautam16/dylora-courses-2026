import React from 'react';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
                <div>
                    <div className="logo" style={{ marginBottom: '25px' }}>
                        <div className="logo-icon"><i className="fa-solid fa-code"></i></div>
                        <span>Upskill<span style={{ color: 'var(--primary)' }}>.pro</span></span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '320px', fontSize: '0.95rem' }}>
                        Empowering the next generation of tech leaders with accessible education and career opportunities. Built for the future.
                    </p>
                </div>
                <div>
                    <h4 style={{ marginBottom: '25px' }}>Platform</h4>
                    <ul style={{ color: 'var(--text-muted)', lineHeight: '2.2' }}>
                        <li><a href="#courses">Browse Courses</a></li>
                        <li><a href="#internships">Internships</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">For Business</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '25px' }}>Resources</h4>
                    <ul style={{ color: 'var(--text-muted)', lineHeight: '2.2' }}>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Cheatsheets</a></li>
                        <li><a href="#">Community Discord</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '25px' }}>Newsletter</h4>
                    <div style={{ display: 'flex', background: 'var(--bg-body)', padding: '6px', borderRadius: '50px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                        <input type="email" placeholder="Email address" style={{ border: 'none', background: 'transparent', padding: '10px 15px', outline: 'none', color: 'var(--text-main)', width: '100%', fontFamily: 'var(--font-main)' }} />
                        <button className="btn btn-primary" style={{ padding: '10px 18px', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', justifyContent: 'center' }}><i className="fa-solid fa-arrow-right" style={{ margin: 0 }}></i></button>
                    </div>
                </div>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '30px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                <span>&copy; 2026 Upskill Pro. All rights reserved.</span>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;