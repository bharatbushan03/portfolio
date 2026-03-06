import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'AI Smart Classroom',
            description: 'An advanced computer vision system integrating RTSP/IP cameras to monitor and analyze classroom environments in real-time. Features automated attendance, engagement tracking, and behavior analysis using deep learning models (PyTorch/YOLO).',
            tags: ['Python', 'Computer Vision', 'PyTorch', 'RTSP', 'OpenCV'],
            github: '#',
            demo: '#',
            featured: true
        },
        {
            title: 'Multi-Agent RAG System',
            description: 'A sophisticated Multimodal Retrieval-Augmented Generation system. Orchestrates multiple AI agents using LangGraph for complex document analysis, reasoning, and synthesis with a scalable FastAPI backend and Next.js frontend.',
            tags: ['FastAPI', 'LangGraph', 'Next.js', 'LLMs', 'Vector DB', 'Python'],
            github: '#',
            demo: '#',
            featured: true
        },
        {
            title: 'Low-Latency Trading Bot',
            description: 'A high-performance algorithmic trading system built for Binance Futures. Features real-time market data processing, sub-millisecond execution engines, robust risk-management protocols, and extensive error handling and logging systems.',
            tags: ['Python', 'System Architecture', 'Algorithmic Trading', 'AsyncIO', 'REST', 'WebSockets'],
            github: '#',
            demo: '#',
            featured: false
        },
        {
            title: 'Neural Machine Translation Model',
            description: 'A custom, end-to-end machine translation model with automatic source language detection. Built from scratch with transformer architectures to translate complex technical documents across multiple languages with high BLEU scores.',
            tags: ['PyTorch', 'Transformers', 'NLP', 'Deep Learning'],
            github: '#',
            demo: '#',
            featured: false
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title reveal">Featured Works</h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`project-card glass reveal ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="project-content">
                                <div className="project-header">
                                    <div className="project-type">
                                        {project.featured ? 'Featured Project' : 'Project'}
                                    </div>
                                    <div className="project-links">
                                        <a href={project.github} className="icon-link"><Github size={20} /></a>
                                        <a href={project.demo} className="icon-link"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="project-title">{project.title}</h3>

                                <div className="project-description glass">
                                    <p>{project.description}</p>
                                </div>

                                <ul className="project-tags">
                                    {project.tags.map(tag => (
                                        <li key={tag}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
