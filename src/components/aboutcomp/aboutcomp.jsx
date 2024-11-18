import React from 'react';
import './aboutcomp.css';

const Aboutcomp = () => {
  return (
    <div className="aboutcomp-container">
      <section className="aboutcomp-hero">
        <h1>Craftsmanship Meets Poetry</h1>
        <p>OLKAP fuses heritage with modern luxury to create artful metalwork that transcends time.</p>
      </section>

      <div className="aboutcomp-section-container">
        <div className="aboutcomp-section-image" style={{backgroundImage: 'url("/api/placeholder/800/600?text=Our+Story")'}}></div>
        <div className="aboutcomp-section-content aboutcomp-section">
          <h2>Our Story</h2>
          <p>
            Inspired by India's legacy of exquisite craftsmanship, OLKAP started as a vision to elevate metal objects into luxury art forms. Today, it stands as a name synonymous with refinement, quality, and timeless appeal.
          </p>
        </div>
      </div>

      <div className="aboutcomp-section-container">
        <div className="aboutcomp-section-image" style={{backgroundImage: 'url("/api/placeholder/800/600?text=Heritage")'}}></div>
        <div className="aboutcomp-section-content aboutcomp-section aboutcomp-alt">
          <h2>The Beauty of Heritage</h2>
          <p>
            Drawing on India's rich artisanal traditions, OLKAP merges cultural heritage with modern innovation. Each creation embodies an intricate blend of tradition and progress, celebrating India's evolving artistry.
          </p>
        </div>
      </div>

      <div className="aboutcomp-section-container">
        <div className="aboutcomp-section-image" style={{backgroundImage: 'url("/api/placeholder/800/600?text=Our+Craft")'}}></div>
        <div className="aboutcomp-section-content aboutcomp-section">
          <h2>The Heart of Our Craft</h2>
          <p>
            OLKAP integrates high-tech precision with skilled craftsmanship to produce objects of unparalleled detail and luxury. Our pieces are not just items—they are statements of excellence and passion.
          </p>
        </div>
      </div>

      <section className="aboutcomp-contact">
        <h2>Connect with Us</h2>
        <p>Explore the artistry of OLKAP. Contact us for more details or visit our exclusive collections.</p>
        <p><strong>Email:</strong> info@olkap.com</p>
        <p><strong>Phone:</strong> +91 960 7979 979</p>
        <p><strong>Address:</strong> Tower 1, City Point, Boat Club Rd, Pune, Maharashtra 411001</p>
      </section>
    </div>
  );
};

export default Aboutcomp;