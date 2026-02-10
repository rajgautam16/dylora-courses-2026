import React, { useState, useEffect, useRef, useCallback } from 'react';
import './CodePen.css';

const CodePen = ({ initialHtml = '', initialCss = '', initialJs = '', autoRun = true }) => {
    const [html, setHtml] = useState(initialHtml);
    const [css, setCss] = useState(initialCss);
    const [js, setJs] = useState(initialJs);
    const [activeTab, setActiveTab] = useState('html');
    const iframeRef = useRef(null);

    const runCode = useCallback(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const document = iframe.contentDocument || iframe.contentWindow.document;

        const code = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        padding: 20px;
                    }
                    ${css}
                </style>
            </head>
            <body>
                ${html}
                <script>
                    try {
                        ${js}
                    } catch (error) {
                        document.body.innerHTML += '<div style="color: red; padding: 20px; background: #ffebee; border-radius: 8px; margin-top: 20px;"><strong>Error:</strong> ' + error.message + '</div>';
                        console.error(error);
                    }
                </script>
            </body>
            </html>
        `;

        document.open();
        document.write(code);
        document.close();
    }, [html, css, js]);

    // Auto-run on mount and when auto-run is enabled
    useEffect(() => {
        if (autoRun) {
            const timeoutId = setTimeout(runCode, 500);
            return () => clearTimeout(timeoutId);
        }
    }, [html, css, js, autoRun, runCode]);

    const tabs = [
        { id: 'html', label: 'HTML', icon: '🌐' },
        { id: 'css', label: 'CSS', icon: '🎨' },
        { id: 'js', label: 'JS', icon: '⚡' }
    ];

    return (
        <div className="codepen-container">
            <div className="codepen-editor">
                <div className="editor-header">
                    <div className="editor-tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`editor-tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className="tab-icon">{tab.icon}</span>
                                <span className="tab-label">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                    <button className="run-button" onClick={runCode}>
                        <span className="run-icon">▶</span>
                        Run
                    </button>
                </div>

                <div className="editor-body">
                    <div className={`editor-panel ${activeTab === 'html' ? 'active' : ''}`}>
                        <textarea
                            className="code-editor"
                            value={html}
                            onChange={(e) => setHtml(e.target.value)}
                            placeholder="<!-- Write your HTML here -->"
                            spellCheck="false"
                        />
                    </div>

                    <div className={`editor-panel ${activeTab === 'css' ? 'active' : ''}`}>
                        <textarea
                            className="code-editor"
                            value={css}
                            onChange={(e) => setCss(e.target.value)}
                            placeholder="/* Write your CSS here */"
                            spellCheck="false"
                        />
                    </div>

                    <div className={`editor-panel ${activeTab === 'js' ? 'active' : ''}`}>
                        <textarea
                            className="code-editor"
                            value={js}
                            onChange={(e) => setJs(e.target.value)}
                            placeholder="// Write your JavaScript here"
                            spellCheck="false"
                        />
                    </div>
                </div>
            </div>

            <div className="codepen-preview">
                <div className="preview-header">
                    <span className="preview-title">
                        <span className="preview-icon">👁️</span>
                        Live Preview
                    </span>
                </div>
                <iframe
                    ref={iframeRef}
                    className="preview-frame"
                    title="Output"
                    sandbox="allow-scripts allow-modals allow-forms allow-popups allow-same-origin"
                    frameBorder="0"
                />
            </div>
        </div>
    );
};

export default CodePen;
