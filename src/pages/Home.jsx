import React from 'react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';
import StrategyCard from '../components/StrategyCard';
import '../styles/Home.css';

const Home = () => {
    const strategies = [
        {
            icon: 'fas fa-lightbulb',
            title: 'Innovation',
            description: 'Developing new technologies to handle complex waste management challenges globally.'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Growth',
            description: 'Expanding our reach across Southeast Asia to provide accessible recycling services.'
        },
        {
            icon: 'fas fa-handshake',
            title: 'Partnership',
            description: 'Collaborating with local governments and international NGOs for maximum impact.'
        }
    ];

    return (
        <div className="home-page">
            <Slider />

            <section className="about-us">
                <div className="about-left">
                    <img src={require('../assets/logo.png')} alt="About Logo" />
                </div>
                <div className="about-right">
                     <h2>Triple E Myanmar</h2>
                    <span className="mini-title">GET IN TOUCH</span>
                    <p>
                        We are committed to providing the highest quality environmental solutions.
                        Our team works tirelessly to ensure a sustainable future for the next generation
                        through innovation and strategic planning.
                    </p>
                    <Link to="/about" className="read-more-btn">Read More</Link>
                </div>
            </section>

            <section className="strategy-section">
                <h2 className="section-title">Our Strategy</h2>
                <div className="strategy-container">
                    {strategies.map((strategy, index) => (
                        <StrategyCard
                            key={index}
                            icon={strategy.icon}
                            title={strategy.title}
                            description={strategy.description}
                        />
                    ))}
                </div>
            </section>

            <section className="partners-section">
                <h2 className="section-title">Our Partners</h2>
                <div className="partners-grid">
                    <img src={require('../assets/partenars/un-habitat.jpg')} alt="Partner" />
                    <img src={require('../assets/partenars/un-habitat.jpg')} alt="Partner" />
                    <img src={require('../assets/partenars/un-habitat.jpg')} alt="Partner" />
                    <img src={require('../assets/partenars/un-habitat.jpg')} alt="Partner" />
                    <img src={require('../assets/partenars/un-habitat.jpg')} alt="Partner" />
                    <img src={require('../assets/partenars/un-habitat.jpg')} alt="Partner" />
                </div>
            </section>
        </div>
    );
};

export default Home;
