import React, { useState } from 'react';
import '../styles/ApplicationForm.css';

const ApplicationForm = ({ isOpen, onClose, internship, onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        whatsapp: '',
        address: '',
        city: '',
        state: '',
        pinCode: '',
        country: '',
        collegeName: '',
        degree: '',
        graduationYear: '',
        specialization: '',
        resume: null,
        motivation: '',
        availability: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            resume: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(internship.id, formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="form-container">
                    {/* Header */}
                    <div className="form-header">
                        <button className="back-btn" onClick={onClose}>
                            <i className="fa-solid fa-arrow-left"></i> Back to Listings
                        </button>
                        <button className="toggle-theme-btn">
                            <i className="fa-solid fa-circle-half-stroke"></i> Toggle Theme
                        </button>
                    </div>

                    {/* Form Badge */}
                    <div className="form-badge">
                        <span className="badge-text">Content Writing Internship</span>
                    </div>

                    {/* Form Title */}
                    <div className="form-title-section">
                        <h1 className="form-title">Application Form</h1>
                        <p className="form-subtitle">Fill in your details to apply for this internship</p>
                    </div>

                    {/* Application Form */}
                    <form onSubmit={handleSubmit} className="application-form">
                        {/* Name Fields */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">
                                    First Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">
                                    Last Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email">
                                Email Address <span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="yourname@example.com"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="form-group">
                            <label htmlFor="phone">
                                Phone Number <span className="required">*</span>
                            </label>
                            <div className="phone-input">
                                <select className="country-code">
                                    <option value="+91">🇮🇳 +91</option>
                                </select>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="9876543210"
                                    required
                                />
                            </div>
                        </div>

                        {/* WhatsApp Number */}
                        <div className="form-group">
                            <label htmlFor="whatsapp">
                                WhatsApp Number <span className="required">*</span>
                            </label>
                            <div className="phone-input">
                                <select className="country-code">
                                    <option value="+91">🇮🇳 +91</option>
                                </select>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="9876543210"
                                    required
                                />
                            </div>
                        </div>

                        {/* Full Address */}
                        <div className="form-group">
                            <label htmlFor="address">
                                Full Address <span className="required">*</span>
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Street address, apartment/building/floor number"
                                rows="3"
                                required
                            />
                        </div>

                        {/* City and State */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="city">
                                    City <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Mumbai"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">
                                    State <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="Maharashtra"
                                    required
                                />
                            </div>
                        </div>

                        {/* Pin Code and Country */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="pinCode">
                                    Pin Code <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="pinCode"
                                    name="pinCode"
                                    value={formData.pinCode}
                                    onChange={handleChange}
                                    placeholder="400001"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">
                                    Country <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="India"
                                    required
                                />
                            </div>
                        </div>

                        {/* College Name */}
                        <div className="form-group">
                            <label htmlFor="collegeName">
                                College/University Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="collegeName"
                                name="collegeName"
                                value={formData.collegeName}
                                onChange={handleChange}
                                placeholder="Enter your college or university name"
                                required
                            />
                        </div>

                        {/* Degree and Graduation Year */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="degree">
                                    Degree <span className="required">*</span>
                                </label>
                                <select
                                    id="degree"
                                    name="degree"
                                    value={formData.degree}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select your degree</option>
                                    <option value="btech">B.Tech</option>
                                    <option value="bsc">B.Sc</option>
                                    <option value="bcom">B.Com</option>
                                    <option value="ba">B.A</option>
                                    <option value="mtech">M.Tech</option>
                                    <option value="msc">M.Sc</option>
                                    <option value="mba">MBA</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="graduationYear">
                                    Expected Graduation Year <span className="required">*</span>
                                </label>
                                <select
                                    id="graduationYear"
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select year</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                </select>
                            </div>
                        </div>

                        {/* Specialization */}
                        <div className="form-group">
                            <label htmlFor="specialization">
                                Specialization/Major <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="specialization"
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleChange}
                                placeholder="e.g. Computer Science, Marketing, English Literature"
                                required
                            />
                        </div>

                        {/* Resume Upload */}
                        <div className="form-group">
                            <label htmlFor="resume">
                                Upload Resume (PDF) <span className="required">*</span>
                            </label>
                            <div className="file-upload">
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    onChange={handleFileChange}
                                    accept=".pdf"
                                    required
                                />
                                <label htmlFor="resume" className="file-upload-label">
                                    <i className="fa-solid fa-upload"></i> Choose PDF file
                                </label>
                                {formData.resume && (
                                    <span className="file-name">{formData.resume.name}</span>
                                )}
                            </div>
                            <small className="file-info">No file selected</small>
                        </div>

                        {/* Motivation */}
                        <div className="form-group">
                            <label htmlFor="motivation">
                                Why do you want this internship? <span className="required">*</span>
                            </label>
                            <textarea
                                id="motivation"
                                name="motivation"
                                value={formData.motivation}
                                onChange={handleChange}
                                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                rows="5"
                                required
                            />
                        </div>

                        {/* Availability */}
                        <div className="form-group">
                            <label htmlFor="availability">
                                When can you start? <span className="required">*</span>
                            </label>
                            <select
                                id="availability"
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select availability</option>
                                <option value="immediately">Immediately</option>
                                <option value="1week">Within 1 week</option>
                                <option value="2weeks">Within 2 weeks</option>
                                <option value="1month">Within 1 month</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="form-actions">
                            <button type="submit" className="submit-btn">
                                Submit Application
                            </button>
                        </div>

                        {/* Confirmation Note */}
                        <p className="confirmation-note">
                            <i className="fa-regular fa-envelope"></i>
                            You will receive a confirmation email once your application is submitted. We'll review your application and get back to you within 5-7 business days.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;
