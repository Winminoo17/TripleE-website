import React from 'react';
import '../styles/Service.css';

const Service = () => {
    const services = [
        {
            title: 'Business Strategy',
            description: 'We help you design, validate, and implement strong business models.',
            icon: 'fas fa-chart-line'
        },
        {
            title: 'Marketing & Branding',
            description: 'From logo design to full branding strategies, we help shape your identity.',
            icon: 'fas fa-bullhorn'
        },
        {
            title: 'Legal & Compliance',
            description: 'Support with licenses, company registration, and regulatory advice.',
            icon: 'fas fa-balance-scale'
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