import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../queries'; // Adjust the path if necessary
import './featured.css'; // Assuming the styles are in a separate file

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
    const shopUrl = 'https://kollkap.myshopify.com/products/';

    return (

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
                            <img
                                src={product.node.images.edges[0]?.node.transformedSrc}
                                alt={product.node.title}
                                className="product-image"
                            />
                            <h3 className="product-title">{product.node.title}</h3>
                        </a>
                    ))}
                </div>
                <button className="next-btn" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>

            <div className='store-btn'>
                <a href="#">Store &nbsp; <FontAwesomeIcon className="thin-icon" size="lg" icon={faArrowRight} /></a>
            </div>

            <div className="logo-banner">
                <img src="/src/assets/banner-logo.svg" alt="Logo" className="banner-logo" />
            </div>
        </div>

    );
};

export default Featured;
