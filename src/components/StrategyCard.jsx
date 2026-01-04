import React, { useEffect, useRef, useState } from 'react';
import '../styles/StrategyCard.css';

export const StrategyCard = ({ icon, title, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const currentRef = cardRef.current;
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
