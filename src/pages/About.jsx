import React from 'react';
import '../styles/About.css';

const About = () => {
    const sections = [
        {
            title: 'What We Are?',
            description: 'Triple E Myanmar is a mission-driven organization dedicated to building a resilient and sustainable agro-entrepreneurship ecosystem in Myanmar. Guided by values of sustainability, resilience, innovation, integrity, collaboration, and impact, we empower rural communities and agro-based enterprises to thrive in local, regional, and global markets.',
            image: require('../assets/about/img1.jpg'),
            imagePosition: 'left'
        },
        {
            title: 'What We Do?',
            description: 'We strengthen agro-entrepreneurs and SMEs through capacity building, startup readiness programs, and business development support. Our initiatives include training workshops, market access campaigns, and seed funding to reduce financial barriers. By integrating clean energy, technology, and sustainable practices, we help entrepreneurs validate ideas, grow competitive businesses, and contribute to food security, rural employment, and inclusive economic growth.',
            image: require('../assets/about/img2.jpg'),
            imagePosition: 'right'
        },
        {
            title: 'What We Did?',
            description: 'Integrity, innovation, and sustainability form the core of everything we do. We are committed to transparent operations, continuously improving our methods, and maintaining the highest environmental standards. Our team works with passion and dedication, knowing that our efforts today will create lasting positive impacts for communities across the region.',
            image: require('../assets/about/img3.jpg'),
            imagePosition: 'left'
        },
        {
            title: 'Our Impact',
            description: 'Since our inception, RecyGlo has processed over 500,000 tons of recyclable materials, preventing them from ending up in landfills. We\'ve partnered with 200+ organizations, created green jobs for thousands, and educated millions about sustainable practices. Our impact grows every day as we expand our reach and deepen our commitment to environmental stewardship.',
            image: require('../assets/about/img4.jpg'),
            imagePosition: 'right'
        }
    ];

    const infoSections = [
        {
            title: 'Our Vision',
            content: 'To foster a resilient and sustainable agro-entrepreneurship ecosystem in Myanmar that strengthens rural livelihoods, enhances food systems, and enables agro-based enterprises to compete in regional and global markets.',
            className: 'vision-text'
        },
        {
            title: 'Our Mission',
            content: 'Triple E Myanmar supports agro-based entrepreneurs and small and medium enterprises by strengthening business capabilities, promoting sustainable agricultural practices, and facilitating access to markets, technology, and clean energy solutions. Through research-driven programs, capacity building, and cross-border partnerships, we contribute to inclusive rural development and long-term economic resilience.',
            className: 'mission-text'
        },
        {
            title: 'Our Values',
            content: 'Sustainability – Advancing environmentally responsible and climate-smart agro-business models.\nResilience – Strengthening enterprises to adapt to economic, environmental, and market shocks.\nInnovation – Integrating technology, clean energy, and modern agribusiness solutions.\nIntegrity – Upholding transparency, accountability, and ethical engagement with communities.\nCollaboration – Working with farmers, SMEs, researchers, and regional partners.\nImpact-Orientation – Measuring success through tangible social, economic, and environmental outcomes.',
            className: 'values-text'
        },
        {
            title: 'Our Objectives',
            content: 'To strengthen the entrepreneurial, financial, and managerial capacities of agro-based SMEs in Myanmar.\nTo promote sustainable agriculture and agri-value chain development through innovation and clean energy integration.\nTo improve market access and value addition for rural agro-entrepreneurs.\nTo provide advisory and consultancy services for scaling resilient agro-business models.\nTo facilitate regional knowledge exchange and partnerships within ASEAN and beyond.\nTo contribute to food security, rural employment, and sustainable economic growth through impact-driven entrepreneurship.',
            className: 'objectives-text'
        }
    ];

    return (
        <div className="about-page">
            <div className="center-logo">
                <img src={require('../assets/logo.png')} alt="Triple E Logo" />
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

            <div className="info-sections-container">
                {infoSections.map((section, index) => (
                    <div key={index} className="info-section" style={{ animationDelay: `${index * 0.15}s` }}>
                        <h2 className="section-title">{section.title}</h2>
                        <p className={section.className}>
                            {section.content.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < section.content.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;