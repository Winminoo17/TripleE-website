import React from 'react';
import '../styles/Service.css';

const Service = () => {
    const services = [
        {
            title: 'Capacity Building & Training',
            description: 'We design and deliver both online and in-person training workshops for agro-based entrepreneurs and early-stage startups. Our programs focus on financial literacy, digital marketing, business planning, and enterprise development, equipping participants with practical skills to start, manage, and grow sustainable agro-businesses.',
            icon: 'fas fa-graduation-cap'
        },
        {
            title: 'Startup Readiness & Business Development',
            description: 'Triple E Myanmar supports budding agro-entrepreneurs through structured guidance on how to start a business, including idea validation, basic operations, cost management, and market entry strategies tailored to rural and agri-value chain contexts.',
            icon: 'fas fa-rocket'
        },
        {
            title: 'Product Showcasing & Market Access Campaigns',
            description: 'We organize product showcasing and promotional campaigns that connect emerging agro-startups with customers, buyers, and local markets. These initiatives help entrepreneurs test their products, build brand visibility, and gain real-market feedback to strengthen competitiveness.',
            icon: 'fas fa-bullhorn'
        },
        {
            title: 'Seed Funding & Entrepreneurial Support',
            description: 'To reduce early-stage financial barriers, we provide small seed funding to selected high-potential agro-entrepreneurs. This catalytic funding enables participants to initiate production, improve inputs, or pilot their business ideas while being supported by mentoring and monitoring.',
            icon: 'fas fa-hand-holding-usd'
        },
        {
            title: 'Integrated Impact Approach',
            description: 'Our services combine skills development, market exposure, and financial support, ensuring that agro-based entrepreneurs are not only trained but also empowered to launch viable, resilient, and impact-driven enterprises.',
            icon: 'fas fa-seedling'
        }
    ];

    return (
        <div className="service-page">
            {/* Logo Section */}
            <div className="service-logo-section">
                <img src={require('../assets/logo.png')} alt="Triple E Myanmar Logo" />
            </div>

            {/* Our Services Header */}
            <div className="service-header">
                <h1>Our Services</h1>
                <p>We stand Entreprenures, Empowering and embracing the local SMEs of Myanmar</p>
            </div>

            {/* Service Cards */}
            <div className="service-cards-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">
                            <i className={service.icon}></i>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;