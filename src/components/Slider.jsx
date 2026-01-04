import React, { useState, useEffect } from 'react';
import '../styles/Slider.css';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        require('../assets/sliders/img1.png'),
        require('../assets/sliders/img2.png'),
        require('../assets/sliders/img3.png')
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="slider-section">
            <div className="slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide})` }}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Slider;