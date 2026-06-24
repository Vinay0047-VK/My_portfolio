import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { interestCategories, interestMedia } from "../data/interests";
import MediaGallery from "../components/MediaGallery";
import { AnimatedSection } from "../components/AnimatedSection";

import PixelTransition from "../PixelTransition.jsx";

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

      <PixelTransition
        firstContent={
          <>
            <img
              src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&q=80"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </>
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#111",
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>
              Meow!
            </p>
          </div>
        }
        gridSize={8}
        pixelColor="#ffffff"
        once={false}
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
    </main>
  );
};

export default MyInterestsPage;
