import { Award } from 'lucide-react'
import { certifications } from '../data/portfolio'
import './Certifications.css'

const Certifications = () => {
    return (
        <section id="certifications" className="certs-section">
            <div className="container">
                <h2 className="section-title reveal">Certifications</h2>
                <p className="section-subtitle reveal">
                    Credentials in Azure AI, generative AI, and data science.
                </p>
                <div className="certs-grid">
                    {certifications.map((cert) => (
                        <article key={cert.name} className="cert-card glass reveal">
                            <Award size={18} />
                            <h3>{cert.name}</h3>
                            <p>{cert.issuer}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
