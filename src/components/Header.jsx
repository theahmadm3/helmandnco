import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, IconButton } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import logo from '../assets/logos/helmand-logo-dark.png';
import whiteLogo from '../assets/logos/helmand-logo-white.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
                setIsScrolled(window.scrollY > homeSectionBottom - 100);
            } else {
                setIsScrolled(window.scrollY > 50);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/#about', label: 'About Us' },
        { to: '/#services', label: 'Services' },
        { to: '/#team', label: 'Team' },
        { to: '/#contact', label: 'Contact Us' }
    ];

    const drawer = (
        <div className="w-64 h-full bg-white">
            <div className="flex justify-end p-4">
                <IconButton onClick={handleDrawerToggle} className="text-gray-700">
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="flex flex-col space-y-4 px-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        onClick={handleDrawerToggle}
                        className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium text-lg py-2"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? 'bg-white shadow-lg'
                : 'bg-transparent'
                }`}
            id="header"
        >
            <nav className="w-full px-4 sm:px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                            <img
                                className={`header-logo transition-all duration-500 ${isScrolled ? 'shadow' : ''
                                    }`}
                                src={isScrolled ? logo : whiteLogo}
                                alt="Helmand n Co Logo"
                            />
                        </div>
                        <div>
                            <h1
                                className={`font-bold text-lg sm:text-xl transition-colors duration-500 ${isScrolled ? 'text-gray-900' : 'text-white'
                                    }`}
                            >
                                HELMAND & CO
                            </h1>
                            <p
                                className={`text-xs sm:text-sm transition-colors duration-500 ${isScrolled ? 'text-gray-700' : 'text-gray-200'
                                    }`}
                            >
                                LIMITED
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`hover:text-primary transition-colors duration-300 font-medium ${isScrolled ? 'text-gray-800' : 'text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <IconButton
                            onClick={handleDrawerToggle}
                            className={`transition-colors duration-500 ${isScrolled ? 'text-gray-900' : 'text-white'
                                }`}
                            sx={{
                                color: isScrolled ? '#1f2937' : '#ffffff',
                                '&:hover': {
                                    backgroundColor: isScrolled ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.1)'
                                }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true
                }}
            >
                {drawer}
            </Drawer>
        </header>
    );
};

export default Header;
