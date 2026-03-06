import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import './Hero.css';

const TYPING_STRINGS = ['Engineer', 'AI Builder', 'System Architect', 'ML Practitioner'];

const Hero = () => {
    const [typed, setTyped] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = TYPING_STRINGS[wordIndex];
        const speed = deleting ? 60 : 110;

        const timer = setTimeout(() => {
            if (!deleting) {
                setTyped(current.slice(0, charIndex + 1));
                if (charIndex + 1 === current.length) {
                    setTimeout(() => setDeleting(true), 1500);
                } else {
                    setCharIndex(c => c + 1);
                }
            } else {
                setTyped(current.slice(0, charIndex - 1));
                if (charIndex - 1 === 0) {
                    setDeleting(false);
                    setWordIndex(w => (w + 1) % TYPING_STRINGS.length);
                    setCharIndex(0);
                } else {
                    setCharIndex(c => c - 1);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [charIndex, deleting, wordIndex]);

    return (
        <section id="home" className="hero-section">
            {/* Background elements */}
            <div className="gradient-sphere sphere-1"></div>
            <div className="gradient-sphere sphere-2"></div>
            <div className="gradient-sphere sphere-3"></div>

            <div className="container hero-container">
                <div className="hero-content reveal">
                    <div className="greeting glass">
                        <span className="wave">👋</span> Hello, I am
                    </div>

                    <h1 className="hero-title">
                        <span className="text-gradient typing-text">{typed}<span className="cursor-blink">|</span></span><br />
                        System Architect.
                    </h1>

                    <p className="hero-description">
                        I build highly scalable systems, advanced ML models, and elegant web interfaces.
                        Transforming complex technical challenges into robust, premium solutions.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://www.github.com/bharatbushan03" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                            <Github size={20} />
                            <span className="social-tooltip">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/bharat-bushan-488686229/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                            <Linkedin size={20} />
                            <span className="social-tooltip">LinkedIn</span>
                        </a>
                        <a href="mailto:bharatbushan5320@gmail.com" className="social-icon" aria-label="Email">
                            <Mail size={20} />
                            <span className="social-tooltip">Email</span>
                        </a>
                    </div>

                    <div className="stats-row">
                        <div className="stat-item">
                            <span className="stat-number">1+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">∞</span>
                            <span className="stat-label">Curiosity</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual reveal relative">
                    <div className="glass code-card code-card-1">
                        <div className="card-header">
                            <div className="dots">
                                <span></span><span></span><span></span>
                            </div>
                            <span className="card-filename">buildSystem.js</span>
                        </div>
                        <pre><code>
                            <span className="code-keyword">async function</span> <span className="code-func">buildSystem</span>() {'{'}
                            <span className="code-keyword">const</span> ai = <span className="code-keyword">await</span> <span className="code-func">loadModel</span>();
                            <span className="code-keyword">const</span> ui = <span className="code-keyword">new</span> <span className="code-class">Interface</span>();

                            <span className="code-keyword">return</span> <span className="code-func">deploy</span>(ai, ui);
                            {'}'}
                        </code></pre>
                    </div>
                    <div className="glass code-card code-card-2">
                        <div className="card-header">
                            <div className="dots">
                                <span></span><span></span><span></span>
                            </div>
                            <span className="card-filename">neural_net.py</span>
                        </div>
                        <pre><code style={{ display: 'block', whiteSpace: 'pre' }}>
                            <span className="code-keyword">class</span> <span className="code-class">NeuralNet</span>:{'\n'}
                            {'  '}<span className="code-keyword">def</span> <span className="code-func">__init__</span>(self):{'\n'}
                            {'    '}self.layers = [<span className="code-string">"input"</span>, <span className="code-string">"output"</span>]{'\n'}
                            {'\n'}
                            {'  '}<span className="code-keyword">def</span> <span className="code-func">train</span>(self, data):{'\n'}
                            {'    '}<span className="code-keyword">return</span> <span className="code-string">"Optimization complete"</span>
                        </code></pre>
                    </div>

                    <div className="orbit-ring">
                        <div className="orbit-icon orbit-1"><Code2 size={16} /></div>
                        <div className="orbit-icon orbit-2">🧠</div>
                        <div className="orbit-icon orbit-3">⚡</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
