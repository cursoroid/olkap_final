import React, { useState, useEffect, useRef } from 'react';
import './featured.css';

const Featured = () => {
    const initialCards = [
        { id: 1, image: '/src/assets/Products/1.jpg', text: 'Card 1' },
        { id: 2, image: '/src/assets/Products/3.jpg', text: 'Card 2' },
        { id: 3, image: '/src/assets/Products/5.jpg', text: 'Card 3' },
        { id: 4, image: '/src/assets/Products/7.jpg', text: 'Card 4' },
        { id: 5, image: '/src/assets/Products/9.jpg', text: 'Card 5' },
        { id: 6, image: '/src/assets/Products/11.jpg', text: 'Card 6' },
        { id: 7, image: '/src/assets/Products/15.jpg', text: 'Card 7' },
        { id: 8, image: '/src/assets/Products/17.jpg', text: 'Card 8' },
        { id: 9, image: '/src/assets/Products/19.jpg', text: 'Card 9' },
        { id: 10, image: '/src/assets/Products/21.jpg', text: 'Card 10' },
    ];

    const [cards, setCards] = useState([
        ...initialCards.slice(-5),
        ...initialCards,
        ...initialCards.slice(0, 5),
    ]);
    const [visibleCards, setVisibleCards] = useState(5); // Default to 5 cards visible
    const [currentIndex, setCurrentIndex] = useState(5); // Start at the first real card
    const sliderRef = useRef();
    const isAnimating = useRef(false);

    // Update the number of visible cards dynamically based on viewport size
    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width >= 1200) setVisibleCards(5); // Large screens
            else if (width >= 992) setVisibleCards(4); // Tablets
            else if (width >= 768) setVisibleCards(3); // Tablets
            else if (width >= 650) setVisibleCards(2);
            else setVisibleCards(1); // Small screens
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);

        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    const slideNext = () => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        setCurrentIndex((prevIndex) => prevIndex + 1);
        setTimeout(() => {
            if (currentIndex + 1 === cards.length - visibleCards) {
                setCurrentIndex(visibleCards); // Reset to start
            }
            isAnimating.current = false;
        }, 300); // Match this to the CSS transition duration
    };

    const slidePrev = () => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        setCurrentIndex((prevIndex) => prevIndex - 1);
        setTimeout(() => {
            if (currentIndex - 1 === visibleCards - 1) {
                setCurrentIndex(cards.length - visibleCards * 2); // Reset to end
            }
            isAnimating.current = false;
        }, 300); // Match this to the CSS transition duration
    };

    return (
        <div className="featured">
            <div className="logo-banner">
                <img src="./src/assets/banner-logo.svg" alt="Logo" className="logo-banner-logo" />
            </div>

            <h1>New Arrivals</h1>
            <div className="slider_main">
                <button className="slider_button prev" onClick={slidePrev}>
                    &#8249;
                </button>
                <div
                    ref={sliderRef}
                    className="slider_wrapper"
                    style={{
                        transform: `translateX(calc(-${currentIndex * (100 / visibleCards)}%))`,
                        transition: isAnimating.current ? 'transform 0.3s ease-in-out' : 'none',
                    }}
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="slider_card"
                            style={{ flex: `0 0 calc(100% / ${visibleCards})` }}
                        >
                            <img src={card.image} alt={card.text} />
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
                <button className="slider_button next" onClick={slideNext}>
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default Featured;
