import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
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
                        <span className="text-gradient">Engineer</span> &<br />
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
                        <a href="https://github.com/dell" target="_blank" rel="noreferrer" className="social-icon">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/dell" target="_blank" rel="noreferrer" className="social-icon">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:your.email@example.com" className="social-icon">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual reveal relative">
                    <div className="glass code-card code-card-1">
                        <div className="card-header">
                            <div className="dots">
                                <span></span><span></span><span></span>
                            </div>
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
                        </div>
                        <pre><code>
                            <span className="code-keyword">class</span> <span className="code-class">NeuralNet</span>:
                            <span className="code-keyword">def</span> <span className="code-func">__init__</span>(self):
                            self.layers = [<span className="code-string">"input"</span>, <span className="code-string">"output"</span>]

                            <span className="code-keyword">def</span> <span className="code-func">train</span>(self, data):
                            <span className="code-keyword">return</span> <span className="code-string">"Optimization complete"</span>
                        </code></pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
