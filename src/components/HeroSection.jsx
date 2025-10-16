// components/HeroSection.js
import { useState, useEffect } from 'react';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev % 3) + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative h-screen overflow-hidden pt-16">
            {/* Slide 1 */}
            <div className={`hero-slide absolute inset-0 flex items-center justify-center slide-1 transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 overlay"></div>
                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 fade-in">Building Excellence</h2>
                    <p className="text-xl md:text-2xl mb-8 fade-in">Comprehensive construction and development solutions</p>
                    <button
                        className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 fade-in"
                        onClick={() => scrollToSection('services')}
                    >
                        Explore Our Projects
                    </button>
                </div>
            </div>

            {/* Slide 2 */}
            <div className={`hero-slide absolute inset-0 flex items-center justify-center slide-2 transition-opacity duration-1000 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 overlay"></div>
                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">Innovation & Integrity</h2>
                    <p className="text-xl md:text-2xl mb-8">Turning ideas into reality with trusted solutions</p>
                    <button
                        className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-all transform hover:scale-105"
                        onClick={() => scrollToSection('about')}
                    >
                        Learn About Us
                    </button>
                </div>
            </div>

            {/* Slide 3 */}
            <div className={`hero-slide absolute inset-0 flex items-center justify-center slide-3 transition-opacity duration-1000 ease-in-out ${currentSlide === 3 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 overlay"></div>
                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">Quality & Growth</h2>
                    <p className="text-xl md:text-2xl mb-8">Creating lasting impact across multiple industries</p>
                    <button
                        className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                        onClick={() => scrollToSection('services')}
                    >
                        View Services
                    </button>
                </div>
            </div>

            {/* Slider Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <button
                    className={`w-3 h-3 rounded-full bg-white ${currentSlide === 1 ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition-opacity`}
                    onClick={() => goToSlide(1)}
                ></button>
                <button
                    className={`w-3 h-3 rounded-full bg-white ${currentSlide === 2 ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition-opacity`}
                    onClick={() => goToSlide(2)}
                ></button>
                <button
                    className={`w-3 h-3 rounded-full bg-white ${currentSlide === 3 ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition-opacity`}
                    onClick={() => goToSlide(3)}
                ></button>
            </div>
        </section>
    );
};

export default HeroSection;
