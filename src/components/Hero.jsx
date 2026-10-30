import React, { lazy, Suspense, useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_EMAIL, heroStats } from '../data/portfolio';
import './Hero.css';

const HeroScene = lazy(() => import('./HeroScene'));

const TYPING_STRINGS = ['Generative AI Developer', 'Agentic Systems', 'LLM Engineering', 'Machine Learning'];

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
                        Bharat Bushan<br />
                        <span className="text-gradient">Lashotra</span>
                    </h1>
                    <p className="hero-role">
                        <span className="text-gradient">{typed}</span>
                        <span className="cursor-blink">|</span>
                    </p>

                    <p className="hero-description">
                        I build agentic systems, RAG products, and machine learning tools.
                        Recent work includes a self-defending language model, a carpool app, and campus AI assistants.
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
                        <a href={`mailto:${CONTACT_EMAIL}`} className="social-icon" aria-label="Email">
                            <Mail size={20} />
                            <span className="social-tooltip">Email</span>
                        </a>
                    </div>

                    <div className="stats-row">
                        {heroStats.map((stat, index) => (
                            <React.Fragment key={stat.label}>
                                {index > 0 ? <div className="stat-divider"></div> : null}
                                <div className="stat-item">
                                    <span className="stat-number">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="hero-visual reveal">
                    <Suspense fallback={<div className="hero-canvas" />}>
                        <HeroScene />
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default Hero;
