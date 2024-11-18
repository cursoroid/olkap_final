import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../queries"; // Adjust path if necessary
import "./top-picks.css";
import { motion } from "framer-motion";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SPECIFIC_PRODUCTS = ["Coral", "Sunburst"]; // Replace with desired product names
const shopUrl = 'https://kollkap.myshopify.com/products/';

const TopPicks = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products.edges
    .map(edge => edge.node)
    .filter(product => SPECIFIC_PRODUCTS.includes(product.title));

  return (
    <div className="top-picks">
      <div className="top-picks-head">
          <h1>Top picks</h1>
      </div>
      {products.map((product, index) => (
        <motion.div
        initial={{ opacity: 0, y: 100 }} // Start completely invisible and below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
        viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
        transition={{
          duration: 1, // Smooth transition over 1 second
          ease: [0.25, 0.8, 0.25, 1] // Custom cubic-bezier easing for smoothness
        }}
      >
        <div
          key={product.id}
          className={`top-pick-item ${index % 2 === 0 ? "image-left" : "image-right"}`}
        >
          <div className="product-image">
            <img
              src={product.images.edges[0]?.node.transformedSrc}
              alt={product.title}
            />
          </div>
          <div className="product-info">
            <h2>{product.title}</h2>
            {/* Render HTML safely */}
            <div
              className="product-description"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <a
              className="buy-now"
              href={`${shopUrl}${product.handle}`} // Use product handle for the URL
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security measure
            >
              Shop Now <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>
        </motion.div>

      ))}
    </div>
  );
};

export default TopPicks;
