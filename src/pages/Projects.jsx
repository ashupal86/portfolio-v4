import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { projectsData, profileData } from '../data/portfolioData'
import { SiGithub, SiYoutube } from 'react-icons/si'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

function Projects() {
    return (
        <div className="projects-page">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Projects - {profileData.name} | Portfolio</title>
                <meta name="description" content={`Explore ${projectsData.length}+ projects by ${profileData.name} including web applications, mobile apps, APIs, and DevOps solutions built with Python, React, Flask, Docker, and more.`} />
                <meta name="keywords" content="projects, portfolio, Python projects, React projects, Flask API, Android apps, web development, full stack projects" />
            </Helmet>

            {/* Header */}
            <header className="projects-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        ← Back to Home
                    </Link>
                    <h1 className="highlight-tape">My Projects</h1>
                    <p className="projects-intro">
                        A collection of {projectsData.length} projects I've built while learning and exploring different technologies.
                        From web apps to APIs, mobile applications to DevOps solutions.
                    </p>
                </div>
            </header>

            {/* Projects Grid */}
            <main className="projects-main">
                <div className="container">
                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <article key={project.id} className="project-card">
                                {/* Project Header */}
                                <div className="project-header">
                                    <div className="project-icon">
                                        {project.category === 'frontend' && '🌐'}
                                        {project.category === 'mobile' && '📱'}
                                        {project.category === 'backend' && '🔌'}
                                        {project.category === 'devops' && '⚙️'}
                                        {project.category === 'fullstack' && '🛠️'}
                                    </div>
                                    <div className="project-meta">
                                        <span className={`project-category ${project.category.toLowerCase()}`}>
                                            {project.category}
                                        </span>
                                        <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <h2 className="project-title">{project.title}</h2>
                                {project.alias && <p className="project-alias"><em>{project.alias}</em></p>}
                                <p className="project-description">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="project-tech">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                {/* Features */}
                                {project.features && project.features.length > 0 && (
                                    <ul className="project-features">
                                        {project.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                )}

                                {/* Links */}
                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link github"
                                        >
                                            <FiGithub /> View Code
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link live"
                                        >
                                            <FiExternalLink /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* GitHub CTA */}
                    <div className="github-cta">
                        <h2>Want to see more?</h2>
                        <p>Check out all my projects and contributions on GitHub</p>
                        <a
                            href={profileData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <SiGithub /> Visit My GitHub
                        </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="projects-footer">
                <div className="container">
                    <p>© 2024 {profileData.name}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Projects
