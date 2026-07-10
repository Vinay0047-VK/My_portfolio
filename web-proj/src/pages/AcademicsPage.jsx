import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { academicData } from '../data/academics';

/* ── tiny helper ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

/* ── Subject card ── */
function SubjectCard({ subject, index }) {
  return (
    <motion.div
      className="acad-subject-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      whileHover={{ y: -3, scale: 1.01 }}
    >
      <span className="acad-subject-dot" />
      <div>
        <h4 className="acad-subject-name">{subject.name}</h4>
        <p className="acad-subject-desc">{subject.desc}</p>
      </div>
    </motion.div>
  );
}

/* ── Degree section card (with exclusive-open semester logic) ── */
function DegreeCard({ prog, index }) {
  const [activeSem, setActiveSem] = useState(0); // index of open semester

  const handleSemClick = (i) => {
    setActiveSem((prev) => (prev === i ? null : i));
  };

  return (
    <motion.section
      className="acad-degree-card"
      style={{ '--deg-color': prog.color, '--deg-glow': prog.glow }}
      {...fadeUp(index * 0.12)}
    >
      {/* Header */}
      <div className="acad-degree-header">
        <div className="acad-degree-icon-wrap">
          <span className="acad-degree-icon">{prog.icon}</span>
        </div>
        <div className="acad-degree-meta">
          <span className="acad-degree-period">{prog.period}</span>
          <h2 className="acad-degree-title">
            <span className="acad-degree-badge">{prog.degree}</span>
            {prog.fullName}
          </h2>
          {prog.score && (
            <div className="acad-score-pill" style={{ '--score-color': prog.color }}>
              <span className="acad-score-label">{prog.score.label}:</span>
              <span className="acad-score-value">{prog.score.value}</span>
            </div>
          )}
        </div>
      </div>

      {/* Semester block buttons */}
      <div className="acad-sem-blocks">
        {prog.semesters.map((sem, i) => (
          <button
            key={sem.sem}
            className={`acad-sem-block ${activeSem === i ? 'active' : ''}`}
            onClick={() => handleSemClick(i)}
            aria-expanded={activeSem === i}
          >
            <span className="acad-sem-block-label">{sem.label}</span>
            <span className="acad-sem-block-count">
              {sem.subjects.length} subject{sem.subjects.length !== 1 ? 's' : ''}
            </span>
          </button>
        ))}
      </div>

      {/* Subject panel — only active semester */}
      <AnimatePresence mode="wait">
        {activeSem !== null && prog.semesters[activeSem] && (
          <motion.div
            key={activeSem}
            className="acad-sem-body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="acad-subjects-grid">
              {prog.semesters[activeSem].subjects.map((subj, i) => (
                <SubjectCard key={subj.name} subject={subj} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

/* ── Page ── */
const AcademicsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="content acad-page">
      {/* Hero */}
      <section className="acad-hero">
        <motion.div {...fadeUp(0)}>
          <Link to="/" className="interests-back-link">← Back to Home</Link>
          <h1 className="acad-hero-title">
            Academic <span className="gradient-text">Journey</span>
          </h1>
          <p className="acad-hero-desc">
            From science foundations to full-stack mastery — a timeline of degrees,
            semesters, and the subjects that shaped my thinking.
          </p>
        </motion.div>

        {/* Quick-jump pills */}
        <motion.div className="acad-jump-pills" {...fadeUp(0.15)}>
          {academicData.map((prog) => (
            <a
              key={prog.id}
              href={`#${prog.id}`}
              className="acad-jump-pill"
              style={{ '--pill-color': prog.color }}
            >
              {/* {prog.icon} */} {prog.degree}
            </a>
          ))}
        </motion.div>
      </section>

      {/* Degree Journey */}
      <div className="acad-journey-label">
        <span className="acad-journey-line" />
        <span className="acad-journey-text">Degree Journey</span>
        <span className="acad-journey-line" />
      </div>

      {/* Timeline line + degree cards */}
      <div className="acad-timeline">
        {academicData.map((prog, i) => (
          <div key={prog.id} id={prog.id} className="acad-timeline-entry">
            <div
              className="acad-timeline-dot"
              style={{ background: prog.color, boxShadow: `0 0 14px ${prog.color}` }}
            />
            <DegreeCard prog={prog} index={i} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AcademicsPage;
