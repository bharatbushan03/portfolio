import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import './ProjectStage.css'

const ProjectStage = ({ projects }) => {
    const reduced = usePrefersReducedMotion()
    const wrapRef = useRef(null)
    const ringRef = useRef(null)
    const motion = useRef({
        dragging: false,
        lastX: 0,
        yaw: 18,
        hovered: false,
    }).current

    useEffect(() => {
        let frame = 0
        let last = performance.now()

        const tick = (now) => {
            const delta = Math.min(0.05, (now - last) / 1000)
            last = now
            if (!reduced && !motion.dragging && !motion.hovered) {
                motion.yaw += delta * 16
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `rotateX(6deg) rotateY(${motion.yaw}deg)`
            }
            frame = requestAnimationFrame(tick)
        }

        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [motion, reduced])

    useEffect(() => {
        const el = wrapRef.current
        if (!el) return undefined

        const down = (event) => {
            if (event.target.closest('a')) return
            motion.dragging = true
            motion.lastX = event.clientX
        }
        const move = (event) => {
            if (!motion.dragging) return
            const dx = event.clientX - motion.lastX
            motion.lastX = event.clientX
            motion.yaw += dx * 0.45
        }
        const up = () => {
            motion.dragging = false
        }

        el.addEventListener('pointerdown', down)
        window.addEventListener('pointermove', move)
        window.addEventListener('pointerup', up)
        return () => {
            el.removeEventListener('pointerdown', down)
            window.removeEventListener('pointermove', move)
            window.removeEventListener('pointerup', up)
        }
    }, [motion])

    const step = 360 / projects.length

    return (
        <div className="stage-wrap" ref={wrapRef}>
            <div className="css-stage">
                <div className="css-ring" ref={ringRef}>
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="stage-card"
                            style={{
                                '--card-accent': project.accent,
                                transform: `rotateY(${index * step}deg) translateZ(300px)`,
                            }}
                            onPointerEnter={() => { motion.hovered = true }}
                            onPointerLeave={() => { motion.hovered = false }}
                        >
                            <p className="stage-kicker">{project.kicker}</p>
                            <h3>{project.title}</h3>
                            <p className="stage-blurb">{project.blurb}</p>
                            <p className="stage-tags">{project.tags.join(' · ')}</p>
                            <p className="stage-links">
                                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                                {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live</a> : null}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
            <p className="stage-hint">{reduced ? 'Featured repositories' : 'Drag to spin the projects'}</p>
        </div>
    )
}

export default ProjectStage
