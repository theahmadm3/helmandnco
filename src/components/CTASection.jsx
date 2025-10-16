const CTASection = () => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            className="py-20 bg-primary text-white parallax"
            style={{
                backgroundImage: 'linear-gradient(rgba(19, 53, 81, 0.8), rgba(19, 53, 81, 0.8))'
            }}
        >
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Vision?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Partner with Helmand & Co Limited for innovative solutions that exceed expectations
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                            onClick={() => scrollToSection('contact')}
                        >
                            Start Your Project
                        </button>
                        <button
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all transform hover:scale-105"
                            onClick={() => document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
