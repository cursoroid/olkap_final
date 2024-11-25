import React, { useState } from 'react';
import { useEffect } from 'react';
import './GalleryStyles.css';
import NavbarGlob from '../navbarglob';
import { motion } from "framer-motion";

// Sample interior design images with real URLs and metadata
const interiorImages = [
  {
    src: "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Minimalist Modern Living Room",
    width: 1200,
    height: 800,
    category: "Living Room"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Scandinavian Kitchen Design",
    width: 1500,
    height: 1000,
    category: "Kitchen"
  },
  {
    src: "https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cozy Rustic Bedroom",
    width: 800,
    height: 1200,
    category: "Bedroom"
  },
  {
    src: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern Home Office",
    width: 1600,
    height: 1067,
    category: "Home Office"
  },
  {
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Elegant Dining Room",
    width: 1200,
    height: 800,
    category: "Dining Room"
  },
  {
    src: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    src: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bohemian Bedroom Retreat",
    width: 1200,
    height: 800,
    category: "Bedroom"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1711464867469-b45e19a09996?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Minimalist White Kitchen",
    width: 1500,
    height: 1000,
    category: "Kitchen"
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Zen Home Office",
    width: 1200,
    height: 800,
    category: "Home Office"
  },
  {
    src: "https://images.unsplash.com/photo-1492097631548-189753426f9c?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mediterranean Dining Area",
    width: 1600,
    height: 1067,
    category: "Dining Room"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1671269704807-5479855d03fe?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern Spa-like Bathroom",
    width: 1200,
    height: 1800,
    category: "Bathroom"
  },
  {
    src: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bohemian Bedroom Retreat",
    width: 1200,
    height: 800,
    category: "Bedroom"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1711464867469-b45e19a09996?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Minimalist White Kitchen",
    width: 1500,
    height: 1000,
    category: "Kitchen"
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Zen Home Office",
    width: 1200,
    height: 800,
    category: "Home Office"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Minimalist Modern Living Room",
    width: 1200,
    height: 800,
    category: "Living Room"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Scandinavian Kitchen Design",
    width: 1500,
    height: 1000,
    category: "Kitchen"
  },
  {
    src: "https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cozy Rustic Bedroom",
    width: 800,
    height: 1200,
    category: "Bedroom"
  },
  {
    src: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern Home Office",
    width: 1600,
    height: 1067,
    category: "Home Office"
  }
];

const DynamicGallery = () => {

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);


  const [filter, setFilter] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Calculate dynamic grid layout based on image sizes
  const calculateImageStyle = (image) => {
    const aspectRatio = image.width / image.height;
    let gridColumnSpan = 1;
    let gridRowSpan = 1;

    if (aspectRatio > 1.5) {
      gridColumnSpan = 1; // Wide images
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
      <NavbarGlob />
      <div className='gallery-title'>
          <h1>Gallery</h1>
      </div>
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

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >

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

      </motion.div>

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