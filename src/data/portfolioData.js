export const profileData = {
  name: "Ashish Pal",
  username: "ashupal86",
  title: "Backend-Focused Developer | FastAPI & Flask | DevOps Exposure",
  bio: "Self-taught developer with 3+ years of hands-on learning. Strong in Python backend development (FastAPI, Flask), containerization with Docker, and Linux-based workflows. Final-year B.Tech (CSE) student at NIET with practical DevOps internship experience.",
  location: "Greater Noida, Uttar Pradesh, India",
  website: "https://ashu.devinit.in",
  github: "https://github.com/ashupal86",
  linkedin: "https://linkedin.com/in/ashish-pal-5725a6257",
  email: "palbro86@gmail.com",
  phone: "+91-7428450179",
  resume: "https://docs.google.com/document/d/1KuVv5h7r2wk0rPpHwkI9uRR0k2iwEkOd62S5MvmUPhE/edit?usp=sharing"
};

/* =========================
   CORE STRENGTHS
========================= */
export const coreStrengths = [
  "Backend API development using FastAPI & Flask",
  "Docker-based containerization and local dev environments",
  "Linux-first development workflow",
  "Practical DevOps exposure (CI/CD, cloud basics)",
  "Building real-world projects for small business use cases"
];

/* =========================
   EDUCATION
========================= */
export const educationData = {
  degree: "B.Tech in Computer Science Engineering",
  institution: "Noida Institute of Engineering and Technology (NIET)",
  location: "Greater Noida, Uttar Pradesh",
  status: "Final Year (Pursuing)",
  cgpa: "6.5 / 10"
};

/* =========================
   EXPERIENCE
========================= */
export const experienceData = [
  {
    id: 1,
    role: "DevOps Intern",
    company: "Springer Capital",
    type: "Internship",
    location: "Remote | Part Time",
    duration: "4 Months",
    period: "Sep 2025 – 1 Jan 2026",
    status: "Completed",
    description:
      "Worked under supervision on DevOps and deployment workflows, focusing on containerization, CI/CD assistance, and cloud exposure.",
    achievements: [
      "Containerized applications using Docker and Docker Compose",
      "Assisted in CI/CD pipelines using GitHub Actions",
      "Worked with Linux-based environments for deployments",
      "Observed monitoring metrics via Grafana and Prometheus",
      "Explored Terraform fundamentals for Infrastructure-as-Code concepts",
      "Gained hands-on exposure to Azure and AWS cloud environments"
    ],
    technologies: [
      "Docker",
      "Docker Compose",
      "Linux",
      "Git",
      "GitHub",
      "GitHub Actions",
      "AWS",
      "Azure",
      "Terraform (learning)",
      "Grafana",
      "Prometheus"
    ]
  },
  {
    id: 2,
    role: "Technical Head",
    company: "Ekume Club, NIET",
    type: "Leadership",
    location: "Greater Noida, UP",
    period: "2024 – 2025",
    status: "Completed",
    description:
      "Leading technical initiatives, mentoring students, and managing technical execution for college-level events and workshops.",
    achievements: [
      "Organized multiple technical events including coding competitions and tech talks",
      "Conducted hands-on workshops on Docker and web deployment",
      "Mentored students in backend and web development",
      "Managed technical infrastructure for club events",
      "Received BharatXR recognition for technical event management"
    ],
    skills: ["Leadership", "Mentoring", "Event Management", "Public Speaking"]
  }
];

/* =========================
   PROJECTS
========================= */
export const projectsData = [
  {
    id: 1,
    title: "ClearLedger",
    alias: "Formerly My Manager (Android)",
    category: "fullstack",
    featured: true,
    description:
      "A bookkeeping and billing solution for small shop owners to manage customers, credit (udhar), and daily transactions.",
    fullDescription:
      "ClearLedger is a practical business management system designed for small merchants. It evolved from an Android-only app (My Manager) into a broader product concept focusing on digital bookkeeping and customer management.",
    technologies: ["Java", "Android", "SQLite", "Python", "FastAPI"],
    status: "Ongoing",
    features: [
      "Customer and credit (udhar) management",
      "Daily transaction and profit tracking",
      "Offline-first Android implementation",
      "Backend API development for future scalability"
    ],
    github: "https://github.com/ashupal86/my-manager"
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "frontend",
    featured: true,
    description:
      "Terminal-inspired personal portfolio showcasing projects and skills.",
    technologies: ["React", "Vite", "HTML", "CSS", "JavaScript"],
    status: "Live",
    github: "https://github.com/ashupal86/portfolio",
    demo: "https://portfolio-9ucx.onrender.com/"
  },
  {
    id: 3,
    title: "Notes API",
    category: "backend",
    featured: true,
    description:
      "A RESTful API for creating and syncing notes across devices.",
    technologies: ["Python", "Flask", "SQLite"],
    status: "Active",
    github: "https://github.com/ashupal86/Notes-api"
  },
  {
    id: 4,
    title: "Blog Website",
    category: "fullstack",
    description:
      "A dynamic blog platform with authentication and post management.",
    technologies: ["Python", "Flask", "HTML", "CSS", "SQLite"],
    status: "Completed",
    github: "https://github.com/ashupal86/Blog-Website"
  }
];

/* =========================
   SKILLS (NO PERCENTAGES)
========================= */
export const skillsData = {
  languages: [
    { name: "Python", level: "Strong" },
    { name: "Java", level: "Intermediate" },
    { name: "JavaScript", level: "Basic" },
    { name: "HTML / CSS", level: "Strong" },
    { name: "SQL", level: "Intermediate" }
  ],
  frameworks: [
    { name: "FastAPI", level: "Intermediate" },
    { name: "Flask", level: "Strong" },
    { name: "React", level: "Basic" }
  ],
  devops: [
    { name: "Docker", level: "Intermediate" },
    { name: "Docker Compose", level: "Intermediate" },
    { name: "GitHub Actions", level: "Basic" },
    { name: "Terraform", level: "Learning" }
  ],
  cloud: [
    { name: "AWS", level: "Intermediate" },
    { name: "Google Cloud", level: "Intermediate" },
    { name: "Azure", level: "Basic (Exploring)" },
    { name: "Vercel", level: "Basic (Deployment)" },
    { name: "Render", level: "Basic (Deployment)" }
  ],
  tools: [
    { name: "Git", level: "Strong" },
    { name: "Linux", level: "Strong" },
    { name: "Android Studio", level: "Intermediate" },
    { name: "VS Code", level: "Strong" }
  ]
};

/* =========================
   CERTIFICATIONS
========================= */
export const certificationsData = [
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    year: "2024"
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    year: "2024"
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    year: "2024"
  }
];

/* =========================
   CURRENT LEARNING
========================= */
export const currentlyLearning = [
  "Advanced Docker",
  "FastAPI Best Practices",
  "Microservices Architecture",
  "CI/CD Pipelines",
  "AWS DevOps Concepts"
];

/* =========================
   FUN FACT
========================= */
export const funFact =
  "Skateboard dost ka hai 😁 (The skateboard belongs to my friend 😁)";

export default {
  profileData,
  coreStrengths,
  educationData,
  experienceData,
  projectsData,
  skillsData,
  certificationsData,
  currentlyLearning,
  funFact
};