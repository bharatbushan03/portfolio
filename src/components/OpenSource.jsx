import { GitFork } from 'lucide-react'
import { openSource } from '../data/portfolio'
import './OpenSource.css'

const OpenSource = () => {
    return (
        <section id="opensource" className="opensource-section">
            <div className="container">
                <h2 className="section-title reveal">Open Source</h2>
                <p className="section-subtitle reveal">
                    Contributions from public events and forks on GitHub.
                </p>
                <div className="oss-grid">
                    {openSource.map((item) => (
                        <article key={item.org} className="oss-card glass reveal">
                            <div className="oss-icon">
                                <GitFork size={18} />
                            </div>
                            <p className="oss-org">{item.org}</p>
                            <h3>{item.title}</h3>
                            <p>{item.detail}</p>
                            <ul>
                                {item.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                            <a href={item.href} target="_blank" rel="noreferrer">View contribution</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OpenSource
