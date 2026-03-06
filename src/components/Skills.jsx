import React, { useState } from 'react';
import { Layers, Database, Code, Terminal, Brain, Cpu } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const skillCategories = [
        {
            title: 'Machine Learning & AI',
            icon: <Brain size={24} />,
            color: '#a855f7',
            skills: [
                { name: 'PyTorch', level: 90 },
                { name: 'TensorFlow', level: 85 },
                { name: 'Scikit-Learn', level: 88 },
                { name: 'NLP', level: 82 },
                { name: 'Computer Vision', level: 80 },
                { name: 'LLMs & RAG', level: 78 },
            ]
        },
        {
            title: 'System Architecture',
            icon: <Layers size={24} />,
            color: '#6366f1',
            skills: [
                { name: 'Microservices', level: 88 },
                { name: 'System Design', level: 90 },
                { name: 'Event-Driven', level: 82 },
                { name: 'API Gateway', level: 85 },
                { name: 'Load Balancing', level: 80 },
            ]
        },
        {
            title: 'Backend Engineering',
            icon: <Terminal size={24} />,
            color: '#22d3ee',
            skills: [
                { name: 'Python', level: 95 },
                { name: 'FastAPI', level: 88 },
                { name: 'Node.js', level: 80 },
                { name: 'Go', level: 70 },
                { name: 'REST/GraphQL', level: 85 },
                { name: 'WebSockets', level: 78 },
            ]
        },
        {
            title: 'Frontend Development',
            icon: <Code size={24} />,
            color: '#f59e0b',
            skills: [
                { name: 'React', level: 90 },
                { name: 'Next.js', level: 82 },
                { name: 'TypeScript', level: 78 },
                { name: 'TailwindCSS', level: 85 },
                { name: 'Vanilla CSS', level: 88 },
                { name: 'Redux', level: 75 },
            ]
        },
        {
            title: 'Data & Infrastructure',
            icon: <Database size={24} />,
            color: '#10b981',
            skills: [
                { name: 'PostgreSQL', level: 85 },
                { name: 'MongoDB', level: 80 },
                { name: 'Redis', level: 78 },
                { name: 'Docker', level: 88 },
                { name: 'Kubernetes', level: 72 },
                { name: 'AWS/GCP', level: 75 },
            ]
        },
        {
            title: 'Systems & Algorithms',
            icon: <Cpu size={24} />,
            color: '#f43f5e',
            skills: [
                { name: 'C++', level: 80 },
                { name: 'Data Structures', level: 90 },
                { name: 'Algo Optimization', level: 85 },
                { name: 'Parallel Computing', level: 75 },
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title reveal">Technical Arsenal</h2>
                <p className="section-subtitle reveal">Click any card to explore skill proficiency</p>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className={`skill-card glass reveal ${activeCategory === index ? 'expanded' : ''}`}
                            style={{ transitionDelay: `${index * 0.08}s`, '--card-color': category.color }}
                            onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                        >
                            <div className="skill-card-header">
                                <div className="icon-wrapper" style={{ background: `${category.color}22`, color: category.color }}>
                                    {category.icon}
                                </div>
                                <div>
                                    <h3>{category.title}</h3>
                                    <span className="skill-count">{category.skills.length} skills</span>
                                </div>
                                <span className="expand-icon">{activeCategory === index ? '−' : '+'}</span>
                            </div>

                            <div className="skill-tags">
                                {category.skills.map(skill => (
                                    <span key={skill.name} className="skill-tag">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>

                            {activeCategory === index && (
                                <div className="skill-bars">
                                    {category.skills.map(skill => (
                                        <div key={skill.name} className="skill-bar-item">
                                            <div className="skill-bar-label">
                                                <span>{skill.name}</span>
                                                <span className="skill-pct">{skill.level}%</span>
                                            </div>
                                            <div className="skill-bar-track">
                                                <div
                                                    className="skill-bar-fill"
                                                    style={{ '--fill-width': `${skill.level}%`, background: category.color }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
