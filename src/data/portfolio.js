export const GITHUB_PROFILE = 'https://github.com/bharatbushan03'
export const CONTACT_EMAIL = 'bharatbushan5320@gmail.com'

const repo = (name) => `${GITHUB_PROFILE}/${name}`

export const heroStats = [
    { value: '400+', label: 'LeetCode' },
    { value: '500+', label: 'GeeksforGeeks' },
    { value: '5★', label: 'HackerRank' },
]

export const experience = {
    role: 'Director Intern',
    org: 'MIET Jammu',
    dates: 'May 2026 to Present',
    education: 'B.E. Computer Science and Engineering, Model Institute of Engineering and Technology, Jammu · CGPA 8.0 · 2024 to 2028',
    projects: [
        {
            name: 'Self Defending GPT',
            dates: 'May 2026 to Aug 2026',
            summary: 'Real-time GenAI security system that detects prompt injection, jailbreak, and data-extraction attacks with LlamaGuard, warns or blocks by risk score, and logs every interaction in MongoDB.',
            stack: ['FastAPI', 'LlamaGuard', 'Groq', 'Next.js', 'Recharts', 'MongoDB', 'Docker'],
            href: repo('self-defending-gpt'),
            linkLabel: 'View repository',
        },
        {
            name: 'RideLoop',
            dates: 'Aug 2026 to Present',
            summary: 'Carpool-matching mobile app. OTP authentication with secure session storage, a reusable design system, and a PostgreSQL schema protected with row-level security.',
            stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL'],
            href: null,
            linkLabel: null,
        },
    ],
}

export const featuredProjects = [
    {
        title: 'Self Defending GPT',
        kicker: 'GenAI security',
        blurb: 'Detects prompt injection and jailbreaks as they happen, then warns or blocks the user by risk score.',
        tags: ['FastAPI', 'LlamaGuard', 'Next.js'],
        github: repo('self-defending-gpt'),
        accent: '#818cf8',
    },
    {
        title: 'CampusCoder',
        kicker: 'Community platform',
        blurb: 'Events, project showcases, a notes library, and a role-based admin console for students.',
        tags: ['Next.js', 'Supabase', 'Redis'],
        github: repo('CampusCoder'),
        live: 'https://www.campuscoders.online',
        accent: '#c084fc',
    },
    {
        title: 'Student Assistant',
        kicker: 'Campus RAG',
        blurb: 'LangChain and Claude assistant for admissions, courses, and campus life. About 50 queries a day.',
        tags: ['Python', 'LangChain', 'Claude'],
        github: repo('student-assistant-chatbot'),
        accent: '#22d3ee',
    },
    {
        title: 'Machine Translation',
        kicker: 'Multilingual NLP',
        blurb: 'MarianMT fine-tuned on 100K+ sentence pairs for English to Hindi and French. 34.2 BLEU.',
        tags: ['PyTorch', 'MarianMT', 'Hugging Face'],
        github: repo('Machine-Translation'),
        live: 'https://www.bl-machinetranslation.streamlit.app',
        accent: '#f59e0b',
    },
    {
        title: 'Fire & Smoke Detection',
        kicker: 'Computer vision',
        blurb: 'CNN pipeline on industrial camera feeds that flags fire and smoke for an earlier alert.',
        tags: ['OpenCV', 'TensorFlow', 'CNN'],
        github: repo('Industrial-Fire-Smoke-Detection-System'),
        accent: '#fb7185',
    },
    {
        title: 'Emotion-Aware AI',
        kicker: 'Conversational AI',
        blurb: 'Detects 27+ emotions with RoBERTa, keeps session memory in ChromaDB, and replies with Flan-T5.',
        tags: ['PyTorch', 'FastAPI', 'React'],
        github: repo('Emotion-Aware-Conversational-AI-System'),
        accent: '#34d399',
    },
]

export const moreProjects = [
    {
        title: 'DocuGuard AI',
        description: 'Knowledge assistant for internal policy and legal documents. Answers stay inside the authorized corpus, cite source chunks, carry a confidence score, and get flagged for review when risk or injection patterns appear.',
        tags: ['FastAPI', 'Next.js', 'RAG'],
        github: repo('DocuGuard-AI'),
    },
    {
        title: 'StreamHub',
        description: 'Video streaming app with React, Express, and MongoDB. Includes JWT auth, uploads, FFmpeg/HLS playback, creator channels, playlists, subscriptions, moderation, and real-time notifications.',
        tags: ['React', 'Express', 'MongoDB', 'FFmpeg'],
        github: repo('StreamHub'),
    },
    {
        title: 'AI Sales Intelligence',
        description: 'Autonomous B2B sales intelligence and outreach agent powered by Google Gemini and Firebase.',
        tags: ['TypeScript', 'Gemini', 'Firebase'],
        github: repo('AI-Sales-Intelligence-Outreach-Agent'),
    },
    {
        title: 'AssetFlow',
        description: 'Asset lifecycle backend for an organization, with Express, PostgreSQL, Prisma, JWT auth, and Zod validation.',
        tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
        github: repo('AssetFlow-Enterprise-Asset'),
    },
    {
        title: 'Horizon Bank',
        description: 'Bank management system for savings and checking accounts, loan applications, and installment payments. React client with a Node.js and Express API on MySQL.',
        tags: ['React', 'Node.js', 'Express', 'MySQL'],
        github: repo('Bank-Management'),
    },
    {
        title: 'Email Spam Classifier',
        description: 'Classifies email and SMS as spam or not, and serves the trained model through a Flask app.',
        tags: ['Python', 'Flask', 'Machine Learning'],
        github: repo('email-spam-classifier'),
    },
    {
        title: 'AI Chat Assistant',
        description: 'Chatbot built with FastAPI and LangChain, using Qwen2.5-7B through the Hugging Face Inference API, with a glass-style interface.',
        tags: ['Python', 'FastAPI', 'LangChain', 'HuggingFace'],
        github: repo('chatbot'),
    },
    {
        title: 'SmartFarm Chatbot',
        description: 'FastAPI chatbot API for agricultural guidance, using Llama-3.1-8B and Mistral through Hugging Face with automatic model fallback.',
        tags: ['Python', 'FastAPI', 'HuggingFace', 'Llama'],
        github: repo('smartfarm-chatbot'),
    },
    {
        title: 'WhatsApp Chat Analyzer',
        description: 'Analytics for WhatsApp chat exports: timelines, activity heatmaps, emoji counts, and sender leaderboards on a Chart.js dashboard. Processing stays in memory.',
        tags: ['Python', 'FastAPI', 'Pandas', 'Chart.js'],
        github: repo('chat-analyzer'),
    },
    {
        title: 'Laptop Price Predictor',
        description: 'Predicts laptop prices from hardware specs. A scikit-learn pipeline is served by FastAPI, with a Streamlit screen for live predictions.',
        tags: ['Python', 'scikit-learn', 'FastAPI', 'Streamlit'],
        github: repo('Laptop-Price-Predictor'),
    },
    {
        title: 'Movie Recommendation System',
        description: 'Content-based recommendations using cosine similarity over genres, overview, cast, crew, and keywords.',
        tags: ['Python', 'Pandas', 'scikit-learn', 'NLTK'],
        github: repo('movie-recommendation-system'),
    },
    {
        title: 'Medical Chatbot',
        description: 'Medical question-answering chatbot built with Python and language models.',
        tags: ['Python', 'NLP', 'LLM'],
        github: repo('medical-chatbot'),
    },
    {
        title: 'Chicken Disease Classification',
        description: 'Image classifier for chicken diseases, built as a computer-vision notebook pipeline for agricultural health monitoring.',
        tags: ['Python', 'Deep Learning', 'Computer Vision'],
        github: repo('Chicken-Disease-Classification'),
    },
    {
        title: 'Research Paper Analyzer',
        description: 'Reads academic papers and pulls out key points with NLP and language models so a paper is faster to scan.',
        tags: ['Python', 'NLP', 'LLM'],
        github: repo('research-paper-analyzer'),
    },
    {
        title: 'AIClinic',
        description: 'Clinic assistant application for recommendations and patient interaction.',
        tags: ['Python', 'FastAPI', 'Healthcare'],
        github: repo('AIClinic'),
    },
    {
        title: 'Personalized Study Planner',
        description: 'Builds a weekly study plan from a student’s strengths and weaknesses.',
        tags: ['Python', 'Machine Learning'],
        github: repo('Personalized-Study-Planner'),
    },
    {
        title: 'Expense Management',
        description: 'Expense tracker for categorizing transactions and reviewing spending patterns.',
        tags: ['TypeScript', 'React'],
        github: repo('expense-management'),
    },
    {
        title: 'MIETGram',
        description: 'Social feed inspired by Instagram, built with the Gemini API for post creation and interaction.',
        tags: ['TypeScript', 'React', 'Gemini API'],
        github: repo('mietgram03'),
    },
    {
        title: 'Ping Pong',
        description: 'Two-player ping pong on HTML5 Canvas, with paddle controls and score tracking.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
        github: repo('ping-pong-game'),
    },
]

export const otherRepos = [
    { name: 'Agentic AutoML Assistant', repo: 'Agentic-AutoML-Assistant' },
    { name: 'BusKaro', repo: 'buskaro' },
    { name: 'CivicGuide AI', repo: 'CivicGuide-AI' },
    { name: 'Coding Solutions', repo: 'coding-solutions' },
    { name: 'Face Mask Detection', repo: 'face-mask-detection' },
    { name: 'Face Recognition', repo: 'Face-Recognition' },
    { name: 'Hackathon ATS', repo: 'Hackathon-ATS' },
    { name: 'MNIST', repo: 'mnist' },
    { name: 'Omnibuild AI', repo: 'omnibuild-ai' },
    { name: 'RAGTube', repo: 'RAGTube' },
    { name: 'Tennis Match Intelligence', repo: 'Tennis_Match_Intelligence-System' },
]

export const openSource = [
    {
        org: 'Murf AI',
        title: 'LiveKit voice agent',
        detail: 'Built a LiveKit voice agent on the Murf starter with Murf Falcon text-to-speech and Deepgram speech-to-text, and added tool chaining for dictionary and library lookups.',
        href: repo('murf-livekit-starter'),
        tags: ['LiveKit', 'Murf Falcon', 'Deepgram', 'TypeScript'],
    },
    {
        org: 'RAGFlow',
        title: 'Video transcript retrieval',
        detail: 'Built a RAG pipeline over video transcripts: transcript loading, chunking, embeddings, vector-store retrieval, chat, and summaries.',
        href: repo('ragflow'),
        tags: ['Python', 'RAG', 'Embeddings', 'Vector search'],
    },
]

export const certifications = [
    { name: 'Azure AI 901', issuer: 'Microsoft' },
    { name: 'IBM AI Developer', issuer: 'IBM' },
    { name: 'Next-Gen AI Development with Hugging Face', issuer: 'Hugging Face' },
    { name: 'IBM Generative AI Engineering', issuer: 'IBM' },
    { name: 'IBM Data Science', issuer: 'IBM' },
]

export const leadership = [
    { name: 'Unstop Campus Champion', dates: 'Aug 2026 to Present' },
    { name: 'Microsoft Learn Student Ambassador', dates: 'July 2026 to Present' },
    { name: 'HackerRank Campus Crew Ambassador', dates: 'May 2026 to Present' },
    { name: 'Community Lead, CampusCoder', dates: 'May 2026 to Present' },
]

export const skillGroups = [
    {
        title: 'LLM & Agentic AI',
        color: '#a855f7',
        skills: ['LangChain', 'LangGraph', 'Multi-agent systems', 'RAG', 'Prompt engineering', 'Fine-tuning', 'Hugging Face'],
    },
    {
        title: 'Machine Learning',
        color: '#6366f1',
        skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'Model evaluation'],
    },
    {
        title: 'Computer Vision',
        color: '#f43f5e',
        skills: ['OpenCV', 'MediaPipe', 'CNNs', 'Object detection'],
    },
    {
        title: 'Backend & Data',
        color: '#22d3ee',
        skills: ['FastAPI', 'Flask', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Redis'],
    },
    {
        title: 'Frontend & Mobile',
        color: '#f59e0b',
        skills: ['React', 'Next.js', 'TypeScript', 'React Native', 'Expo'],
    },
    {
        title: 'Cloud & Tools',
        color: '#10b981',
        skills: ['Microsoft Azure', 'Docker', 'Git', 'Streamlit', 'Vercel', 'Render'],
    },
]
