import React from 'react';
import { Layers, Database, Code, Terminal, Brain, Cpu } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Machine Learning & AI',
            icon: <Brain size={24} />,
            skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'NLP', 'Computer Vision', 'LLMs & RAG']
        },
        {
            title: 'System Architecture',
            icon: <Layers size={24} />,
            skills: ['Microservices', 'System Design', 'Event-Driven', 'API Gateway', 'Load Balancing']
        },
        {
            title: 'Backend Engineering',
            icon: <Terminal size={24} />,
            skills: ['Python', 'FastAPI', 'Node.js', 'Go', 'REST/GraphQL', 'WebSockets']
        },
        {
            title: 'Frontend Development',
            icon: <Code size={24} />,
            skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vanilla CSS', 'Redux']
        },
        {
            title: 'Data & Infrastructure',
            icon: <Database size={24} />,
            skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS/GCP']
        },
        {
            title: 'Systems & Algorithms',
            icon: <Cpu size={24} />,
            skills: ['C++', 'Data Structures', 'Algorithmic Optimization', 'Parallel Computing']
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title reveal">Technical Arsenal</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="skill-card glass reveal"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="card-header">
                                <div className="icon-wrapper glass">
                                    {category.icon}
                                </div>
                                <h3>{category.title}</h3>
                            </div>
                            <ul className="skill-list">
                                {category.skills.map(skill => (
                                    <li key={skill}>
                                        <span className="bullet"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
