import { motion } from 'framer-motion';



const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const roles = ['Full Stack Developer', 'UI/UX Builder', 'Problem Solver'];

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-eyebrow" variants={item}>
          Welcome to my portfolio
        </motion.p>

        <motion.h1 className="hero-title" variants={item}>
          Hi, I&apos;m{' '}
          <span className="highlight-text gradient-text">Vinay Kumar N</span>
        </motion.h1>

        <motion.div className="hero-subtitle-wrap" variants={item}>
          <h2 className="hero-subtitle">
            I craft{' '}
            <span className="typing-text">
              {roles.map((role, i) => (
                <span key={role} style={{ animationDelay: `${i * 4}s` }}>
                  {role}
                </span>
              ))}
            </span>
          </h2>
        </motion.div>

        <motion.p className="hero-description" variants={item}>
          I build high-performance, beautiful, and interactive web applications
          with modern technologies. Let&apos;s create something amazing together.
        </motion.p>

        <motion.div className="hero-ctas" variants={item}>
          <a href="#projects" className="btn btn-primary">
            <span>View My Work</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Get In Touch</span>
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={item}>
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Learning</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">8+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </motion.div>

        <motion.div className="hero-socials" variants={item}>
          <a
            href="https://github.com/Vinay0047-VK"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-kumar-n-b98024208/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="mailto:vinaykumartlgp45@gmail.com" className="social-icon" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </motion.div>

        <motion.div className="scroll-hint" variants={item} aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
