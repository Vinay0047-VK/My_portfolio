import { AnimatedSection, StaggerContainer, StaggerItem } from './components/AnimatedSection';

const skills = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'JavaScript', icon: '🟨', category: 'Frontend' },
  { name: 'HTML5', icon: '🟧', category: 'Frontend' },
  { name: 'CSS3', icon: '🟦', category: 'Frontend' },
  { name: 'Node.js', icon: '🟩', category: 'Backend' },
  { name: 'Express', icon: '⚙️', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'Git & GitHub', icon: '🐙', category: 'Tools' },
];

const About = () => {
  return (
    <AnimatedSection id="about" className="about-section">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="about-grid">
        <div className="about-bio">
          <p>
            Hello! I&apos;m <strong>Vinay Kumar N</strong>, a passionate developer focused on
            building modern, robust, and interactive web applications. I love crafting
            pixel-perfect interfaces and exploring state management in React.
          </p>
          <p>
            My approach centers on clean code, high performance, and thoughtful UX.
            I enjoy solving complex problems and turning creative ideas into responsive,
            user-friendly products.
          </p>
        </div>
        <div className="about-skills">
          <h3 className="skills-subtitle">Core Tech Stack</h3>
          <StaggerContainer className="skills-list">
            {skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <div className="skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-cat">{skill.category}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
