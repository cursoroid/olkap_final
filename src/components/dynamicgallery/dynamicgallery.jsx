import React, { useState } from 'react';
import './GalleryStyles.css';
import NavbarGlob from '../navbarglob';

// Sample interior design images with real URLs and metadata
const interiorImages = [
  { 
    src: "https://images.unsplash.com/photo-1617104666298-550a8cdf9a39", 
    alt: "Minimalist Modern Living Room", 
    width: 1200, 
    height: 800,
    category: "Living Room"
  },
  { 
    src: "https://images.unsplash.com/photo-1631679706844-7e7c42a4b56c", 
    alt: "Scandinavian Kitchen Design", 
    width: 1500, 
    height: 1000,
    category: "Kitchen"
  },
  { 
    src: "https://images.unsplash.com/photo-1558892465-0139bb0c1635", 
    alt: "Cozy Rustic Bedroom", 
    width: 800, 
    height: 1200,
    category: "Bedroom"
  },
  { 
    src: "https://images.unsplash.com/photo-1600607686527-6974f1e7504f", 
    alt: "Modern Home Office", 
    width: 1600, 
    height: 1067,
    category: "Home Office"
  },
  { 
    src: "https://images.unsplash.com/photo-1556194472-9d1ebd4a19c0", 
    alt: "Elegant Dining Room", 
    width: 1200, 
    height: 800,
    category: "Dining Room"
  },
  { 
    src: "https://images.unsplash.com/photo-1585128719715-d01efc0anticipate0", 
    alt: "Luxurious Bathroom", 
    width: 1000, 
    height: 1500,
    category: "Bathroom"
  },
  { 
    src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45", 
    alt: "Industrial Loft Living Space", 
    width: 1400, 
    height: 933,
    category: "Living Room"
  },
  { 
    src: "https://images.unsplash.com/photo-1489171207368-8f50de1f5601", 
    alt: "Bohemian Bedroom Retreat", 
    width: 1200, 
    height: 800,
    category: "Bedroom"
  },
  { 
    src: "https://images.unsplash.com/photo-1484101403633-471b3429f771", 
    alt: "Minimalist White Kitchen", 
    width: 1500, 
    height: 1000,
    category: "Kitchen"
  },
  { 
    src: "https://images.unsplash.com/photo-1513161455379-2bfb902f7639", 
    alt: "Zen Home Office", 
    width: 1200, 
    height: 800,
    category: "Home Office"
  },
  { 
    src: "https://images.unsplash.com/photo-1631048549708-d7954505dc11", 
    alt: "Mediterranean Dining Area", 
    width: 1600, 
    height: 1067,
    category: "Dining Room"
  },
  { 
    src: "https://images.unsplash.com/photo-1615875474601-c9da47d8975a", 
    alt: "Modern Spa-like Bathroom", 
    width: 1200, 
    height: 1800,
    category: "Bathroom"
  }
];

const DynamicGallery = () => {
  const [filter, setFilter] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Calculate dynamic grid layout based on image sizes
  const calculateImageStyle = (image) => {
    const aspectRatio = image.width / image.height;
    let gridColumnSpan = 1;
    let gridRowSpan = 1;

    if (aspectRatio > 1.5) {
      gridColumnSpan = 2; // Wide images
    } else if (aspectRatio < 0.75) {
      gridRowSpan = 2; // Tall images
    }

    return {
      gridColumn: `span ${gridColumnSpan}`,
      gridRow: `span ${gridRowSpan}`,
      aspectRatio: `${image.width} / ${image.height}`,
    };
  };

  // Filter images by category
  const filteredImages = filter 
    ? interiorImages.filter(img => img.category === filter)
    : interiorImages;

  // Get unique categories sorted alphabetically
  const categories = [...new Set(interiorImages.map(img => img.category))].sort();

  return (
    <div className="gallery-container">
      <NavbarGlob/>
      <div className="gallery-filters">
        <button 
          className={`filter-btn ${filter === null ? 'active' : ''}`}
          onClick={() => setFilter(null)}
        >
          All Rooms
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item"
            style={calculateImageStyle(image)}
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              loading="lazy"
            />
            <div className="gallery-item-overlay">
              <p className="overlay-title">{image.alt}</p>
              <p className="overlay-category">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <div className="lightbox-content">
            <button 
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
            />
            <div className="lightbox-info">
              <p className="lightbox-title">{selectedImage.alt}</p>
              <p className="lightbox-category">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicGallery;