import { AnimatedSection, StaggerContainer, StaggerItem } from './components/AnimatedSection';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss, SiMysql, SiPostgresql, SiPython, SiCplusplus, SiOpenjdk } from 'react-icons/si';

const skills = [
  { name: 'C++', icon: <SiCplusplus />, category: 'Programming Language', color: '#00599C' },
  { name: 'React', icon: <FaReact />, category: 'Frontend', color: '#61DAFB' },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'Frontend', color: '#F7DF1E' },
  { name: 'HTML5', icon: <SiHtml5 />, category: 'Frontend', color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss />, category: 'Frontend', color: '#1572B6' },
  { name: 'Git & GitHub', icon: <FaGitAlt />, category: 'Tools', color: '#F05032' },
  { name: 'MySQL', icon: <SiMysql />, category: 'Database', color: '#4479A1' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'Database', color: '#336791' },
  { name: 'Java', icon: <SiOpenjdk />, category: 'Programming Language', color: '#007396' },
  { name: 'Python', icon: <SiPython />, category: 'Programming Language', color: '#3776AB' },
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
                  <span className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
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
