import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { profileData, experienceData, skillsData } from '../data/portfolioData'
// Tech Stack Icons
import {
    SiPython, SiJavascript, SiHtml5, SiCplusplus, SiMysql,
    SiFlask, SiFastapi, SiReact, SiDocker, SiGit, SiLinux,
    SiPostgresql, SiMongodb, SiRedis, SiNginx, SiProxmox
} from 'react-icons/si'
import { DiCss3, DiJava } from 'react-icons/di'
import './Home.css'

// Icon mapping for skills
const skillIcons = {
    // Languages
    'Python': SiPython,
    'JavaScript': SiJavascript,
    'Java': DiJava,
    'HTML': SiHtml5,
    'CSS': DiCss3,
    'C++': SiCplusplus,
    'SQL': SiMysql,
    // Frameworks
    'Flask': SiFlask,
    'FastAPI': SiFastapi,
    'React': SiReact,
    // Tools
    'Docker': SiDocker,
    'Git': SiGit,
    'Linux': SiLinux,
    // Databases
    'PostgreSQL': SiPostgresql,
    'MySQL': SiMysql,
    'MongoDB': SiMongodb,
    'Redis': SiRedis,
    // DevOps
    'Nginx': SiNginx,
    'Proxmox': SiProxmox,
}

function Home() {
    // Get primary skills for display
    const primaryLanguages = skillsData.languages.filter(s => s.primary).slice(0, 6);
    const primaryFrameworks = skillsData.frameworks.filter(s => s.primary).slice(0, 4);
    const primaryTools = skillsData.tools.filter(s => s.primary).slice(0, 4);

    return (
        <div className="portfolio">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{profileData.name} - Portfolio | Python Developer & DevOps Enthusiast</title>
                <meta name="description" content={`${profileData.name} - ${profileData.title}. Explore my projects, skills, and blog posts about Python, Flask, FastAPI, DevOps, and web development.`} />
                <meta name="keywords" content="Ashish Pal, Python developer, Flask, FastAPI, DevOps, React, web development, portfolio, NIET, Greater Noida, full stack developer" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={profileData.website} />
                <meta property="og:title" content={`${profileData.name} - Portfolio`} />
                <meta property="og:description" content={profileData.bio} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={profileData.website} />
                <meta property="twitter:title" content={`${profileData.name} - Portfolio`} />
                <meta property="twitter:description" content={profileData.bio} />

                {/* Canonical URL */}
                <link rel="canonical" href={profileData.website} />

                {/* Author */}
                <meta name="author" content={profileData.name} />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": profileData.name,
                        "url": profileData.website,
                        "email": profileData.email,
                        "telephone": profileData.phone,
                        "jobTitle": "Aspiring Developer",
                        "description": profileData.bio,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Greater Noida",
                            "addressRegion": "Uttar Pradesh",
                            "addressCountry": "India"
                        },
                        "alumniOf": {
                            "@type": "EducationalOrganization",
                            "name": profileData.education.institution
                        },
                        "sameAs": [
                            profileData.github,
                            profileData.linkedin
                        ]
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="portfolio-header hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-main">
                            <div className="profile-photo-wrapper">
                                <div className="profile-photo">
                                    <img
                                        src="/profile.jpeg"
                                        alt={`${profileData.name} - Profile Photo`}
                                        className="profile-image"
                                    />
                                </div>
                                <div className="yellow-tape top-left"></div>
                            </div>

                            <div className="hero-text">
                                <h1 className="hero-name">
                                    Hi, I'm <span className="highlight-name">{profileData.name}</span> 👋
                                </h1>
                                <h2 className="hero-title">{profileData.title}</h2>
                                <p className="hero-bio">{profileData.bio}</p>

                                {/* Hero CTAs */}
                                <div className="hero-ctas">
                                    <Link
                                        to="/projects"
                                        className="btn btn-primary cta-primary"
                                    >
                                        💻 View My Projects
                                    </Link>
                                    <a
                                        href={`mailto:${profileData.email}`}
                                        className="btn btn-secondary cta-secondary"
                                    >
                                        📧 Get In Touch
                                    </a>
                                    <Link
                                        to="/blog"
                                        className="btn btn-outline cta-outline"
                                    >
                                        📝 Read My Blog
                                    </Link>
                                </div>

                                {/* Quick Stats */}
                                <div className="hero-stats">
                                    <div className="hero-stat">
                                        <span className="stat-number">{profileData.stats.publicRepos}</span>
                                        <span className="stat-label">Projects</span>
                                    </div>
                                    <div className="hero-stat">
                                        <span className="stat-number">3+</span>
                                        <span className="stat-label">Years Learning</span>
                                    </div>
                                    <div className="hero-stat">
                                        <span className="stat-number">{experienceData.length}</span>
                                        <span className="stat-label">Experiences</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="hero-contact-card">
                            <h3 className="contact-card-title">📬 Let's Connect</h3>

                            <div className="contact-info-compact">
                                <div className="info-item">
                                    <span className="info-icon">📍</span>
                                    <span className="info-text">{profileData.location}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">📧</span>
                                    <a href={`mailto:${profileData.email}`} className="info-text">{profileData.email}</a>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">📱</span>
                                    <a href={`tel:${profileData.phone}`} className="info-text">{profileData.phone}</a>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">🌐</span>
                                    <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="info-text">
                                        {profileData.website.replace('https://', '')}
                                    </a>
                                </div>
                            </div>

                            <div className="social-links-compact">
                                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                                    💻
                                </a>
                                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                    💼
                                </a>
                                <a href={`mailto:${profileData.email}`} className="social-icon" aria-label="Email">
                                    📧
                                </a>
                            </div>
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
                                {primaryLanguages.map((lang, idx) => {
                                    const IconComponent = skillIcons[lang.name];
                                    return (
                                        <div key={idx} className={`skill-card lang-${idx}`}>
                                            <div className="skill-icon">
                                                {IconComponent ? <IconComponent /> : lang.name.substring(0, 2)}
                                            </div>
                                            <p className="skill-name">{lang.name}</p>
                                            <div className="skill-level">
                                                <div className="skill-bar" style={{ width: `${lang.level}%` }}></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Frameworks & Tools */}
                        <section className="section skills">
                            <h2 className="highlight-tape">Frameworks & Tools</h2>

                            <div className="skills-grid">
                                {[...primaryFrameworks, ...primaryTools].map((skill, idx) => {
                                    const IconComponent = skillIcons[skill.name];
                                    return (
                                        <div key={idx} className={`skill-card tool-${idx}`}>
                                            <div className="skill-icon">
                                                {IconComponent ? <IconComponent /> : skill.name.substring(0, 2)}
                                            </div>
                                            <p className="skill-name">{skill.name}</p>
                                            <div className="skill-level">
                                                <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                                            </div>
                                        </div>
                                    );
                                })}
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
