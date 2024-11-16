import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../queries';
import placeholderImage from '../../assets/placeholder-image.jpg';
import './featured.css';

const Featured = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const storeDomain = "https://your-store.myshopify.com"; // Replace with your Shopify store URL

  // Ensure there are at least 10 products by filling in with placeholder images
  const products = data.products.edges.length < 10
    ? [
        ...data.products.edges,
        ...Array(10 - data.products.edges.length).fill({
          node: { images: { edges: [{ node: { transformedSrc: placeholderImage } }] } },
        }),
      ]
    : data.products.edges;

  // Slide functionality
  const handleNext = () => {
    if (currentIndex < products.length - 5) {
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
      
      <div className="card-slider" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
        {products.map(({ node }) => (
          <div
            key={node.id}
            className="product-card"
            onClick={() => window.open(`${storeDomain}/products/${node.handle}`, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={node.images.edges[0]?.node.transformedSrc || placeholderImage}
              alt={node.title || 'Product'}
              className="product-image"
            />
            <h3 className="product-title">{node.title || 'Product Title'}</h3>
          </div>
        ))}
      </div>
      
      <button className="slider-button next" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default Featured;
