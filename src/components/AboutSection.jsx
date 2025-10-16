const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Who We Are</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-primary mb-4">Helmand & Co Limited</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We are proud to present Helmand & Co Limited. At Helmand, we believe in turning ideas into reality. Founded on the principles of innovation, integrity, and excellence, we are driven by the vision to provide solutions that go beyond expectations and set new standards in every sector we operate.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our leadership and team are committed to building a brand that clients, partners, and communities can trust. Helmand is not just a company; it is a promise of quality, growth, and lasting impact.
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-lg font-semibold text-primary mb-2">Mal. Muhammad Jibril Abdullahi SWE ( Dokajin Dosa)</p>
                            <p className="text-gray-600">Founder & Executive Chairman / CEO</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-primary rounded-lg p-8 text-white">
                            <h4 className="text-xl font-bold mb-4">Our Mission</h4>
                            <p className="mb-6">
                                To deliver innovative, sustainable, and reliable solutions across industries, raising standards and creating opportunities that transform businesses and communities. We are committed to driving economic growth, empowering people, and building partnerships that create long-term value for Africa and the world.
                            </p>
                            <h4 className="text-xl font-bold mb-4">Our Vision</h4>
                            <p className="mb-6">
                                To be a globally recognized African brand, transforming ideas into reality and setting new benchmarks of excellence, innovation, and integrity. Our vision is to shape industries, open opportunities, and contribute to a future where Africa stands as a leader in global development and progress.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-primary text-2xl font-bold">10+</div>
                                    <div className="text-primary text-sm">Industries</div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                    <div className="text-primary text-2xl font-bold">100+</div>
                                    <div className="text-primary text-sm">Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
