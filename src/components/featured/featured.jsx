import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../queries';
import placeholderImage from '../../assets/placeholder-image.jpg';
import './featured.css';

const Featured = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Function to calculate card width dynamically
    const updateCardWidth = () => {
      if (sliderRef.current) {
        const cardElement = sliderRef.current.querySelector('.product-card');
        if (cardElement) {
          setCardWidth(cardElement.offsetWidth);
        }
      }
    };

    // Update card width on resize
    window.addEventListener('resize', updateCardWidth);
    updateCardWidth(); // Initial calculation

    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const storeDomain = "https://kollkap.myshopify.com"; // Replace with your Shopify store URL

  // Ensure there are at least 10 products by filling in with placeholder images
  const products = data.products.edges.length < 10
    ? [
        ...data.products.edges,
        ...Array(10 - data.products.edges.length).fill({
          node: { images: { edges: [{ node: { transformedSrc: placeholderImage } }] } },
        }),
      ]
    : data.products.edges;

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="featured-container">
      <button className="slider-button prev" onClick={handlePrev}>&#10094;</button>
      
      <div className="card-slider" 
           style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
           ref={sliderRef}>
        {products.map(({ node }) => {
          const productUrl = `${storeDomain}/products/${node.handle}`;
          return (
            <div
              key={node.id}
              className="product-card"
              onClick={() => {
                console.log(productUrl);
                window.open(productUrl, '_blank');
              }}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={node.images.edges[0]?.node.transformedSrc || placeholderImage}
                alt={node.title || 'Product'}
                className="product-image"
              />
              <h3 className="product-title">{node.title || 'Product Title'}</h3>
            </div>
          );
        })}
      </div>
      
      <button className="slider-button next" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default Featured;
