import { Component, lazy, Suspense } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { GITHUB_PROFILE, featuredProjects, moreProjects, otherRepos } from '../data/portfolio'
import './Projects.css'

const ProjectStage = lazy(() => import('./ProjectStage'))

class StageBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { failed: false }
    }

    static getDerivedStateFromError() {
        return { failed: true }
    }

    render() {
        if (this.state.failed) return this.props.fallback
        return this.props.children
    }
}

const ProjectCard = ({ project }) => (
    <article className="project-card glass reveal">
        <div className="project-content">
            <div className="project-header">
                <div className="project-type">Repository</div>
                <div className="project-links">
                    <a href={project.github} className="icon-link" target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                        <Github size={20} />
                    </a>
                    {project.live ? (
                        <a href={project.live} className="icon-link" target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}>
                            <ExternalLink size={20} />
                        </a>
                    ) : null}
                </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-description glass">
                <p>{project.description}</p>
            </div>
            <ul className="project-tags">
                {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </div>
    </article>
)

const Projects = () => {
    const fallback = (
        <div className="projects-grid featured-fallback">
            {featuredProjects.map((project) => (
                <ProjectCard
                    key={project.title}
                    project={{ ...project, description: project.blurb }}
                />
            ))}
        </div>
    )

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title reveal">Projects</h2>
                <p className="section-subtitle reveal">
                    Selected work from GitHub, including the internship builds and the public repositories.
                </p>

                <div className="projects-grid featured-mobile">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={{ ...project, description: project.blurb }}
                        />
                    ))}
                </div>

                <StageBoundary fallback={fallback}>
                    <Suspense fallback={<div className="stage-wrap" aria-hidden="true" />}>
                        <ProjectStage projects={featuredProjects} />
                    </Suspense>
                </StageBoundary>

                <h3 className="archive-title reveal">More from GitHub</h3>
                <div className="projects-grid">
                    {moreProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>

                <div className="repo-index reveal">
                    <div className="repo-index-head">
                        <h3>Also on GitHub</h3>
                        <a href={`${GITHUB_PROFILE}?tab=repositories`} target="_blank" rel="noreferrer">Full profile</a>
                    </div>
                    <ul>
                        {otherRepos.map((item) => (
                            <li key={item.repo}>
                                <a href={`${GITHUB_PROFILE}/${item.repo}`} target="_blank" rel="noreferrer">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects
