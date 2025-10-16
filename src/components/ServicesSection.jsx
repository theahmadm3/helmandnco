import { Link } from "react-router-dom";

const ServicesSection = () => {
    const services = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L2 12.414V15a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h3a1 1 0 001-1v-2.586l.293.293a1 1 0 001.414-1.414l-9-9z"></path>
                </svg>
            ),
            title: "Construction & Real Estate",
            description: "Complete construction solutions including roads, bridges, buildings, infrastructure projects, land acquisition, and property development services."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12a3 3 0 003-3V6a3 3 0 10-6 0v3a3 3 0 003 3z"></path>
                    <path d="M19 10v2a7 7 0 01-14 0v-2"></path>
                </svg>
            ),
            title: "Software & Technology Solutions",
            description: "Website and app development, enterprise software solutions, smart home systems, networking infrastructure, and comprehensive digital transformation services."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                </svg>
            ),
            title: "Oil & Gas",
            description: "Exploration, supply, and marketing of petroleum products and industrial chemicals."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"></path>
                </svg>
            ),
            title: "Transportation",
            description: "Logistics, cartage, and transportation services for various industries."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "Agricultural Solutions",
            description: "Modern farming techniques, fertilizer production, and agricultural product distribution."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                </svg>
            ),
            title: "Corporate Training",
            description: "Professional development and training programs for organizations and individuals."
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Services</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions across multiple industries</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover-lift">
                            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link to="/services" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-all transform hover:scale-105" href="./services.html">
                        View More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
