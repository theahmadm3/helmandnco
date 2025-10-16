import whiteLogo from '../assets/logos/helmand-logo-white.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-gray-900 text-white py-16 w-full">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img src={whiteLogo} alt="Helmand n Co Logo" />
                            </div>
                            <div>
                                <h1 className="font-bold text-xl text-white">HELMAND & CO</h1>
                                <p className="text-sm text-gray-400">LIMITED</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Building excellence through innovation, integrity, and quality solutions across multiple industries.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com/helmandnco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/company/helmand-co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/helmandnco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
                        <div className="space-y-4 text-gray-400">
                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span>Plot 495, Adeboyega Atanda street, Mabushi, FCT Abuja, Nigeria
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <a href="tel:+2347070202088">+234 707 020 2088</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <a href="mailto:info@helmandco.com">info@helmandco.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {currentYear} Helmand & Co Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
