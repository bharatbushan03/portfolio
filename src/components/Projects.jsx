import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Emotion-Aware Conversational AI',
            description: 'A production-grade system that detects 27+ human emotions in real-time using RoBERTa, maintains emotional memory across sessions with ChromaDB, and generates empathetic responses via Google Flan-T5. Features a React + TypeScript dashboard with full Docker deployment.',
            tags: ['Python', 'FastAPI', 'PyTorch', 'React', 'TypeScript', 'ChromaDB', 'Docker'],
            github: 'https://github.com/bharatbushan03/Emotion-Aware-Conversational-AI-System',
            demo: '#',
            featured: true
        },
        {
            title: 'MIETY AI – Student Assistant Chatbot',
            description: 'A RAG-powered chatbot for MIET Jammu students, answering questions about admissions, courses, fees, placements, and campus life. Built with FastAPI, Pinecone vector search, and Qwen2.5-72B for accurate, context-aware responses.',
            tags: ['Python', 'FastAPI', 'Pinecone', 'RAG', 'HuggingFace', 'Docker'],
            github: 'https://github.com/bharatbushan03/student-assistant-chatbot',
            demo: '#',
            featured: true
        },
        {
            title: 'Machine Translation',
            description: 'Uses a pretrained multilingual transformer model (mBART/M2M-100) to perform machine translation between multiple languages. Takes input text in any supported source language and generates accurate translations in the desired target language without training from scratch.',
            tags: ['Python', 'Transformers', 'NLP', 'mBART', 'M2M-100', 'Jupyter'],
            github: 'https://github.com/bharatbushan03/Machine-Translation',
            demo: '#',
            featured: true
        },
        {
            title: 'AI Chat Assistant',
            description: 'A sleek AI chatbot built with FastAPI and LangChain, featuring a glassmorphic UI with vibrant gradients and smooth animations. Powered by Qwen2.5-7B via Hugging Face Inference API, with privacy-focused open-source models and one-click deployment on Render and Railway.',
            tags: ['Python', 'FastAPI', 'LangChain', 'HuggingFace', 'HTML', 'CSS'],
            github: 'https://github.com/bharatbushan03/chatbot',
            demo: '#',
            featured: false
        },
        {
            title: 'SmartFarm Chatbot',
            description: 'A deploy-ready FastAPI chatbot API for agricultural guidance powered by Llama-3.1-8B and Mistral models via Hugging Face. Features automatic model fallback, health check endpoints, and one-click Render deployment via included render.yaml.',
            tags: ['Python', 'FastAPI', 'HuggingFace', 'Llama', 'Agricultural AI'],
            github: 'https://github.com/bharatbushan03/smartfarm-chatbot',
            demo: '#',
            featured: false
        },
        {
            title: 'WhatsApp Chat Analyzer',
            description: 'A full-stack analytics app for WhatsApp chat exports. Computes 15+ data points including message timelines, activity heatmaps, emoji counts, and top-sender leaderboards, rendered on an interactive Chart.js dashboard. Privacy-first: all data processed in-memory.',
            tags: ['Python', 'FastAPI', 'Pandas', 'JavaScript', 'Chart.js'],
            github: 'https://github.com/bharatbushan03/chat-analyzer',
            demo: '#',
            featured: false
        },
        {
            title: 'Laptop Price Predictor',
            description: 'A machine learning web app that predicts laptop prices from hardware specifications. Uses a scikit-learn pipeline model served via a FastAPI REST endpoint, with an interactive Streamlit frontend for real-time predictions.',
            tags: ['Python', 'scikit-learn', 'FastAPI', 'Streamlit', 'ML'],
            github: 'https://github.com/bharatbushan03/Laptop-Price-Predictor',
            demo: '#',
            featured: false
        },
        {
            title: 'Movie Recommendation System',
            description: 'A content-based movie recommendation engine that suggests similar films using cosine similarity on metadata such as genres, overview, cast, crew, and keywords. Demonstrates recommender system techniques used by platforms like Netflix.',
            tags: ['Python', 'Pandas', 'scikit-learn', 'NLTK', 'Jupyter'],
            github: 'https://github.com/bharatbushan03/movie-recommendation-system',
            demo: '#',
            featured: false
        },
        {
            title: 'Medical Chatbot',
            description: 'An AI-powered medical chatbot built with Python and NLP techniques to answer health-related queries. Leverages language models to provide informative responses to medical questions.',
            tags: ['Python', 'NLP', 'LLM', 'Jupyter'],
            github: 'https://github.com/bharatbushan03/medical-chatbot',
            demo: '#',
            featured: false
        },
        {
            title: 'Chicken Disease Classification',
            description: 'A deep learning model that classifies chicken diseases from images using computer vision techniques. Built with Python and Jupyter Notebook as part of an end-to-end ML pipeline for agricultural health monitoring.',
            tags: ['Python', 'Deep Learning', 'Computer Vision', 'Jupyter'],
            github: 'https://github.com/bharatbushan03/Chicken-Disease-Classification',
            demo: '#',
            featured: false
        },
        {
            title: 'Research Paper Analyzer',
            description: 'A Python tool that analyzes and extracts key insights from academic research papers using NLP and LLM techniques, helping researchers quickly understand and summarize complex scholarly content.',
            tags: ['Python', 'NLP', 'LLM', 'AI'],
            github: 'https://github.com/bharatbushan03/research-paper-analyzer',
            demo: '#',
            featured: false
        },
        {
            title: 'AIClinic',
            description: 'An AI-powered clinic assistant application built with Python, designed to support clinical workflows with intelligent recommendations and patient interaction features.',
            tags: ['Python', 'FastAPI', 'AI', 'Healthcare'],
            github: 'https://github.com/bharatbushan03/AIClinic',
            demo: '#',
            featured: false
        },
        {
            title: 'Personalized Study Planner',
            description: 'Generates personalized weekly study plans based on a student\'s individual strengths and weaknesses, using machine learning to optimize learning schedules and improve academic performance.',
            tags: ['Python', 'ML', 'Jupyter'],
            github: 'https://github.com/bharatbushan03/Personalized-Study-Planner',
            demo: '#',
            featured: false
        },
        {
            title: 'Expense Management App',
            description: 'A TypeScript-based expense management application with a modern UI for tracking personal finances, categorizing transactions, and visualizing spending patterns.',
            tags: ['TypeScript', 'React', 'Finance'],
            github: 'https://github.com/bharatbushan03/expense-management',
            demo: '#',
            featured: false
        },
        {
            title: 'MIETGram',
            description: 'An Instagram-inspired social media clone built using Google AI Studio and Gemini API, featuring a modern UI, post creation, and social interaction capabilities.',
            tags: ['TypeScript', 'React', 'Gemini API', 'AI Studio'],
            github: 'https://github.com/bharatbushan03/mietgram03',
            demo: '#',
            featured: false
        },
        {
            title: 'Ping Pong Game',
            description: 'A classic ping pong game built with HTML5 Canvas, CSS, and JavaScript, featuring smooth animations, paddle controls, and score tracking for two-player gameplay.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
            github: 'https://github.com/bharatbushan03/ping-pong-game',
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
