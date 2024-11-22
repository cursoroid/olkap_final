import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../queries'; // Adjust the path if necessary
import './featured.css'; // Assuming the styles are in a separate file

import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Featured = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerRow, setCardsPerRow] = useState(5); // Default to 5 cards per row

    const totalItems = data ? data.products.edges.length : 0;

    // Dynamically calculate the number of cards based on the viewport width
    const updateCardsPerRow = () => {
        const width = window.innerWidth;
        if (width > 992) {
            setCardsPerRow(5); // 5 cards for large screens
        } else if (width > 830) {
            setCardsPerRow(4); // 4 cards for medium screens
        } else if (width > 768) {
            setCardsPerRow(3); // 3 cards for tablets
        } else if (width > 550) {
            setCardsPerRow(2); // 2 cards for small tablets
        } else {
            setCardsPerRow(1); // 1 card for mobile
        }
    };

    // Handle window resize to update cards per row dynamically
    useEffect(() => {
        updateCardsPerRow();
        window.addEventListener('resize', updateCardsPerRow);
        return () => {
            window.removeEventListener('resize', updateCardsPerRow);
        };
    }, []);

    // Slide to the next product (move one card at a time)
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    // Slide to the previous product (move one card at a time)
    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
        );
    };

    // Fetch current products to display
    const currentProducts = data
        ? data.products.edges.slice(currentIndex, currentIndex + cardsPerRow)
        : [];

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Base URL of your Shopify store (replace this with your actual Shopify domain)
    const shopUrl = 'https://0gcq3v-wh.myshopify.com/products/';

    return (

        <motion.div
            initial={{ opacity: 0, y: 100 }} // Start completely invisible and below
            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
            viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
            transition={{
                duration: 2, // Smooth transition over 1 second
                ease: [0.25, 0.8, 0.25, 1] // Custom cubic-bezier easing for smoothness
            }}
        >

            <div className='featured-main'>
                <h1>New Arrivals</h1>
                <div className="featured-slider">
                    <button className="prev-btn" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <div
                        className="slider-container"
                        style={{
                            transform: `translateX(-${(100 / cardsPerRow) * currentIndex}%)`, // Dynamically adjust the transform based on currentIndex
                            transition: "transform 0.5s ease" // Smooth transition
                        }}
                    >
                        {data?.products.edges.map((product, index) => (
                           <a
                           key={product.node.id}
                           href={`${shopUrl}${product.node.handle}`} // Link to product page
                           className={`card ${index === currentIndex ? "active" : ""}`}
                           style={{
                               width: `${100 / cardsPerRow}%`, // Dynamically set card width
                           }}
                       >
                           <div className="product-image-container">
                               <img
                                   src={product.node.images.edges[0]?.node.transformedSrc}
                                   alt={product.node.title}
                                   className="product-image-f"
                               />
                           </div>
                           <h3 className="product-title">{product.node.title}</h3>
                       </a>
                       
                        ))}
                    </div>
                    <button className="next-btn" onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>

                <div className='store-btn'>
                    <a href="https://shop.olkap.com/collections/all">Store</a>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }} // Start completely invisible and below
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                    viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
                    transition={{
                        duration: 1, // Smooth transition over 1 second
                        ease: [0.25, 0.8, 0.25, 1] // Custom cubic-bezier easing for smoothness
                    }}
                >

                    <div className="logo-banner">
                        <img src="/src/assets/banner-logo.svg" alt="Logo" className="banner-logo" />
                    </div>
                </motion.div>
            </div>

        </motion.div>

    );
};

export default Featured;
