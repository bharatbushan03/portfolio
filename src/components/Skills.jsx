import { Brain, Cloud, Cpu, Database, Eye, Smartphone } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import './Skills.css'

const ICONS = [Brain, Cpu, Eye, Database, Smartphone, Cloud]

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title reveal">Technical Arsenal</h2>
                <p className="section-subtitle reveal">Tools used across the AI systems, apps, and open-source work.</p>
                <div className="skills-grid">
                    {skillGroups.map((category, index) => {
                        const Icon = ICONS[index]
                        return (
                            <article
                                key={category.title}
                                className="skill-card glass reveal"
                                style={{ transitionDelay: `${index * 0.08}s`, '--card-color': category.color }}
                            >
                                <div className="skill-card-header">
                                    <div className="icon-wrapper" style={{ background: `${category.color}22`, color: category.color }}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3>{category.title}</h3>
                                        <span className="skill-count">{category.skills.length} skills</span>
                                    </div>
                                </div>
                                <div className="skill-tags">
                                    {category.skills.map((skill) => (
                                        <span key={skill} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills
