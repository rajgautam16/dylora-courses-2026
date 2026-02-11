import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || ''; // Get ?q=... from URL
    const [results, setResults] = useState({ courses: [], internships: [] });

    // --- YOUR DATA (Moved here for searching) ---
    // In the future, you can import this from a 'data.js' file or fetch from Backend
    const allCourses = [
        {
            title: "Full Stack MERN Bootcamp",
            tags: ["Web Dev", "React", "Node"],
            img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
            type: "Paid", price: "Rs.4999", progress: 45
        },
        {
            title: "Data Science with Python",
            tags: ["Data", "Python", "ML"],
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
            type: "Free", price: "Free", progress: 10
        },
        {
            title: "Ethical Hacking Zero to Hero",
            tags: ["Security", "Linux", "Network"],
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
            type: "Paid", price: "Rs.8999", progress: 0
        }
    ];

    const allInternships = [
        { role: "Frontend Developer", company: "Adobe", location: "Bangalore", type: "Paid" },
        { role: "Machine Learning Intern", company: "Google", location: "Hyderabad", type: "Paid" },
        { role: "UI/UX Designer", company: "Zomato", location: "Gurgaon", type: "Stipend" },
    ];

    // --- SEARCH LOGIC ---
    useEffect(() => {
        const lowerQuery = query.toLowerCase();

        const filteredCourses = allCourses.filter(course => 
            course.title.toLowerCase().includes(lowerQuery) ||
            course.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        );

        const filteredInternships = allInternships.filter(intern => 
            intern.role.toLowerCase().includes(lowerQuery) ||
            intern.company.toLowerCase().includes(lowerQuery)
        );

        setResults({ courses: filteredCourses, internships: filteredInternships });
    }, [query]);

    return (
        <main className="section-spacer" style={{ paddingTop: '120px', minHeight: '80vh' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Search Results</span>
                    <h2 className="section-title">
                        {query ? `Results for "${query}"` : "Search for anything"}
                    </h2>
                </div>

                {/* --- NO RESULTS STATE --- */}
                {results.courses.length === 0 && results.internships.length === 0 && (
                    <div className="flex-center" style={{ flexDirection: 'column', gap: '20px', opacity: 0.7 }}>
                        <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '3rem', color: 'var(--text-muted)' }}></i>
                        <p className="section-desc">We couldn't find anything matching your search.</p>
                        <Link to="/courses" className="btn btn-primary">Browse All Courses</Link>
                    </div>
                )}

                {/* --- COURSES RESULTS --- */}
                {results.courses.length > 0 && (
                    <div style={{ marginBottom: '80px' }}>
                        <h3 style={{ marginBottom: '30px', borderLeft: '4px solid var(--primary)', paddingLeft: '15px' }}>
                            Courses Found ({results.courses.length})
                        </h3>
                        <div className="course-grid">
                            {results.courses.map((c, index) => (
                                <div className="card-base" key={index}>
                                    <div className="course-thumb" style={{ backgroundImage: `url('${c.img}')` }}>
                                        <span className={`badge ${c.type === 'Free' ? 'free' : 'paid'}`}>{c.price}</span>
                                    </div>
                                    <div className="course-body">
                                        <div style={{ marginBottom: '15px' }}>
                                            {c.tags.map((t, i) => <span key={i} className="tag" style={{ marginRight: '5px' }}>{t}</span>)}
                                        </div>
                                        <h3 style={{ marginBottom: '10px', fontSize: '1.3rem' }}>{c.title}</h3>
                                        <Link to="/courses" style={{ marginTop: 'auto' }}>
                                            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- INTERNSHIP RESULTS --- */}
                {results.internships.length > 0 && (
                    <div>
                        <h3 style={{ marginBottom: '30px', borderLeft: '4px solid var(--accent)', paddingLeft: '15px' }}>
                            Internships Found ({results.internships.length})
                        </h3>
                        <div className="reveal active">
                            {results.internships.map((i, index) => (
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
                                        <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Apply</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Search;