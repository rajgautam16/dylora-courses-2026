import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ["All", "Data Science", "Web Development", "Mobile Apps", "Game Dev", "AI & ML", "Career Growth", "Interview Prep"];

  const blogPosts = [
    {
      id: 1,
      title: "Data Analyst Roadmap 2026",
      description: "Beginner to job-ready step-by-step guide with tools, projects, and interview preparation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      author: { name: "Alex Johnson", avatar: "AJ" },
      date: "Dec 10, 2025",
      readTime: "6 min read",
      category: "Data Science"
    },
    {
      id: 2,
      title: "Modern Web Development Stack",
      description: "Master React, Next.js, Tailwind CSS and build responsive, high-performance applications.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      author: { name: "Maria Garcia", avatar: "MG" },
      date: "Dec 5, 2025",
      readTime: "10 min read",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Unity Game Development Guide",
      description: "Create & publish your first game with Unity, from concept to deployment on Steam.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
      author: { name: "Tom Kim", avatar: "TK" },
      date: "Nov 28, 2025",
      readTime: "12 min read",
      category: "Game Dev"
    },
    {
      id: 4,
      title: "IT Career Growth Strategies",
      description: "Salary negotiation, skill development, and future scope in the tech industry.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      author: { name: "Rachel Davis", avatar: "RD" },
      date: "Nov 22, 2025",
      readTime: "7 min read",
      category: "Career Growth"
    },
    {
      id: 5,
      title: "AI & Machine Learning Basics",
      description: "Start your AI journey with practical Python projects and real-world applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      author: { name: "Sam Patel", avatar: "SP" },
      date: "Nov 15, 2025",
      readTime: "9 min read",
      category: "AI & ML"
    },
    {
      id: 6,
      title: "Flutter Mobile App Development",
      description: "Build cross-platform iOS and Android apps with a single codebase using Flutter.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
      author: { name: "Lisa Wang", avatar: "LW" },
      date: "Nov 8, 2025",
      readTime: "11 min read",
      category: "Mobile Apps"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-component-wrapper">
      {/* Header Section */}
      <div className="blog-component-header">
        <h1>Master Tech Skills Through Our Blog</h1>
        <p>Learn with clarity. Grow with confidence. Dive into expert tutorials, career guides, and industry insights 💜</p>
        <div className="blog-component-search-container">
          <div className="blog-component-search-icon">🔍</div>
          <input 
            type="text" 
            className="blog-component-search-input"
            placeholder="Search blogs, tutorials, guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="blog-component-categories-section">
        <h2>Explore Categories</h2>
        <p>Filter content by your interests</p>
        <div className="blog-component-categories">
          {categories.map((category) => (
            <span
              key={category}
              className={`blog-component-category ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Blog */}
      <section className="blog-component-featured-section">
        <div className="blog-component-featured">
          <div className="blog-component-featured-content">
            <div className="blog-component-featured-tag">FEATURED</div>
            <h2>The Complete 2026 Tech Career Roadmap</h2>
            <p>Discover the fastest-growing tech roles, essential skills, and salary insights to plan your career transformation in the coming year.</p>
            <div className="blog-component-meta">
              <div className="blog-component-author">
                <div className="blog-component-author-avatar">JS</div>
                <span>Jane Smith</span>
              </div>
              <div>Dec 15, 2025 • 8 min read</div>
            </div>
            <button className="blog-component-featured-btn">Read Featured Article</button>
          </div>
          <div className="blog-component-featured-img">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Featured Blog" />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-component-grid-section">
        <h2>Latest Articles</h2>
        <div className="blog-component-grid">
          {filteredPosts.map((post) => (
            <div className="blog-component-card" key={post.id}>
              <img src={post.image} alt={post.title} />
              <div className="blog-component-card-category">{post.category}</div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="blog-component-meta">
                <div className="blog-component-author">
                  <div className="blog-component-author-avatar">{post.author.avatar}</div>
                  <span>{post.author.name}</span>
                </div>
                <div>{post.date} • {post.readTime}</div>
              </div>
              <button className="blog-component-read-btn">Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Big Image Sections */}
      <section className="blog-component-big-image-section">
        <div className="blog-component-big-image">
          <div>
            <h2>Hands-On Learning Experience</h2>
            <p>Our blog doesn't just teach theory. Each article comes with practical projects, code examples, and real-world applications that you can implement immediately. Learn by doing with our step-by-step tutorials and downloadable resources.</p>
            <p>Join our community of 50,000+ developers who are building their portfolios while learning.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Hands-On Learning" />
        </div>
      </section>

      <section className="blog-component-big-image-section">
        <div className="blog-component-big-image reverse">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Career Training" />
          <div>
            <h2>Career-Focused Training</h2>
            <p>Learn exactly what companies are looking for in 2026. Our content is regularly updated based on current job market demands and industry trends.</p>
            <p>We partner with tech recruiters and hiring managers to ensure our tutorials align with real-world job requirements, giving you a competitive edge in interviews.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="blog-component-newsletter">
        <h2>Stay Updated With Tech Trends</h2>
        <p>Subscribe to our weekly newsletter and get the latest articles, tutorials, and career advice directly in your inbox. Join 25,000+ subscribers who are advancing their tech careers.</p>
        <div className="blog-component-newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button className="blog-component-subscribe-btn">Subscribe</button>
        </div>
      </section>

      {/* Video Section */}
      <section className="blog-component-video-section">
        <div className="blog-component-video-box">
          <h2>Upcoming Video Tutorials 🎥</h2>
          <p>High-quality recorded & live sessions with interactive coding exercises</p>
          <div className="blog-component-video-container">
            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f" alt="Video Tutorial" />
            <div className="blog-component-play-btn">▶</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;