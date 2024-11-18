import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../queries";
import "./recommend.css";
import { motion } from "framer-motion";

const Recommend = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Extract the first four product images
  const products = data.products.edges.slice(0, 4);

  const shopUrl = 'https://kollkap.myshopify.com/products/';

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1]
      }}
    >
      <div className="rec_main">
        <div className="rec_tex">
          <h1>Recommended</h1>
        </div>
        <div className="recommend-grid">
          {products.map(({ node }) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <div className="recommend-item">
                <a href={`${shopUrl}${node.handle}`} className="product-link">
                  <div className="image-container">
                    <img
                      src={node.images.edges[0]?.node.transformedSrc}
                      alt={node.title}
                      className="recommend-image"
                    />
                  </div>
                  <div className="product-name">{node.title}</div>
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
