
import React from 'react';
import '../styles/About.css';

const About = () => {
    const sections = [
        {
            title: 'Our Mission',
            description: 'At RecyGlo, we are dedicated to creating a sustainable future through innovative waste management solutions. Our mission is to transform how communities handle waste, making recycling accessible and efficient for everyone. We believe that every piece of waste has value, and through our advanced processes, we turn environmental challenges into opportunities for growth.',
            image: require('../assets/about/img1 (1).jpg'),
            imagePosition: 'left'
        },
        {
            title: 'Our Vision',
            description: 'We envision a world where waste is no longer a burden but a resource. Through cutting-edge technology and strategic partnerships, we aim to lead Southeast Asia in sustainable waste management. Our vision extends beyond recycling—we\'re building a circular economy where every material finds its purpose and contributes to a healthier planet for future generations.',
            image: require('../assets/about/img1 (2).jpg'),
            imagePosition: 'right'
        },
        {
            title: 'Our Values',
            description: 'Integrity, innovation, and sustainability form the core of everything we do. We are committed to transparent operations, continuously improving our methods, and maintaining the highest environmental standards. Our team works with passion and dedication, knowing that our efforts today will create lasting positive impacts for communities across the region.',
            image: require('../assets/about/img1 (3).jpg'),
            imagePosition: 'left'
        },
        {
            title: 'Our Impact',
            description: 'Since our inception, RecyGlo has processed over 500,000 tons of recyclable materials, preventing them from ending up in landfills. We\'ve partnered with 200+ organizations, created green jobs for thousands, and educated millions about sustainable practices. Our impact grows every day as we expand our reach and deepen our commitment to environmental stewardship.',
            image: require('../assets/about/img1 (1).jpg'),
            imagePosition: 'right'
        }
    ];

    return (
        <div className="about-page">
            <div className="center-logo">
                <img src={require('../assets/logo.png')} alt="RecyGlo Logo" />
            </div>

            <div className="content-wrapper">
                {sections.map((section, index) => (
                    <div key={index} className="content-section">
                        {section.imagePosition === 'left' ? (
                            <>
                                <div className="left">
                                    <img src={section.image} alt={section.altText} />
                                </div>
                                <div className="right">
                                    <h2>{section.title}</h2>
                                    <p>{section.description}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="left">
                                    <h2>{section.title}</h2>
                                    <p>{section.description}</p>
                                </div>
                                <div className="right">
                                    <img src={section.image} alt={section.altText} />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;