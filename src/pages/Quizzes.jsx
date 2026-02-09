import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Quizzes.css';

const Quizzes = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [codeOutput, setCodeOutput] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [stats, setStats] = useState({ questions: 0, topics: 0, learners: 0 });
    const [scrollElements, setScrollElements] = useState([]);
    const sectionsRef = useRef({});

    const staticStats = [
        { number: '500+', label: 'Quiz Questions' },
        { number: '50+', label: 'Quiz Topics' },
        { number: '10k+', label: 'Daily Participants' }
    ];

    const quizzes = [
        {
            id: 1,
            title: 'What does HTML stand for?',
            category: 'Web Fundamentals',
            difficulty: 'Beginner',
            icon: '🌐',
            questions: [
                {
                    question: 'What does HTML stand for?',
                    options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
                    correct: 0
                },
                {
                    question: 'Which tag is used for the largest heading?',
                    options: ['<h6>', '<h1>', '<head>', '<header>'],
                    correct: 1
                },
                {
                    question: 'What is the correct HTML element for inserting a line break?',
                    options: ['<lb>', '<br>', '<break>', '<line>'],
                    correct: 1
                }
            ],
            description: 'Test your knowledge on HTML basics and fundamentals.',
            code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is HTML</p>
</body>
</html>`,
            category: 'Web Fundamentals'
        },
        {
            id: 2,
            title: 'CSS Styling Basics',
            category: 'Styling',
            difficulty: 'Beginner',
            icon: '🎨',
            questions: [
                {
                    question: 'What does CSS stand for?',
                    options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Common Style Sheets'],
                    correct: 0
                },
                {
                    question: 'Which is the correct CSS syntax?',
                    options: ['{body: color=black;}', 'body {color: black;}', '{body; color: black;}', 'body: color: black;'],
                    correct: 1
                },
                {
                    question: 'How do you select an element with id "main"?',
                    options: ['.main', '#main', '*main', '@main'],
                    correct: 1
                }
            ],
            description: 'Master the basics of CSS styling and selectors.',
            code: `body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: Arial, sans-serif;
    color: white;
}

h1 {
    font-size: 2.5rem;
    animation: slideIn 0.5s ease;
}

@keyframes slideIn {
    from { opacity: 0; }
    to { opacity: 1; }
}`,
            category: 'Styling'
        },
        {
            id: 3,
            title: 'JavaScript Fundamentals',
            category: 'Programming',
            difficulty: 'Intermediate',
            icon: '⚡',
            questions: [
                {
                    question: 'What is the correct way to write a JavaScript array?',
                    options: ['var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green")', 'var colors = {1: "red", 2: "green"}'],
                    correct: 1
                },
                {
                    question: 'How do you declare a JavaScript variable?',
                    options: ['v carName;', 'var carName;', 'variable carName;', 'declare carName;'],
                    correct: 1
                },
                {
                    question: 'What is the correct conditional statement?',
                    options: ['if i = 5 then', 'if i == 5 then', 'if (i == 5)', 'if i = 5'],
                    correct: 2
                }
            ],
            description: 'Test your JavaScript fundamentals and core concepts.',
            code: `function greet(name) {
    return \`Hello, \${name}!\`;
}

const message = greet('Developer');
console.log(message);

// Event listener
document.addEventListener('click', () => {
    console.log('Page clicked!');
});`,
            category: 'Programming'
        }
    ];

    const categories = ['All', 'Web Fundamentals', 'Styling', 'Programming'];

    // Animated Counter Effect
    useEffect(() => {
        const animateCounter = (target, duration = 2000) => {
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                setStats({
                    questions: Math.floor(current * (500 / target)),
                    topics: Math.floor(current * (50 / target)),
                    learners: Math.floor(current * (10000 / target))
                });
            }, 16);
        };

        animateCounter(100);
    }, []);

    // Scroll Animation Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        document.querySelectorAll('.scroll-reveal').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [selectedQuiz]);

    // Filter quizzes by category
    const filteredQuizzes = selectedCategory === 'All' 
        ? quizzes 
        : quizzes.filter(quiz => quiz.category === selectedCategory);

    const handleStartQuiz = (quiz) => {
        setSelectedQuiz(quiz);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setCodeOutput(quiz.code);
    };

    const handleAnswerClick = (optionIndex) => {
        if (optionIndex === selectedQuiz.questions[currentQuestion].correct) {
            setScore(score + 1);
        }
        
        if (currentQuestion + 1 < selectedQuiz.questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRetryQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    const handleRunCode = () => {
        try {
            if (selectedQuiz?.id === 1) {
                setCodeOutput('✓ HTML rendered successfully!');
            } else if (selectedQuiz?.id === 2) {
                setCodeOutput('✓ CSS applied successfully!');
            } else {
                eval(selectedQuiz?.code);
                setCodeOutput('✓ Code executed successfully! Check console.');
            }
        } catch (error) {
            setCodeOutput(`Error: ${error.message}`);
        }
    };

    const handleBackToQuizzes = () => {
        setSelectedQuiz(null);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    if (selectedQuiz) {
        return (
            <div className="quizzes-page">
                <div className="quiz-navigation">
                    <button className="back-btn" onClick={handleBackToQuizzes}>
                        ← Back to Quizzes
                    </button>
                </div>

                {!showResult ? (
                    <div className="quiz-wrapper">
                        <div className="quiz-container">
                            <div className="quiz-header">
                                <h2>{selectedQuiz.title}</h2>
                                <div className="quiz-progress">
                                    <div className="progress-bar">
                                        <div 
                                            className="progress-fill" 
                                            style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="progress-text">
                                        Question {currentQuestion + 1} of {selectedQuiz.questions.length}
                                    </p>
                                </div>
                            </div>

                            <div className="question-container">
                                <h3 className="question-text">
                                    {selectedQuiz.questions[currentQuestion].question}
                                </h3>

                                <div className="options-grid">
                                    {selectedQuiz.questions[currentQuestion].options.map((option, index) => (
                                        <button
                                            key={index}
                                            className="option-btn"
                                            onClick={() => handleAnswerClick(index)}
                                        >
                                            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                                            <span className="option-text">{option}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Try It Yourself Section */}
                        <div className="code-editor-section">
                            <div className="try-yourself-header">
                                <h3>🚀 Try It Yourself</h3>
                                <p>Edit the code and see the results instantly!</p>
                            </div>
                            
                            <div className="editor-container">
                                <div className="editor-header">
                                    <h3>CODE EDITOR</h3>
                                    <button className="run-btn" onClick={handleRunCode}>
                                        ▶ Run
                                    </button>
                                </div>
                                
                                <div className="editor-content">
                                    <div className="code-input">
                                        <pre><code>{selectedQuiz.code}</code></pre>
                                    </div>
                                    
                                    <div className="code-output">
                                        <div className="output-header">OUTPUT</div>
                                        <pre><code>{codeOutput || selectedQuiz.code}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="result-container">
                        <div className="result-header">
                            <div className="result-score">
                                <div className="score-circle">
                                    <span className="score-number">{score}</span>
                                    <span className="score-total">/{selectedQuiz.questions.length}</span>
                                </div>
                            </div>

                            <h2>Quiz Completed!</h2>
                            <p className="result-message">
                                {score === selectedQuiz.questions.length 
                                    ? '🎉 Perfect Score! You\'re a master!' 
                                    : score >= selectedQuiz.questions.length * 0.8 
                                    ? '🌟 Great Job! Almost there!'
                                    : score >= selectedQuiz.questions.length * 0.6
                                    ? '👍 Good Effort! Keep practicing!'
                                    : '💪 Keep practicing, you\'ll get better!'}
                            </p>

                            <div className="result-stats">
                                <div className="stat">
                                    <span className="stat-label">Correct Answers</span>
                                    <span className="stat-value">{score}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">Wrong Answers</span>
                                    <span className="stat-value">{selectedQuiz.questions.length - score}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">Accuracy</span>
                                    <span className="stat-value">{Math.round((score / selectedQuiz.questions.length) * 100)}%</span>
                                </div>
                            </div>

                            <div className="result-actions">
                                <button className="btn-retry" onClick={handleRetryQuiz}>
                                    🔄 Retake Quiz
                                </button>
                                <button className="btn-back" onClick={handleBackToQuizzes}>
                                    ← Back to Quizzes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="quizzes-page" style={{ paddingTop: '80px' }}>
            {/* Navigation Buttons */}
            <div className="quizzes-nav">
                <Link to="/" className="nav-home-btn">
                    ← Back to Home
                </Link>
            </div>

            {/* Header Section */}
            <section className="quizzes-header">
                <div className="quizzes-header-content">
                    <h1 className="quizzes-title">Master Tech Skills</h1>
                    <p className="quizzes-subtitle">Daily Quizzes & Challenges</p>
                    <p className="quizzes-description">
                        Test your knowledge with interactive quizzes. Learn, practice, and master tech skills.
                    </p>
                </div>

            {/* Stats Section */}
            <div className="quizzes-stats scroll-reveal">
                {[
                    { number: stats.questions, label: 'Quiz Questions', icon: '❓' },
                    { number: stats.topics, label: 'Quiz Topics', icon: '📚' },
                    { number: stats.learners, label: 'Daily Participants', icon: '👥' }
                ].map((stat, index) => (
                    <div key={index} className="quizzes-stat-card stat-card-hover">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-number animated-number">{stat.number}+</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
            </section>

            {/* Quizzes Grid Section */}
            <section className="quizzes-grid-section">
                <div className="quizzes-container">
                    {/* Category Filter */}
                    <div className="category-filter scroll-reveal">
                        <h3 className="filter-title">Filter by Category</h3>
                        <div className="category-buttons">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    <span className="btn-ripple"></span>
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="quizzes-grid">
                        {filteredQuizzes.map((quiz) => (
                            <div key={quiz.id} className="quiz-card scroll-reveal card-hover">
                                <div className="card-glow"></div>
                                <div className="quiz-card-header">
                                    <div className="quiz-icon">{quiz.icon}</div>
                                    <span className="quiz-difficulty">{quiz.difficulty}</span>
                                </div>
                                
                                <h3 className="quiz-card-title">{quiz.title}</h3>
                                <p className="quiz-card-description">{quiz.description}</p>
                                
                                <div className="quiz-info">
                                    <span className="quiz-category">📚 {quiz.category}</span>
                                    <span className="quiz-count">❓ {quiz.questions.length} Questions</span>
                                </div>
                                
                                <button 
                                    className="quiz-start-btn"
                                    onClick={() => handleStartQuiz(quiz)}
                                >
                                    Start Quiz →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quizzes;