import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

// Import all images
import construction1 from '../assets/images/projects/construction-1.jpg';
import construction2 from '../assets/images/projects/construction-2.jpg';
import construction3 from '../assets/images/projects/construction-3.jpg';

import tech1 from '../assets/images/projects/tech/tech-1.jpg';
import tech2 from '../assets/images/projects/tech/tech-2.jpg';
import tech3 from '../assets/images/projects/tech/tech-3.jpg';

import oil1 from '../assets/images/projects/oil/oil-1.jpg';
import oil2 from '../assets/images/projects/oil/oil-2.jpg';
import oil3 from '../assets/images/projects/oil/oil-3.jpg';

import transport1 from '../assets/images/projects/transport/transport-1.jpg';
import transport2 from '../assets/images/projects/transport/transport-2.jpg';
import transport3 from '../assets/images/projects/transport/transport-3.jpg';

import agric1 from '../assets/images/projects/agric/agric-1.jpg';
import agric2 from '../assets/images/projects/agric/agric-2.jpg';
import agric3 from '../assets/images/projects/agric/agric-3.jpg';

import training1 from '../assets/images/projects/training/training-1.jpg';
import training2 from '../assets/images/projects/training/training-2.jpg';
import training3 from '../assets/images/projects/training/training-3.jpg';

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState('construction');
    const [carouselStates, setCarouselStates] = useState({});

    const serviceData = {
        construction: {
            name: 'Construction & Real Estate',
            description: 'We provide comprehensive construction solutions including roads, bridges, buildings, and infrastructure projects. Our real estate services cover land acquisition, property development, and project management.',
            features: [
                {
                    title: 'Infrastructure Development',
                    description: 'Roads, bridges, and public infrastructure projects'
                },
                {
                    title: 'Commercial Buildings',
                    description: 'Office complexes, retail centers, and industrial facilities'
                },
                {
                    title: 'Property Development',
                    description: 'Land acquisition, residential and commercial development'
                }
            ],
            images: [
                {
                    src: construction1,
                    alt: 'Highway Construction Project',
                    title: 'Highway Construction',
                    description: 'Major infrastructure development',
                    fallbackGradient: 'linear-gradient(135deg, #133551, #1e4766)'
                },
                {
                    src: construction2,
                    alt: 'Commercial Complex Building',
                    title: 'Commercial Complex',
                    description: 'Modern office building',
                    fallbackGradient: 'linear-gradient(135deg, #1e4766, #2d5a87)'
                },
                {
                    src: construction3,
                    alt: 'Residential Development',
                    title: 'Residential Development',
                    description: 'Quality housing project',
                    fallbackGradient: 'linear-gradient(135deg, #0a2a3d, #133551)'
                }
            ]
        },
        technology: {
            name: 'Software & Technology Solutions',
            description: 'Cutting-edge technology solutions including website and app development, enterprise software, smart home systems, and comprehensive digital transformation services.',
            features: [
                {
                    title: 'Web & Mobile Development',
                    description: 'Custom websites and mobile applications'
                },
                {
                    title: 'Enterprise Software',
                    description: 'Business management and automation systems'
                },
                {
                    title: 'Smart Home Systems',
                    description: 'IoT and home automation solutions'
                }
            ],
            images: [
                {
                    src: tech1,
                    alt: 'Web Development Project',
                    title: 'Web Development',
                    description: 'Modern responsive websites',
                    fallbackGradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)'
                },
                {
                    src: tech3,
                    alt: 'Mobile Application',
                    title: 'Mobile Apps',
                    description: 'Cross-platform applications',
                    fallbackGradient: 'linear-gradient(135deg, #0891b2, #0e7490)'
                },
                {
                    src: tech2,
                    alt: 'Smart Home System',
                    title: 'Smart Systems',
                    description: 'IoT and automation',
                    fallbackGradient: 'linear-gradient(135deg, #059669, #047857)'
                }
            ]
        },
        oilgas: {
            name: 'Oil & Gas Solutions',
            description: 'Comprehensive oil and gas services including exploration, supply, and marketing of petroleum products and industrial chemicals with a focus on safety and environmental responsibility.',
            features: [
                {
                    title: 'Exploration Services',
                    description: 'Geological surveys and resource assessment'
                },
                {
                    title: 'Product Supply',
                    description: 'Petroleum products and industrial chemicals'
                },
                {
                    title: 'Marketing & Distribution',
                    description: 'Strategic market analysis and distribution networks'
                }
            ],
            images: [
                {
                    src: oil1,
                    alt: 'Oil Exploration Site',
                    title: 'Exploration',
                    description: 'Advanced geological surveys',
                    fallbackGradient: 'linear-gradient(135deg, #dc2626, #b91c1c)'
                },
                {
                    src: oil2,
                    alt: 'Oil Refining Facility',
                    title: 'Refining',
                    description: 'Product processing facilities',
                    fallbackGradient: 'linear-gradient(135deg, #ea580c, #c2410c)'
                },
                {
                    src: oil3,
                    alt: 'Oil Distribution Network',
                    title: 'Distribution',
                    description: 'Supply chain management',
                    fallbackGradient: 'linear-gradient(135deg, #d97706, #b45309)'
                }
            ]
        },
        transport: {
            name: 'Transportation Services',
            description: 'Comprehensive logistics, cartage, and transportation services across various industries with modern fleet management and efficient supply chain solutions.',
            features: [
                {
                    title: 'Freight & Cargo',
                    description: 'Heavy-duty transportation and logistics'
                },
                {
                    title: 'Fleet Management',
                    description: 'Modern vehicle fleet and maintenance'
                },
                {
                    title: 'Supply Chain',
                    description: 'End-to-end logistics solutions'
                }
            ],
            images: [
                {
                    src: transport1,
                    alt: 'Heavy Cargo Transportation',
                    title: 'Heavy Cargo',
                    description: 'Industrial transportation',
                    fallbackGradient: 'linear-gradient(135deg, #7c2d12, #92400e)'
                },
                {
                    src: transport2,
                    alt: 'Fleet Operations Center',
                    title: 'Fleet Operations',
                    description: 'Modern logistics solutions',
                    fallbackGradient: 'linear-gradient(135deg, #a21caf, #86198f)'
                },
                {
                    src: transport3,
                    alt: 'Warehouse Distribution',
                    title: 'Warehouse',
                    description: 'Storage and distribution',
                    fallbackGradient: 'linear-gradient(135deg, #be185d, #9d174d)'
                }
            ]
        },
        agriculture: {
            name: 'Agricultural Solutions',
            description: 'Modern farming techniques, fertilizer production, and agricultural product distribution with sustainable practices and innovative technologies for enhanced productivity.',
            features: [
                {
                    title: 'Modern Farming',
                    description: 'Advanced agricultural techniques and equipment'
                },
                {
                    title: 'Fertilizer Production',
                    description: 'Quality fertilizers and soil enhancement'
                },
                {
                    title: 'Product Distribution',
                    description: 'Farm-to-market supply chains'
                }
            ],
            images: [
                {
                    src: agric2,
                    alt: 'Our CEO in our rice farms',
                    title: 'Our CEO in our rice farms',
                    description: 'Our CEO inspecting one of our rice farms',
                    fallbackGradient: 'linear-gradient(135deg, #16a34a, #15803d)'
                },
                {
                    src: agric1,
                    alt: 'Our CEO in our rice farms',
                    title: 'Our CEO in our rice farms',
                    description: 'Our CEO inspecting one of our rice farms',
                    fallbackGradient: 'linear-gradient(135deg, #65a30d, #4d7c0f)'
                },
                {
                    src: agric3,
                    alt: 'Corn Farms',
                    title: 'Corn Farms',
                    description: 'Corn Farms',
                    fallbackGradient: 'linear-gradient(135deg, #059669, #047857)'
                }
            ]
        },
        training: {
            name: 'Corporate Training',
            description: 'Professional development and training programs for organizations and individuals, focusing on skill enhancement, leadership development, and industry-specific knowledge transfer.',
            features: [
                {
                    title: 'Leadership Development',
                    description: 'Executive and management training programs'
                },
                {
                    title: 'Technical Skills',
                    description: 'Industry-specific technical training'
                },
                {
                    title: 'Professional Certification',
                    description: 'Industry-recognized certification programs'
                }
            ],
            images: [
                {
                    src: training1,
                    alt: 'Leadership Training Session',
                    title: 'Leadership Training',
                    description: 'Executive development programs',
                    fallbackGradient: 'linear-gradient(135deg, #1d4ed8, #1e40af)'
                },
                {
                    src: training2,
                    alt: 'Technical Workshop',
                    title: 'Technical Workshops',
                    description: 'Hands-on skill development',
                    fallbackGradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)'
                },
                {
                    src: training3,
                    alt: 'Certification Program',
                    title: 'Certification Programs',
                    description: 'Professional qualifications',
                    fallbackGradient: 'linear-gradient(135deg, #0891b2, #0e7490)'
                }
            ]
        }
    };

    // Initialize carousel states
    useEffect(() => {
        const initialStates = {};
        Object.keys(serviceData).forEach(key => {
            initialStates[key] = 0;
        });
        setCarouselStates(initialStates);
    }, []);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselStates(prev => ({
                ...prev,
                [activeTab]: (prev[activeTab] + 1) % serviceData[activeTab].images.length
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, [activeTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCarouselStates(prev => ({ ...prev, [tab]: 0 }));
    };

    const nextSlide = (tab) => {
        setCarouselStates(prev => ({
            ...prev,
            [tab]: (prev[tab] + 1) % serviceData[tab].images.length
        }));
    };

    const prevSlide = (tab) => {
        setCarouselStates(prev => ({
            ...prev,
            [tab]: (prev[tab] - 1 + serviceData[tab].images.length) % serviceData[tab].images.length
        }));
    };

    const tabs = [
        { key: 'construction', label: 'Construction & Real Estate' },
        { key: 'technology', label: 'Software & Technology' },
        { key: 'oilgas', label: 'Oil & Gas' },
        { key: 'transport', label: 'Transportation' },
        { key: 'agriculture', label: 'Agriculture' },
        { key: 'training', label: 'Corporate Training' }
    ];

    const currentService = serviceData[activeTab];
    const currentSlide = carouselStates[activeTab] || 0;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200 gap-2">
                    {tabs.map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => handleTabChange(tab.key)}
                            className={`px-6 py-3 font-semibold text-lg border-b-2 transition-all ${activeTab === tab.key
                                ? 'border-primary text-primary'
                                : 'border-transparent text-gray-600 hover:text-primary'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Service Details */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            {currentService.name}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {currentService.description}
                        </p>
                        <div className="space-y-4">
                            {currentService.features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Carousel */}
                    <div className="relative">
                        <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                            {currentService.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const div = document.createElement('div');
                                            div.className = 'w-full h-full flex flex-col items-center justify-center text-white font-semibold';
                                            div.style.background = image.fallbackGradient;
                                            div.innerHTML = `
                                                <div class="text-2xl mb-2">${image.title}</div>
                                                <div class="text-sm opacity-80">${image.description}</div>
                                            `;
                                            e.target.parentNode.appendChild(div);
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded">
                                        <h4 className="font-semibold">{image.title}</h4>
                                        <p className="text-sm">{image.description}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Navigation Buttons */}
                            <button
                                onClick={() => prevSlide(activeTab)}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-primary p-2 rounded-full shadow-lg transition-all"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => nextSlide(activeTab)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-primary p-2 rounded-full shadow-lg transition-all"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-4 right-4 flex space-x-2">
                                {currentService.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCarouselStates(prev => ({ ...prev, [activeTab]: index }))}
                                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
                                            ? 'bg-white w-6'
                                            : 'bg-white bg-opacity-50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
