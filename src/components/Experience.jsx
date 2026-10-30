import { Briefcase, ExternalLink, GraduationCap } from 'lucide-react'
import { experience, leadership } from '../data/portfolio'
import './Experience.css'

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title reveal">Experience</h2>
                <p className="section-subtitle reveal">
                    Director Intern at MIET Jammu, shipping a GenAI security product and a carpool app.
                </p>

                <article className="role-panel glass reveal">
                    <header className="role-head">
                        <div className="role-identity">
                            <div className="role-icon">
                                <Briefcase size={20} />
                            </div>
                            <div>
                                <h3>{experience.role}</h3>
                                <p>{experience.org}</p>
                            </div>
                        </div>
                        <p className="role-dates">{experience.dates}</p>
                    </header>

                    <div className="role-projects">
                        {experience.projects.map((project) => (
                            <div key={project.name} className="intern-card">
                                <div className="intern-top">
                                    <h4>{project.name}</h4>
                                    <span>{project.dates}</span>
                                </div>
                                <p>{project.summary}</p>
                                <ul>
                                    {project.stack.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                {project.href ? (
                                    <a href={project.href} target="_blank" rel="noreferrer">
                                        {project.linkLabel} <ExternalLink size={14} />
                                    </a>
                                ) : (
                                    <span className="intern-note">In progress</span>
                                )}
                            </div>
                        ))}
                    </div>
                </article>

                <p className="edu-line reveal">
                    <GraduationCap size={16} />
                    {experience.education}
                </p>

                <div className="leadership reveal">
                    <h3>Leadership</h3>
                    <ul>
                        {leadership.map((item) => (
                            <li key={item.name}>
                                <strong>{item.name}</strong>
                                <span>{item.dates}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience
