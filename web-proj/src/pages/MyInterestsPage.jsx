import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { interestCategories, interestMedia } from "../data/interests";
import MediaGallery from "../components/MediaGallery";
import { AnimatedSection } from "../components/AnimatedSection";

import PixelTransition from "../PixelTransition.jsx";
import interestsPhoto from "../assets/interests_photo.png";
import interestsChess from "../assets/interests_chess.png";

const MyInterestsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="content interests-page">
      <section className="interests-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/" className="interests-back-link">
            ← Back to Home
          </Link>
          <h1 className="interests-hero-title">
            My <span className="gradient-text">Interests</span>
          </h1>
          <p className="interests-hero-desc">
            A glimpse into what I enjoy beyond code — sports, chess, and
            photography. Browse images and videos from each passion.
          </p>
        </motion.div>
      </section>

      <nav className="interests-tabs" aria-label="Interest categories">
        {interestCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className="interests-tab"
            onClick={() => scrollToSection(cat.id)}
          >
            <span className="interests-tab-icon" aria-hidden="true">
              {cat.icon}
            </span>
            {cat.title}
          </button>
        ))}
      </nav>

      {interestCategories.map((cat, index) => (
        <AnimatedSection
          key={cat.id}
          id={cat.id}
          className="interest-section"
          delay={index * 0.05}
        >
          <div className="interest-section-header">
            <span className="interest-section-icon" aria-hidden="true">
              {cat.icon}
            </span>
            <div>
              <h2 className="section-title interest-section-title">
                {cat.title}
              </h2>
              <p className="interest-section-desc">{cat.description}</p>
            </div>
          </div>
          <MediaGallery items={interestMedia[cat.id]} />
        </AnimatedSection>
      ))}

      <AnimatedSection id="interactive-reveal" className="interest-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="interest-section-header" style={{ width: '100%' }}>
          <span className="interest-section-icon" aria-hidden="true">✨</span>
          <div>
            <h2 className="section-title interest-section-title">
              Interactive Story
            </h2>
            <p className="interest-section-desc">
              Hover over the card to reveal the mindset I bring to everything I do.
            </p>
          </div>
        </div>

        <PixelTransition
          firstContent={
            <img
              src={interestsPhoto}
              alt="Hobby photography gear"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <img
                src={interestsChess}
                alt="Tactical chess strategy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(10, 10, 15, 0.7)",
                  backdropFilter: "blur(2px)",
                  color: "#ffffff",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "8px", fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                  Focus & Strategy
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "320px", lineHeight: "1.5" }}>
                  Bringing photography precision and chess-like foresight to full-stack web applications.
                </p>
              </div>
            </div>
          }
          gridSize={10}
          pixelColor="#0a0a0f"
          once={false}
          animationStepDuration={0.4}
          aspectRatio="62.5%"
          className="custom-pixel-card"
          style={{ width: "100%", maxWidth: "480px", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}
        />
      </AnimatedSection>
    </main>
  );
};

export default MyInterestsPage;
