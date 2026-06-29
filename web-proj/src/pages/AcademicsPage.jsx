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
      {...fadeUp(index * 0.06)}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
    >
      <span className="acad-subject-dot" />
      <div>
        <h4 className="acad-subject-name">{subject.name}</h4>
        <p className="acad-subject-desc">{subject.desc}</p>
      </div>
    </motion.div>
  );
}

/* ── Semester accordion panel ── */
function SemesterPanel({ semester, color, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);

  return (
    <div className="acad-semester" style={{ '--sem-color': color }}>
      <button
        className={`acad-sem-header ${open ? 'open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="acad-sem-label">{semester.label}</span>
        <span className="acad-sem-count">
          {semester.subjects.length} subject{semester.subjects.length !== 1 ? 's' : ''}
        </span>
        <span className={`acad-sem-chevron ${open ? 'open' : ''}`}>▾</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="acad-sem-body"
            key="body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="acad-subjects-grid">
              {semester.subjects.map((subj, i) => (
                <SubjectCard key={subj.name} subject={subj} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Degree section card ── */
function DegreeCard({ prog, index }) {
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

      {/* Timeline of semesters */}
      <div className="acad-semesters">
        {prog.semesters.map((sem, i) => (
          <SemesterPanel
            key={sem.sem}
            semester={sem}
            color={prog.color}
            defaultOpen={i === 0}
          />
        ))}
      </div>
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
              {prog.icon} {prog.degree}
            </a>
          ))}
        </motion.div>
      </section>

      {/* Timeline line + degree cards */}
      <div className="acad-timeline">
        {academicData.map((prog, i) => (
          <div key={prog.id} id={prog.id} className="acad-timeline-entry">
            <div className="acad-timeline-dot" style={{ background: prog.color, boxShadow: `0 0 14px ${prog.color}` }} />
            <DegreeCard prog={prog} index={i} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AcademicsPage;
