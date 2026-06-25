import { motion } from 'framer-motion';
import PixelTransition from '../PixelTransition';

function MediaCard({ item }) {
  return (
    <motion.article
      className="media-card"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <div className="media-card-frame">
        {item.type === 'video' ? (
          <video
            className="media-card-video"
            src={item.src}
            poster={item.poster}
            controls
            preload="metadata"
            playsInline
            aria-label={item.alt}
          >
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <PixelTransition
            firstContent={
              <img
                className="media-card-image"
                src={item.src}
                alt={item.alt || item.caption || 'Interest media'}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img
                  className="media-card-image"
                  src={item.src}
                  alt={item.alt || item.caption || 'Interest media'}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4) contrast(1.1)" }}
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
                    backgroundColor: "rgba(10, 10, 15, 0.4)",
                    backdropFilter: "blur(1px)",
                    color: "#ffffff",
                    textAlign: "center",
                    padding: "16px",
                  }}
                >
                  <p style={{ fontSize: "1rem", fontWeight: 700, margin: 0, fontFamily: "var(--font-sans)", textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            }
            gridSize={8}
            pixelColor="#0a0a0f"
            once={false}
            animationStepDuration={0.35}
            aspectRatio="62.5%"
            className="gallery-pixel-transition"
            style={{ width: "100%", height: "100%" }}
          />
        )}
        <span className={`media-type-tag media-type-tag--${item.type}`}>
          {item.type === 'video' ? 'Video' : 'Image'}
        </span>
      </div>
      {item.type === 'video' && item.caption && <p className="media-card-caption">{item.caption}</p>}
    </motion.article>
  );
}

function MediaGallery({ items }) {
  if (!items?.length) {
    return <p className="media-empty">No media added yet.</p>;
  }

  return (
    <div className="media-gallery">
      {items.map((item) => (
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MediaGallery;
