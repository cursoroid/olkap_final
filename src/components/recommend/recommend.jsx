import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../queries";
import "./recommend.css";
import { motion } from "framer-motion";

const Recommend = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Extract the first eight product images
  const products = data.products.edges.slice(0, 8);

  const shopUrl = 'https://kollkap.myshopify.com/products/';

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start completely invisible and below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
      viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
      transition={{
        duration: 1, // Smooth transition over 1 second
        ease: [0.25, 0.8, 0.25, 1] // Custom cubic-bezier easing for smoothness
      }}
    >
    <div className="rec_main">
      <div className="rec_tex">
        <h1>Recommended</h1>
      </div>
      <div className="recommend-grid">
        {products.map(({ node }) => (
          <motion.div
          initial={{ opacity: 0, y: 100 }} // Start completely invisible and below
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
          viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
          transition={{
            duration: 1, // Smooth transition over 1 second
            ease: [0.25, 0.8, 0.25, 1] // Custom cubic-bezier easing for smoothness
          }}
        >
          <div key={node.id} className="recommend-item">
            {/* Correctly reference node.handle here */}
            <a href={`${shopUrl}${node.handle}`} className="product-link">
              <img
                src={node.images.edges[0]?.node.transformedSrc}
                alt={node.title}
                className="recommend-image"
              />
              <div className="product-name">{node.title}</div> {/* Display product name */}
            </a>
          </div>
          </motion.div>
        ))}
      </div>
      <div className="rec-descover">
        <a href="#">Discover More</a>
      </div>
    </div>
    </motion.div>
  );
};

export default Recommend;
