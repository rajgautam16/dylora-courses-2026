import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Internships.css';

const Internships = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedFilter, setSelectedFilter] = useState('All Brands');
    const [bookmarkedJobs, setBookmarkedJobs] = useState(new Set());
    const [appliedJobs, setAppliedJobs] = useState(new Set());

    // Check if we came back from application form with applied status
    useEffect(() => {
        if (location.state?.appliedInternshipId) {
            setAppliedJobs(prev => new Set(prev).add(location.state.appliedInternshipId));
        }
    }, [location.state]);

    const filters = ['All Brands', 'Work from home', 'Part time', 'Engineering', 'Design', 'Data Science'];

    const internships = [
        {
            id: 1,
            title: 'Content Writing',
            company: 'Dylog',
            location: 'Mumbai',
            duration: '3 Months',
            salary: '₹8,000-12,000/month',
            badge: 'Beginner',
            responsibilities: [
                'Research and create engaging content',
                'Edit and proofread articles',
                'Manage content calendar'
            ],
            skills: 'English Proficiency • MS Word • Creative Writing',
            category: 'Engineering'
        },
        {
            id: 2,
            title: 'Campus Ambassador',
            company: 'TechCorp',
            location: 'Bangalore',
            duration: '6 Months',
            salary: '₹5,000-8,000/month + Incentives',
            badge: 'Learner',
            responsibilities: [
                'Represent company on campus',
                'Organize events and workshops',
                'Build student community'
            ],
            skills: 'Communication Skills • Social Media • Event Management',
            category: 'All Brands'
        },
        {
            id: 3,
            title: 'Marketing',
            company: 'BrandYess',
            location: 'Mumbai',
            duration: '4 Months',
            salary: '₹9,000-15,000/month',
            badge: 'Beginner',
            responsibilities: [
                'Assist in marketing campaigns',
                'Social media management',
                'Market research and analysis'
            ],
            skills: 'English Proficiency • MS Excel • Marketing Basics',
            category: 'Design'
        },
        {
            id: 4,
            title: 'Business Development',
            company: 'GlobalTech',
            location: 'Delhi',
            duration: '5 Months',
            salary: '₹10,000-18,000/month',
            badge: 'Learner',
            responsibilities: [
                'Client acquisition and outreach',
                'Lead generation activities',
                'Sales presentations and demos'
            ],
            skills: 'Communication • MS Office • Sales Skills',
            category: 'Data Science'
        }
    ];

    const toggleBookmark = (id) => {
        setBookmarkedJobs(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const handleApplyClick = (internship) => {
        if (!appliedJobs.has(internship.id)) {
            navigate('/apply', { state: { internship } });
        }
    };

    const filteredInternships = selectedFilter === 'All Brands'
        ? internships
        : internships.filter(intern => intern.category === selectedFilter);

    return (
        <div className="internships-page">
            <div className="container internships-container">
                {/* Header Section */}
                <div className="internships-header">
                    <span className="section-tag">CAREER OPPORTUNITIES</span>
                    <h1 className="internships-title gradient-text">Latest Internships</h1>
                    <p className="internships-subtitle">Shape your future with us</p>
                </div>

                {/* Filter Buttons */}
                <div className="filter-container">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                            onClick={() => setSelectedFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Internships Section */}
                <div className="internships-section">
                    <h2 className="section-heading">Internships</h2>

                    <div className="internships-list">
                        {filteredInternships.map((internship) => (
                            <div key={internship.id} className="internship-card">
                                {/* Bookmark Icon */}
                                <button
                                    className="bookmark-btn"
                                    onClick={() => toggleBookmark(internship.id)}
                                    aria-label="Bookmark"
                                >
                                    <i className={`fa-${bookmarkedJobs.has(internship.id) ? 'solid' : 'regular'} fa-bookmark`}></i>
                                </button>

                                {/* Card Header */}
                                <div className="internship-header">
                                    <div>
                                        <h3 className="internship-title">
                                            {internship.title}
                                            <span className={`badge-inline ${internship.badge.toLowerCase()}`}>
                                                {internship.badge}
                                            </span>
                                        </h3>
                                        <p className="company-name">{internship.company} - {internship.location}</p>
                                    </div>
                                </div>

                                {/* Meta Info */}
                                <div className="internship-meta">
                                    <div className="meta-item">
                                        <i className="fa-regular fa-clock"></i>
                                        <span>{internship.duration}</span>
                                    </div>
                                    <div className="meta-item">
                                        <i className="fa-regular fa-money-bill-1"></i>
                                        <span>{internship.salary}</span>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <div className="responsibilities">
                                    {internship.responsibilities.map((resp, index) => (
                                        <div key={index} className="responsibility-item">
                                            {index + 1}. {resp}
                                        </div>
                                    ))}
                                </div>

                                {/* Skills */}
                                <div className="skills-section">
                                    <p className="skills-text">{internship.skills}</p>
                                </div>

                                {/* Actions */}
                                <div className="card-actions">
                                    <button className="btn btn-secondary save-btn">Save</button>
                                    <button
                                        className={`btn ${appliedJobs.has(internship.id) ? 'btn-success' : 'btn-primary'} apply-btn`}
                                        onClick={() => handleApplyClick(internship)}
                                        disabled={appliedJobs.has(internship.id)}
                                    >
                                        {appliedJobs.has(internship.id) ? (
                                            <>
                                                <i className="fa-solid fa-check"></i> Applied
                                            </>
                                        ) : (
                                            'Apply'
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More */}
                    <div className="view-more-container">
                        <a href="#" className="view-more-link">View 100+ more opportunities ›</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Internships;