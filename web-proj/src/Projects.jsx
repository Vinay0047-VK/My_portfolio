import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from './components/AnimatedSection';

const projectList = [
  {
    title: 'E-commerce Backend Infrastructure ',
    desc: 'Designed a database for products, orders and users, implementing One-to-Many and Many-to-Many relationships.',
    tech: ['Python', 'Django', 'PostgreSQL'],
    github: 'https://github.com/Vinay0047-VK/Django_Learning',
    demo: 'https://github.com/Vinay0047-VK/Django_Learning',
    accent: '#6366f1',
  },
  {
    title: 'EduVerse : Learning Management System',
    desc: 'Developed a LMS with a React frontend and Django backend, featuring dedicated dashboards for Admin, Trainers and Students.',
    tech: ['React JS', 'Vite', 'CSS3', 'PostgreSQL', 'HTML5'],
    github: 'https://github.com/preeti-1701/lms-project/tree/VInay_47',
    demo: 'https://github.com/preeti-1701/lms-project/tree/VInay_47',
    accent: '#22d3ee',
  },
  {
    title: 'SmartShop E-Commerce',
    desc: 'A modern online store with shopping cart, filters, checkout flow, product search, and fully responsive layout.',
    tech: ['React', 'Context API', 'CSS3', 'Stripe API'],
    github: 'https://github.com',
    demo: 'https://github.com',
    accent: '#a78bfa',
  },
];

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="projects-section">
      <h2 className="section-title">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <StaggerContainer className="projects-grid">
        {projectList.map((project) => (
          <StaggerItem key={project.title}>
            <motion.article
              className="project-card"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div
                className="project-card-glow"
                style={{ background: `radial-gradient(circle at top, ${project.accent}33, transparent 70%)` }}
              />
              <div className="project-card-header">
                <span className="folder-icon">📂</span>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                    aria-label={`${project.title} GitHub`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                    aria-label={`${project.title} live demo`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default Projects;
