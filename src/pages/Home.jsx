import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { profileData, experienceData, skillsData, educationData, coreStrengths, funFact } from '../data/portfolioData'
// Tech Stack Icons
import {
    SiPython, SiJavascript, SiHtml5, SiMysql,
    SiFlask, SiFastapi, SiReact, SiDocker, SiGit, SiLinux,
    SiGithubactions, SiTerraform, SiGooglecloud,
    SiVercel, SiRender, SiGithub, SiLinkedin
} from 'react-icons/si'
import { DiCss3, DiJava } from 'react-icons/di'
import { FiPaperclip, FiMail } from 'react-icons/fi'
import { FaAws, FaMicrosoft, FaAndroid, FaRocket, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import { HiMail } from 'react-icons/hi'
import { IoRocketSharp } from 'react-icons/io5'
import './Home.css'

// Icon mapping for skills
const skillIcons = {
    // Languages
    'Python': SiPython,
    'JavaScript': SiJavascript,
    'Java': DiJava,
    'HTML / CSS': SiHtml5,
    'SQL': SiMysql,
    // Frameworks
    'Flask': SiFlask,
    'FastAPI': SiFastapi,
    'React': SiReact,
    // DevOps
    'Docker': SiDocker,
    'Docker Compose': SiDocker,
    'GitHub Actions': SiGithubactions,
    'Terraform': SiTerraform,
    // Cloud
    'AWS': FaAws,
    'Google Cloud': SiGooglecloud,
    'Azure': FaMicrosoft,
    'Vercel': SiVercel,
    'Render': SiRender,
    // Tools
    'Git': SiGit,
    'Linux': SiLinux,
    'Android Studio': FaAndroid,
    'VS Code': VscCode,
}

function Home() {
    // Skill level mapping for progress bars
    const levelToPercentage = {
        'Strong': 90,
        'Intermediate': 70,
        'Basic': 50,
        'Learning': 30,
        'Basic (Exploring)': 40,
        'Basic (Deployment)': 45
    };

    const primaryLanguages = skillsData.languages;
    const primaryFrameworks = skillsData.frameworks;
    const primaryTools = [...skillsData.devops, ...skillsData.cloud, ...skillsData.tools];

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
                            "name": educationData.institution
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
                                        src="/profile.png"
                                        alt={`${profileData.name} - Profile Photo`}
                                        className="profile-image"
                                    />
                                </div>
                                <div className="yellow-tape top-left"></div>
                                <div className="paper-clip">
                                    <FiPaperclip />
                                </div>
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
                                        <FaCode style={{ marginRight: '8px', verticalAlign: 'middle' }} /> View My Projects
                                    </Link>
                                    <a
                                        href={profileData.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary cta-secondary"
                                    >
                                        <FaBriefcase style={{ marginRight: '8px', verticalAlign: 'middle' }} /> View Resume
                                    </a>
                                    <a
                                        href={`mailto:${profileData.email}`}
                                        className="btn btn-outline cta-outline"
                                    >
                                        <HiMail style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Get In Touch
                                    </a>
                                    <Link
                                        to="/blog"
                                        className="btn btn-outline cta-outline"
                                    >
                                        <IoRocketSharp style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Read My Blog
                                    </Link>
                                </div>
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
                                        <div className={`timeline-marker ${exp.status === 'Active' ? 'green' : ''}`}></div>
                                        <div className="timeline-content">
                                            <p className="period">{exp.period || exp.duration}</p>
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


                        {/* Education Section */}
                        <section className="section education">
                            <h2 className="highlight-tape">Education</h2>

                            <div className="education-list">
                                <div className="education-item">
                                    <div className="timeline-marker green"></div>
                                    <div>
                                        <p className="period">{educationData.status}</p>
                                        <h3>{educationData.institution}</h3>
                                        <p className="degree">
                                            {educationData.degree} · <span className="badge green">CGPA {educationData.cgpa}</span>
                                        </p>
                                        <p className="location">{educationData.location}</p>
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
                                    const percent = levelToPercentage[lang.level] || 50;
                                    return (
                                        <div key={idx} className={`skill-card lang-${idx}`} title={`${lang.name} - ${lang.level}`}>
                                            <div className="skill-icon">
                                                {IconComponent ? <IconComponent /> : lang.name.substring(0, 2)}
                                            </div>
                                            <p className="skill-name">{lang.name}</p>
                                            <div className="skill-level">
                                                <div className="skill-bar" style={{ width: `${percent}%` }}></div>
                                            </div>
                                            <div className="skill-tooltip">
                                                <strong>{lang.name}</strong>
                                                <span className="proficiency">{lang.level}</span>
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
                                    const percent = levelToPercentage[skill.level] || 50;
                                    return (
                                        <div key={idx} className={`skill-card tool-${idx}`} title={`${skill.name} - ${skill.level}`}>
                                            <div className="skill-icon">
                                                {IconComponent ? <IconComponent /> : skill.name.substring(0, 2)}
                                            </div>
                                            <p className="skill-name">{skill.name}</p>
                                            <div className="skill-level">
                                                <div className="skill-bar" style={{ width: `${percent}%` }}></div>
                                            </div>
                                            <div className="skill-tooltip">
                                                <strong>{skill.name}</strong>
                                                <span className="proficiency">{skill.level}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Core Strengths Section */}
                        <section className="section core-strengths">
                            <h2 className="highlight-tape">Core Strengths</h2>
                            <div className="card">
                                <ul className="achievements">
                                    {coreStrengths.map((strength, idx) => (
                                        <li key={idx}>{strength}</li>
                                    ))}
                                </ul>
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
                    <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
                    <p className="handwritten fun-fact">Fun Fact: {funFact}</p>
                </div>
            </footer>
        </div>
    )
}

export default Home
