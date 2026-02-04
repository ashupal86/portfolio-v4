import { Link } from 'react-router-dom'
import { profileData, experienceData, skillsData } from '../data/portfolioData'
import './Home.css'

function Home() {
    // Get primary skills for display
    const primaryLanguages = skillsData.languages.filter(s => s.primary).slice(0, 6);
    const primaryFrameworks = skillsData.frameworks.filter(s => s.primary).slice(0, 4);
    const primaryTools = skillsData.tools.filter(s => s.primary).slice(0, 4);

    return (
        <div className="portfolio">
            {/* Header Section */}
            <header className="portfolio-header">
                <div className="container">
                    <div className="header-content">
                        <div className="profile-section">
                            <div className="profile-photo-wrapper">
                                <div className="profile-photo">
                                    <div className="photo-placeholder">AP</div>
                                </div>
                                <div className="yellow-tape top-left"></div>
                            </div>

                            <div className="profile-info">
                                <h1 className="name">{profileData.name}</h1>
                                <p className="tagline">{profileData.title}</p>

                                <div className="contact-info">
                                    <div className="info-item">
                                        <span className="label">Location:</span>
                                        <span className="value">{profileData.location}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Phone:</span>
                                        <span className="value">{profileData.phone}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Email:</span>
                                        <span className="value">{profileData.email}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Website:</span>
                                        <span className="value">
                                            <a href={profileData.website} target="_blank" rel="noopener noreferrer">
                                                {profileData.website.replace('https://', '')}
                                            </a>
                                        </span>
                                    </div>
                                </div>

                                <div className="social-links">
                                    <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="social-link">
                                        💻 GitHub
                                    </a>
                                    <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                        💼 LinkedIn
                                    </a>
                                    <a href={`mailto:${profileData.email}`} className="social-link">
                                        📧 Email
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="handwritten-note">
                            <p className="handwritten">
                                {profileData.bio}
                            </p>
                            <p className="handwritten contact-details">
                                📧 {profileData.email}<br />
                                🔗 {profileData.linkedin.replace('https://linkedin.com/in/', '')}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <main className="portfolio-main">
                <div className="container">
                    <div className="portfolio-grid">

                        {/* Experience Section */}
                        <section className="section work-experience">
                            <h2 className="highlight-tape">Experience</h2>

                            <div className="timeline">
                                {experienceData.map((exp) => (
                                    <div key={exp.id} className="timeline-item">
                                        <div className={`timeline-marker ${exp.status === 'active' ? 'green' : ''}`}></div>
                                        <div className="timeline-content">
                                            <p className="period">{exp.status}</p>
                                            <h3>{exp.role}</h3>
                                            <p className="company">
                                                {exp.company} · <span className={`badge ${exp.type === 'Internship' ? 'orange' : 'green'}`}>{exp.type}</span>
                                            </p>
                                            <p className="location">{exp.location}</p>
                                            <p className="description">{exp.description}</p>
                                            {exp.achievements && exp.achievements.length > 0 && (
                                                <ul className="achievements">
                                                    {exp.achievements.map((achievement, idx) => (
                                                        <li key={idx}>{achievement}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Skills Overview */}
                        <section className="section expertise">
                            <h2 className="highlight-tape">Area of Expertise</h2>

                            <div className="expertise-diagram">
                                <div className="sticky-note promotional">
                                    <span className="handwritten">FULL STACK</span>
                                </div>

                                <div className="expertise-triangle">
                                    <div className="triangle-section editorial">
                                        <span>BACKEND<br />DEVELOPMENT</span>
                                    </div>
                                    <div className="triangle-section ui">
                                        <span>FRONTEND<br />DEVELOPMENT</span>
                                    </div>
                                    <div className="triangle-section motion">
                                        <span>DEVOPS &<br />CLOUD</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Education Section */}
                        <section className="section education">
                            <h2 className="highlight-tape">Education</h2>

                            <div className="education-list">
                                <div className="education-item">
                                    <div className="timeline-marker green"></div>
                                    <div>
                                        <p className="period">{profileData.education.year}</p>
                                        <h3>{profileData.education.institution}</h3>
                                        <p className="degree">
                                            {profileData.education.degree} · <span className="badge green">CGPA {profileData.education.cgpa}</span>
                                        </p>
                                        <p className="location">{profileData.education.location}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Programming Languages */}
                        <section className="section skills">
                            <h2 className="highlight-tape">Programming Languages</h2>

                            <div className="skills-grid">
                                {primaryLanguages.map((lang, idx) => (
                                    <div key={idx} className={`skill-card lang-${idx}`}>
                                        <div className="skill-icon">{lang.name.substring(0, 2)}</div>
                                        <p className="skill-name">{lang.name}</p>
                                        <div className="skill-level">
                                            <div className="skill-bar" style={{ width: `${lang.level}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Frameworks & Tools */}
                        <section className="section skills">
                            <h2 className="highlight-tape">Frameworks & Tools</h2>

                            <div className="skills-grid">
                                {[...primaryFrameworks, ...primaryTools].map((skill, idx) => (
                                    <div key={idx} className={`skill-card tool-${idx}`}>
                                        <div className="skill-icon">{skill.name.substring(0, 2)}</div>
                                        <p className="skill-name">{skill.name}</p>
                                        <div className="skill-level">
                                            <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* GitHub Stats */}
                        <section className="section github-stats">
                            <h2 className="highlight-tape">GitHub Stats</h2>

                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-value">{profileData.stats.publicRepos}</div>
                                    <div className="stat-label">Public Repos</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value">{profileData.stats.totalStars}</div>
                                    <div className="stat-label">Total Stars</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value">{profileData.stats.followers}</div>
                                    <div className="stat-label">Followers</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value">{profileData.stats.following}</div>
                                    <div className="stat-label">Following</div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Blog Link */}
                    <div className="blog-cta">
                        <Link to="/blog" className="btn btn-primary">
                            View My Blog →
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="portfolio-footer">
                <div className="container">
                    <p>© 2024 {profileData.name}. All rights reserved.</p>
                    <p className="handwritten fun-fact">Fun Fact: Skateboard dost ka hai 😁</p>
                </div>
            </footer>
        </div>
    )
}

export default Home
