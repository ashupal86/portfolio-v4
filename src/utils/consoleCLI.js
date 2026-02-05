// Console CLI for Portfolio
// Fun interactive CLI for developers inspecting the portfolio
import { profileData, skillsData, experienceData, projectsData, educationData } from '../data/portfolioData';

const portfolioConsole = {
    init() {
        // Styling for console messages
        const styles = {
            title: 'color: #FFE500; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);',
            subtitle: 'color: #3498DB; font-size: 16px; font-weight: bold;',
            info: 'color: #2ECC71; font-size: 14px;',
            command: 'color: #E74C3C; font-size: 14px; font-weight: bold;',
            text: 'color: #95A5A6; font-size: 13px;',
            link: 'color: #3498DB; font-size: 13px; text-decoration: underline;'
        };

        // Welcome message
        console.log('%c👋 Hey there, Developer!', styles.title);
        console.log(`%cWelcome to ${profileData.name}'s Portfolio`, styles.subtitle);
        console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.text);
        console.log('%c\nI see you\'re curious about how this portfolio works! 🔍', styles.info);
        console.log('%cFeel free to explore the code and learn from it.\n', styles.text);

        // Available commands
        console.log('%c📋 Available Commands:', styles.subtitle);
        console.log('%cportfolio.about()%c      - Learn more about me', styles.command, styles.text);
        console.log('%cportfolio.skills()%c     - View my technical skills', styles.command, styles.text);
        console.log('%cportfolio.projects()%c   - See my projects', styles.command, styles.text);
        console.log('%cportfolio.contact()%c    - Get my contact information', styles.command, styles.text);
        console.log('%cportfolio.tech()%c       - View tech stack used in this portfolio', styles.command, styles.text);
        console.log('%cportfolio.easter()%c     - Find hidden easter eggs 🥚', styles.command, styles.text);
        console.log('%cportfolio.hire()%c       - Interested in working together?', styles.command, styles.text);
        console.log('%c\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', styles.text);

        // Make portfolio object globally available
        window.portfolio = this.commands;
    },

    commands: {
        about() {
            console.log(`%c👨‍💻 About ${profileData.name}`, 'color: #FFE500; font-size: 18px; font-weight: bold;');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #95A5A6;');
            console.log(`🎓 ${educationData.degree} at ${educationData.institution} (${educationData.status})`);
            const currentExp = experienceData.find(e => e.status === 'Active') || experienceData[0];
            console.log(`💼 ${currentExp.role} at ${currentExp.company}`);
            console.log(`🚀 ${profileData.title}`);
            console.log(`💻 ${profileData.bio}`);
            console.log('\n📍 Location: ' + profileData.location);
            console.log('📧 Email: ' + profileData.email);
            console.log('🔗 Website: ' + profileData.website);
        },

        skills() {
            console.log('%c🛠️ Technical Skills', 'color: #3498DB; font-size: 18px; font-weight: bold;');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #95A5A6;');

            const flatSkills = {};
            Object.keys(skillsData).forEach(cat => {
                flatSkills[cat.charAt(0).toUpperCase() + cat.slice(1)] = skillsData[cat].map(s => s.name).join(', ');
            });
            console.table(flatSkills);
        },

        projects() {
            console.log('%c🚀 Featured Projects', 'color: #2ECC71; font-size: 18px; font-weight: bold;');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #95A5A6;');

            projectsData.slice(0, 5).forEach((project, idx) => {
                console.log(`\n${idx + 1}. ${project.title}`);
                console.log(`   ${project.description}`);
                console.log(`   Tech: ${project.technologies.join(', ')}\n`);
            });

            console.log(`%cView all projects: %c${profileData.github}`, 'color: #95A5A6;', 'color: #3498DB; text-decoration: underline;');
        },

        contact() {
            console.log('%c📬 Contact Information', 'color: #E74C3C; font-size: 18px; font-weight: bold;');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #95A5A6;');
            console.log(`\n📧 Email: ${profileData.email}`);
            console.log(`📱 Phone: ${profileData.phone}`);
            console.log(`💼 LinkedIn: ${profileData.linkedin}`);
            console.log(`💻 GitHub: ${profileData.github}`);
            console.log(`🌐 Website: ${profileData.website}`);
            console.log(`📄 Resume: ${profileData.resume}`);
            console.log('\n💡 Feel free to reach out for collaborations or opportunities!');
        },

        tech() {
            console.log('%c⚡ Portfolio Tech Stack', 'color: #9B59B6; font-size: 18px; font-weight: bold;');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #95A5A6;');
            console.log('\n🏗️  Build Tool: Vite 4.5.0');
            console.log('⚛️  Framework: React 18.2.0');
            console.log('🛣️  Routing: React Router DOM');
            console.log('📝 Markdown: react-markdown + remark-gfm + rehype-highlight');
            console.log('🎨 Styling: Pure CSS (No frameworks!)');
            console.log('🔍 SEO: react-helmet-async + JSON-LD');
            console.log('🎯 Icons: react-icons (Simple Icons + Devicons)');
            console.log('📊 Analytics: Google Analytics 4 + Microsoft Clarity');
            console.log('\n🎨 Design: Custom sticky notes & dotted notebook aesthetic');
            console.log('📱 Responsive: Mobile-first approach');
            console.log('♿ Accessible: Semantic HTML + ARIA labels');
        },

        easter() {
            const eggs = [
                '🥚 The dotted background has exactly 24px spacing!',
                '📌 Each section has a different colored pin - count them all!',
                '🎨 The yellow highlight uses #FFE500 - the perfect sticky note color',
                '🔄 Hover over skill cards - they rotate 5 degrees!',
                '📸 The profile photo has a gradient border animation',
                '⚡ This entire portfolio loads in under 2 seconds',
                '🎯 There are 42 public repos on my GitHub (at last count)',
                '🏠 My homelab runs 24/7 with GPU passthrough to Windows 11',
                '📝 All blog posts are written in pure Markdown',
                '🎭 Check the network tab - no external CSS frameworks!'
            ];

            const randomEgg = eggs[Math.floor(Math.random() * eggs.length)];
            console.log('%c🎉 Easter Egg Found!', 'color: #FFE500; font-size: 18px; font-weight: bold;');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #95A5A6;');
            console.log(`\n${randomEgg}`);
            console.log('\n💡 Run this command again to discover more secrets!');
        },

        hire() {
            console.log('%c💼 Let\'s Work Together!', 'color: #2ECC71; font-size: 20px; font-weight: bold;');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #95A5A6;');
            console.log('\n🎯 I\'m currently looking for:');
            console.log('   • Full-time Software Development roles');
            console.log('   • DevOps Engineering positions');
            console.log('   • Backend Development opportunities');
            console.log('   • Open Source collaborations');
            console.log('\n💪 What I bring to the table:');
            console.log('   ✓ 3+ years of self-taught programming experience');
            console.log('   ✓ Strong foundation in Python, Flask, and React');
            console.log('   ✓ DevOps skills with Docker, Linux, and cloud platforms');
            console.log('   ✓ Passion for learning and building cool stuff');
            console.log('   ✓ Experience with real-world projects and APIs');
            console.log('\n📧 Interested? Let\'s connect!');
            console.log('   Email: palbro86@gmail.com');
            console.log('   LinkedIn: https://linkedin.com/in/ashish-pal-5725a6257');
            console.log('\n🚀 Let\'s build something amazing together!');
        },

        // Hidden command for fun
        konami() {
            console.log('%c🎮 KONAMI CODE ACTIVATED!', 'color: #FF0000; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #95A5A6;');
            console.log('\n🎉 You found the secret command!');
            console.log('🏆 Achievement Unlocked: Console Explorer');
            console.log('\n💡 Fun Fact: This portfolio was built with:');
            console.log('   • 2,000+ lines of code');
            console.log('   • 0 UI frameworks');
            console.log('   • 100% custom CSS');
            console.log('   • Lots of ☕ and 🎵');
            console.log('\n🎨 Design inspired by physical notebooks and sticky notes!');
        }
    }
};

// Initialize console CLI when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => portfolioConsole.init());
} else {
    portfolioConsole.init();
}

// Konami code easter egg (↑ ↑ ↓ ↓ ← → ← → B A)
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiPattern.join('')) {
        window.portfolio.konami();
        konamiCode = [];
    }
});

export default portfolioConsole;
