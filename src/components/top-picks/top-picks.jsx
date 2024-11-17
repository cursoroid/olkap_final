import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../queries"; // Adjust path if necessary
import "./top-picks.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SPECIFIC_PRODUCTS = ["Coral", "Sunburst", "Solis"]; // Replace with desired product names
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
      {products.map((product, index) => (
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
            <p>{product.description || "No description available."}</p>
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
      ))}
    </div>
  );
};

export default TopPicks;
