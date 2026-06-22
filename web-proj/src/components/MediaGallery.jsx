import { motion } from 'framer-motion';

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
          <img
            className="media-card-image"
            src={item.src}
            alt={item.alt || item.caption || 'Interest media'}
            loading="lazy"
          />
        )}
        <span className={`media-type-tag media-type-tag--${item.type}`}>
          {item.type === 'video' ? 'Video' : 'Image'}
        </span>
      </div>
      {item.caption && <p className="media-card-caption">{item.caption}</p>}
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
