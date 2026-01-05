import React, { useEffect, useRef, useState } from 'react';
import '../styles/StrategyCard.css';

const StrategyCard = ({ icon, title, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentRef = cardRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`card animate-up ${isVisible ? 'show' : ''}`}
        >
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default StrategyCard;
