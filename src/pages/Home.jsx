import React from 'react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';
import StrategyCard from '../components/StrategyCard';
import '../styles/Home.css';

const Home = () => {
    const strategies = [
        {
            icon: 'fas fa-eye',
            title: 'Vision',
            description: 'To foster a resilient and sustainable agro-entrepreneurship ecosystem in Myanmar that strengthens rural livelihoods, enhances food systems, and enables agro-based enterprises to compete in regional and global markets.'
        },
        {
            icon: 'fas fa-bullseye',
            title: 'Mission',
            description: 'Triple E Myanmar supports agro-based entrepreneurs and small and medium enterprises by strengthening business capabilities, promoting sustainable agricultural practices, and facilitating access to markets, technology, and clean energy solutions. Through research-driven programs, capacity building, and cross-border partnerships, we contribute to inclusive rural development and long-term economic resilience.'
        },
        {
            icon: 'fas fa-trophy',
            title: 'Goals',
            description: 'The organization promotes sustainable, climate-smart agribusinesses, builds resilient enterprises, and drives innovation through technology and clean energy, while upholding integrity, fostering collaboration with key partners, and focusing on measurable social, economic, and environmental impact.'
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
                    <p>
                        We are the winer of YSEALI Alumini of 2022 Cambodia. We stand for Embracing, Empowering and Entreprenures. We mainly support for local SMEs Companies.
                        Triple E Myanmar empowers agro-entrepreneurs through practical training, startup guidance, market access campaigns, and seed funding. By combining skills development, financial support, and real-market exposure, we help early-stage agro-businesses validate ideas, build resilience, and grow into sustainable enterprises that strengthen rural economies.
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
                    <img src={require('../assets/partenars/YSEALI.png')} alt="Partner" />
                    <img src={require('../assets/partenars/Asia_Foundation.png')} alt="Partner" />
                    <img src={require('../assets/partenars/impact_hub.png')} alt="Partner" />
                    <img src={require('../assets/partenars/un-habitat.jpg')} alt="Partner" />
                    <img src={require('../assets/partenars/chinlone.jpg')} alt="Partner" />
                </div>
            </section>
        </div>
    );
};

export default Home;
