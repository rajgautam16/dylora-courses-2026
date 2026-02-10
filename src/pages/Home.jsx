import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // --- Data ---
    const courses = [
        {
            title: "Full Stack MERN Bootcamp",
            tags: ["Web Dev", "React", "Node"],
            img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
            type: "Paid",
            price: "Rs.4999",
            progress: 45
        },
        {
            title: "Data Science with Python",
            tags: ["Data", "Python", "ML"],
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
            type: "Free",
            price: "Free",
            progress: 10
        },
        {
            title: "Ethical Hacking Zero to Hero",
            tags: ["Security", "Linux", "Network"],
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
            type: "Paid",
            price: "Rs.8999",
            progress: 0
        }
    ];

    const internships = [
        { role: "Frontend Developer", company: "Adobe", location: "Bangalore", type: "Paid" },
        { role: "Machine Learning Intern", company: "Google", location: "Hyderabad", type: "Paid" },
        { role: "UI/UX Designer", company: "Zomato", location: "Gurgaon", type: "Stipend" },
    ];

    // --- Effects ---
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // 3D Parallax Effect
    const handleMouseMove = (e) => {
        if(window.innerWidth <= 768) return; 
        const moveX = (e.clientX * -0.005);
        const moveY = (e.clientY * -0.005);
        const win = document.querySelector('.code-window');
        if(win) win.style.transform = `rotateY(${-12 + moveX}deg) rotateX(${6 + moveY}deg)`;
    };

    return (
        <main onMouseMove={handleMouseMove}>
            <section className="hero container">
                <div className="hero-content reveal active">
                    <span className="section-tag">🚀 Launch Your Career</span>
                    <h1 className="hero-title">Master <span className="gradient-text">Tech Skills</span><br />Land Top Roles.</h1>
                    <p className="section-desc" style={{ marginBottom: '40px', maxWidth: '500px' }}>
                        The all-in-one platform for Computer Science students. Learn with interactive modules, solve quizzes, and get direct internship placements.
                    </p>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}> 
                        <Link to="/courses" className="btn btn-primary">Explore Courses <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link to="/internships" className="btn btn-secondary"><i className="fa-solid fa-briefcase"></i> Find Internships</Link>
                    </div>
                    
                    <div className="hero-stats">
                        <div className="stat">
                            <h3>120+</h3>
                            <p>Verified Courses</p>
                        </div>
                        <div className="stat">
                            <h3>50k+</h3>
                            <p>Active Students</p>
                        </div>
                        <div className="stat">
                            <h3>96%</h3>
                            <p>Hiring Rate</p>
                        </div>
                    </div>
                </div>

                <div className="hero-visual reveal active" style={{ transitionDelay: '0.2s' }}>
                    <div className="code-window">
                        <div className="window-header">
                            <div className="dot red"></div><div className="dot yellow"></div><div className="dot green"></div>
                        </div>
                        <pre style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                            <span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e5c07b' }}>careerPath</span> = {'{'}{'\n'}
                            {'  '}<span style={{ color: '#d19a66' }}>learn</span>: [<span style={{ color: '#98c379' }}>"React"</span>, <span style={{ color: '#98c379' }}>"Python"</span>, <span style={{ color: '#98c379' }}>"AI"</span>],{'\n'}
                            {'  '}<span style={{ color: '#d19a66' }}>practice</span>: <span style={{ color: '#56b6c2' }}>true</span>,{'\n'}
                            {'  '}<span style={{ color: '#d19a66' }}>internship</span>: <span style={{ color: '#c678dd' }}>async</span> () ={'>'} {'{'}{'\n'}
                            {'    '}<span style={{ color: '#c678dd' }}>await</span> <span style={{ color: '#61afef' }}>Upskill</span>.<span style={{ color: '#61afef' }}>apply</span>();{'\n'}
                            {'    '}<span style={{ color: '#c678dd' }}>return</span> <span style={{ color: '#98c379' }}>"HIRED"</span>;{'\n'}
                            {'  '}{'}'}{'\n'}
                            {'}'};
                        </pre>
                    </div>
                    <div className="floating-icon" style={{ top: '-30px', right: '-30px', animation: 'float 4s ease-in-out infinite' }}>
                        <i className="fa-brands fa-python" style={{ color: '#3776ab', background: 'linear-gradient(135deg, #3776ab, #ffd343)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>
                    </div>
                    <div className="floating-icon" style={{ bottom: '-40px', left: '-20px', animation: 'float 5s ease-in-out infinite reverse' }}>
                        <i className="fa-brands fa-react" style={{ color: '#61dafb', background: 'linear-gradient(135deg, #61dafb, #ffffff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>
                    </div>
                </div>
            </section>

            <div className="logo-strip">
                <div className="container">
                    <p style={{ marginBottom: '30px', color: 'var(--primary)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 800, textAlign: 'center' }}>Trusted by industry leaders</p>
                    <div className="logo-grid">
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-microsoft"></i>
                        <i className="fa-brands fa-amazon"></i>
                        <i className="fa-brands fa-spotify"></i>
                        <i className="fa-brands fa-airbnb"></i>
                    </div>
                </div>
            </div>

            <section className="section-spacer container">
                <div className="section-header reveal">
                    <span className="section-tag">Why Upskill?</span>
                    <h2 className="section-title">Everything you need to succeed</h2>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div className="card-base reveal" style={{ padding: '40px' }}>
                        <div style={{ width: '70px', height: '70px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '24px', boxShadow: '0 10px 20px rgba(124, 58, 237, 0.1)' }}>
                            <i className="fa-solid fa-graduation-cap" style={{ fontSize: '2rem' }}></i>
                        </div>
                        <h3 style={{ marginBottom: '12px', fontSize: '1.5rem' }}>Structured Modules</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Don't get lost in tutorials. Follow our step-by-step module path with progress tracking and milestones.</p>
                    </div>
                    <div className="card-base reveal" style={{ padding: '40px' }}>
                        <div style={{ width: '70px', height: '70px', background: 'rgba(219, 39, 119, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', marginBottom: '24px', boxShadow: '0 10px 20px rgba(219, 39, 119, 0.1)' }}>
                            <i className="fa-solid fa-certificate" style={{ fontSize: '2rem' }}></i>
                        </div>
                        <h3 style={{ marginBottom: '12px', fontSize: '1.5rem' }}>Verified Certificates</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Earn industry-recognized certificates upon reaching 100% completion to boost your LinkedIn profile.</p>
                    </div>
                    <div className="card-base reveal" style={{ padding: '40px' }}>
                        <div style={{ width: '70px', height: '70px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginBottom: '24px', boxShadow: '0 10px 20px rgba(6, 182, 212, 0.1)' }}>
                            <i className="fa-solid fa-handshake" style={{ fontSize: '2rem' }}></i>
                        </div>
                        <h3 style={{ marginBottom: '12px', fontSize: '1.5rem' }}>Real Internships</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Direct integration with hiring partners. Apply with your course portfolio and skip the resume queue.</p>
                    </div>
                </div>
            </section>

            <section id="courses" className="section-spacer" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-tag">Explore Programs</span>
                        <h2 className="section-title">Featured Learning Paths</h2>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ padding: '10px 24px' }}>All</button>
                            <button className="btn btn-secondary" style={{ padding: '10px 24px' }}>Web Dev</button>
                            <button className="btn btn-secondary" style={{ padding: '10px 24px' }}>Data Science</button>
                            <button className="btn btn-secondary" style={{ padding: '10px 24px' }}>Cyber Security</button>
                        </div>
                    </div>

                    <div className="course-grid">
                        {courses.map((c, index) => (
                            <div className="card-base" key={index}>
                                <div className="course-thumb" style={{ backgroundImage: `url('${c.img}')` }}>
                                    <span className={`badge ${c.type === 'Free' ? 'free' : 'paid'}`}>{c.price}</span>
                                </div>
                                <div className="course-body">
                                    <div style={{ marginBottom: '15px' }}>
                                        {c.tags.map((t, i) => <span key={i} className="tag" style={{ marginRight: '5px' }}>{t}</span>)}
                                    </div>
                                    <h3 style={{ marginBottom: '10px', fontSize: '1.3rem' }}>{c.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '25px', flexGrow: 1 }}>
                                        Comprehensive modules covering all basics to advanced concepts with real-world projects.
                                    </p>
                                    
                                    <div className="my-progress">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, marginBottom: '5px' }}>
                                            <span>Progress</span>
                                            <span>{c.progress}%</span>
                                        </div>
                                        <div className="prog-track" style={{ marginTop: 0 }}>
                                            <div className="prog-fill" style={{ width: `${c.progress}%` }}></div>
                                        </div>
                                    </div>

                                    <Link to="/courses">
                                        <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>View Details</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex-center" style={{ marginTop: '60px' }}>
                        <Link to="/courses">
                             <button className="btn btn-secondary">View All Programs</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="lms-demo" className="section-spacer">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-tag">The Platform</span>
                        <h2 className="section-title">Learn with Focus</h2>
                        <p className="section-desc">Experience our distraction-free learning environment.</p>
                    </div>

                    <div className="lms-container reveal">
                        <div className="lms-sidebar">
                            <h4 style={{ marginBottom: '24px', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1.5px', fontWeight: 800 }}>Course Map</h4>
                            
                            <div className="module-item completed">
                                <span>1. Introduction to AI</span>
                                <i className="fa-solid fa-circle-check" style={{ color: 'var(--primary)' }}></i>
                            </div>
                            <div className="module-item completed">
                                <span>2. Setting up Python</span>
                                <i className="fa-solid fa-circle-check" style={{ color: 'var(--primary)' }}></i>
                            </div>
                            <div className="module-item active">
                                <span>3. Neural Networks Basics</span>
                                <div style={{ width: '10px', height: '10px', background: 'var(--secondary)', borderRadius: '50%', boxShadow: '0 0 10px var(--secondary)' }}></div>
                            </div>
                            <div className="module-item">
                                <span>4. Backpropagation</span>
                                <i className="fa-solid fa-lock" style={{ fontSize: '0.8rem' }}></i>
                            </div>
                              <div className="module-item">
                                <span>5. Final Project</span>
                                <i className="fa-solid fa-lock" style={{ fontSize: '0.8rem' }}></i>
                            </div>
                            
                            <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(236, 236, 236, 0.058)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Progress</span>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>45%</span>
                                </div>
                                <div className="prog-track" style={{ marginTop: 0 }}>
                                    <div className="prog-fill" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="lms-content">
                            <span className="section-tag" style={{ marginBottom: '15px' }}>Module 3</span>
                            <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>Understanding Neural Networks</h2>
                            <div className="video-placeholder">
                                <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', cursor: 'pointer', transition: '0.3s', border: '1px solid rgba(255,255,255,0.4)' }}>
                                    <i className="fa-solid fa-play" style={{ fontSize: '1.5rem', marginLeft: '5px', background: 'white', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>
                                </div>
                            </div>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                In this module, we will dive deep into the architecture of a basic neural network. You will learn about neurons, layers, weights, and biases through interactive visualizations.
                            </p>
                            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '25px' }}>
                                <button className="btn btn-secondary">Previous</button>
                                <button className="btn btn-primary">Mark Complete & Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="internships" className="section-spacer" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-tag">Career Opportunities</span>
                        <h2 className="section-title">Latest Internships</h2>
                        <p className="section-desc">Exclusive opportunities for top performers.</p>
                    </div>

                    <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {internships.map((i, index) => (
                            <div className="intern-row" key={index}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                                    <div className="company-logo"><i className="fa-solid fa-building"></i></div>
                                    <div>
                                        <h4 style={{ marginBottom: '6px', fontSize: '1.1rem' }}>{i.role}</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{i.company} • {i.location}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <span className="tag" style={{ fontSize: '0.8rem' }}>{i.type}</span>
                                    <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Apply Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex-center" style={{ marginTop: '40px' }}>
                         <Link to="/internships" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            View 50+ more opportunities <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="community" className="section-spacer">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
                        <div className="reveal">
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Daily Quizzes</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>Sharpen your skills with 5-minute challenges.</p>
                            
                            <div className="community-card">
                                <div style={{ fontSize: '2.5rem', background: '#e8f5e9', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px' }}>🐍</div>
                                <div style={{ flexGrow: 1 }}>
                                    <h4 style={{ marginBottom: '5px', fontSize: '1.2rem' }}>Python Logic Challenge</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>10 Questions • Hard Difficulty</p>
                                </div>
                                <button className="btn btn-secondary" style={{ borderRadius: '12px', width: '44px', height: '44px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fa-solid fa-chevron-right"></i></button>
                            </div>
                            
                            <div className="community-card">
                                <div style={{ fontSize: '2.5rem', background: '#e0f7fa', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px' }}>⚛️</div>
                                <div style={{ flexGrow: 1 }}>
                                    <h4 style={{ marginBottom: '5px', fontSize: '1.2rem' }}>React Hooks Basics</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>5 Questions • Easy Difficulty</p>
                                </div>
                                <button className="btn btn-secondary" style={{ borderRadius: '12px', width: '44px', height: '44px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </div>

                        <div className="reveal">
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Community Blog</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>Read success stories and tech trends.</p>
                            
                            <div className="community-card">
                                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=150&q=80" className="blog-img" alt="Blog 1" />
                                <div>
                                    <span style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>CAREER ADVICE</span>
                                    <h4 style={{ margin: '8px 0', fontSize: '1.1rem' }}>How I cracked Google Interview in 2025</h4>
                                    <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'underline' }}>Read article</a>
                                </div>
                            </div>
                            
                            <div className="community-card">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=150&q=80" className="blog-img" alt="Blog 2" />
                                <div>
                                    <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>TECH STACK</span>
                                    <h4 style={{ margin: '8px 0', fontSize: '1.1rem' }}>Why Next.js is winning over pure React</h4>
                                    <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'underline' }}>Read article</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;