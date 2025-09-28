// Tab functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
        button.classList.add('text-gray-600', 'hover:text-primary');
        button.classList.remove('text-primary', 'border-primary');
        button.style.borderColor = 'transparent';
    });

    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Activate selected tab button
    const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
        selectedButton.classList.remove('text-gray-600', 'hover:text-primary');
        selectedButton.classList.add('text-primary');
        selectedButton.style.borderColor = '#133551';
    }

    // Reset carousel to first slide when switching tabs
    const carousel = document.querySelector(`#${tabName}-carousel`);
    if (carousel) {
        resetCarousel(carousel);
    }
}

// Service data configuration
const serviceData = {
    'construction': {
        name: 'Construction & Real Estate',
        images: [
            {
                src: './images/projects/construction-1.jpg',
                alt: 'Highway Construction Project',
                title: 'Highway Construction',
                description: 'Major infrastructure development',
                fallbackGradient: 'linear-gradient(135deg, #133551, #1e4766)'
            },
            {
                src: './images/projects/construction-2.jpg',
                alt: 'Commercial Complex Building',
                title: 'Commercial Complex',
                description: 'Modern office building',
                fallbackGradient: 'linear-gradient(135deg, #1e4766, #2d5a87)'
            },
            {
                src: './images/projects/construction-3.jpg',
                alt: 'Residential Development',
                title: 'Residential Development',
                description: 'Quality housing project',
                fallbackGradient: 'linear-gradient(135deg, #0a2a3d, #133551)'
            }
        ]
    },
    'technology': {
        name: 'Software & Technology',
        images: [
            {
                src: './images/projects/tech/tech-1.jpg',
                alt: 'Web Development Project',
                title: 'Web Development',
                description: 'Modern responsive websites',
                fallbackGradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)'
            },
            {
                src: './images/projects/tech/tech-3.jpg',
                alt: 'Mobile Application',
                title: 'Mobile Apps',
                description: 'Cross-platform applications',
                fallbackGradient: 'linear-gradient(135deg, #0891b2, #0e7490)'
            },
            {
                src: './images/projects/tech/tech-2.jpg',
                alt: 'Smart Home System',
                title: 'Smart Systems',
                description: 'IoT and automation',
                fallbackGradient: 'linear-gradient(135deg, #059669, #047857)'
            }
        ]
    },
    'oilgas': {
        name: 'Oil & Gas',
        images: [
            {
                src: './images/projects/oil/oil-1.jpg',
                alt: 'Oil Exploration Site',
                title: 'Exploration',
                description: 'Advanced geological surveys',
                fallbackGradient: 'linear-gradient(135deg, #dc2626, #b91c1c)'
            },
            {
                src: './images/projects/oil/oil-2.jpg',
                alt: 'Oil Refining Facility',
                title: 'Refining',
                description: 'Product processing facilities',
                fallbackGradient: 'linear-gradient(135deg, #ea580c, #c2410c)'
            },
            {
                src: './images/projects/oil/oil-3.jpg',
                alt: 'Oil Distribution Network',
                title: 'Distribution',
                description: 'Supply chain management',
                fallbackGradient: 'linear-gradient(135deg, #d97706, #b45309)'
            }
        ]
    },
    'transport': {
        name: 'Transportation',
        images: [
            {
                src: './images/projects/transport/transport-1.jpg',
                alt: 'Heavy Cargo Transportation',
                title: 'Heavy Cargo',
                description: 'Industrial transportation',
                fallbackGradient: 'linear-gradient(135deg, #7c2d12, #92400e)'
            },
            {
                src: './images/projects/transport/transport-2.jpg',
                alt: 'Fleet Operations Center',
                title: 'Fleet Operations',
                description: 'Modern logistics solutions',
                fallbackGradient: 'linear-gradient(135deg, #a21caf, #86198f)'
            },
            {
                src: './images/projects/transport/transport-3.jpg',
                alt: 'Warehouse Distribution',
                title: 'Warehouse',
                description: 'Storage and distribution',
                fallbackGradient: 'linear-gradient(135deg, #be185d, #9d174d)'
            }
        ]
    },
    'agriculture': {
        name: 'Agriculture',
        images: [
            {
                src: './images/projects/agric/agric-2.jpg',
                alt: 'Our CEO in our rice farms',
                title: 'Our CEO in our rice farms',
                description: 'Our CEO inspecting one of our rice farms',
                fallbackGradient: 'linear-gradient(135deg, #16a34a, #15803d)'
            },
            {
                src: './images/projects/agric/agric-1.jpg',
                alt: 'Our CEO in our rice farms',
                title: 'Our CEO in our rice farms',
                description: 'Our CEO inspecting one of our rice farms',
                fallbackGradient: 'linear-gradient(135deg, #65a30d, #4d7c0f)'
            },
            {
                src: './images/projects/agric/agric-3.jpg',
                alt: 'Corn Farms',
                title: 'Corn Farms',
                description: 'Corn Farms',
                fallbackGradient: 'linear-gradient(135deg, #059669, #047857)'
            }
        ]
    },
    'training': {
        name: 'Corporate Training',
        images: [
            {
                src: './images/projects/training/training-1.jpg',
                alt: 'Leadership Training Session',
                title: 'Leadership Training',
                description: 'Executive development programs',
                fallbackGradient: 'linear-gradient(135deg, #1d4ed8, #1e40af)'
            },
            {
                src: './images/projects/training/training-2.jpg',
                alt: 'Technical Workshop',
                title: 'Technical Workshops',
                description: 'Hands-on skill development',
                fallbackGradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)'
            },
            {
                src: './images/projects/training/training-3.jpg',
                alt: 'Certification Program',
                title: 'Certification Programs',
                description: 'Professional qualifications',
                fallbackGradient: 'linear-gradient(135deg, #0891b2, #0e7490)'
            }
        ]
    }
};

// Carousel functionality
const carouselStates = {};

function initializeCarousel(carouselId) {
    const serviceKey = carouselId.replace('-carousel', '');
    const service = serviceData[serviceKey];

    if (!service) {
        console.warn(`Service data not found for: ${serviceKey}`);
        return;
    }

    if (!carouselStates[carouselId]) {
        carouselStates[carouselId] = {
            currentSlide: 0,
            totalSlides: service.images.length,
            serviceKey: serviceKey
        };
    }

    // Generate carousel HTML dynamically
    generateCarouselHTML(carouselId, service);

    // Show first slide
    showSlide(carouselId, 0);
}

function generateCarouselHTML(carouselId, service) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    // Clear existing content
    carousel.innerHTML = '';

    // Create slides
    service.images.forEach((image, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `carousel-slide ${index === 0 ? 'active' : ''}`;

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.className = 'w-full h-80 object-cover rounded-lg shadow-lg';

        // Add error handler for fallback
        img.addEventListener('error', function () {
            const placeholder = document.createElement('div');
            placeholder.className = 'w-full h-80 rounded-lg shadow-lg flex flex-col items-center justify-center text-white font-semibold';
            placeholder.style.background = image.fallbackGradient;

            const titleEl = document.createElement('div');
            titleEl.className = 'text-2xl mb-2';
            titleEl.textContent = image.title;

            const descEl = document.createElement('div');
            descEl.className = 'text-sm opacity-80';
            descEl.textContent = image.description;

            placeholder.appendChild(titleEl);
            placeholder.appendChild(descEl);

            this.parentNode.replaceChild(placeholder, this);
        });

        const caption = document.createElement('div');
        caption.className = 'absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded';
        caption.innerHTML = `
            <h4 class="font-semibold">${image.title}</h4>
            <p class="text-sm">${image.description}</p>
        `;

        slideDiv.appendChild(img);
        slideDiv.appendChild(caption);
        carousel.appendChild(slideDiv);
    });

    // Add navigation buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-prev';
    prevButton.onclick = () => prevSlide(carouselId);
    prevButton.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
    `;

    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-next';
    nextButton.onclick = () => nextSlide(carouselId);
    nextButton.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
    `;

    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);
}

function resetCarousel(carousel) {
    const carouselId = carousel.id;
    carouselStates[carouselId].currentSlide = 0;

    const slides = carousel.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function showSlide(carouselId, slideIndex) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Normalize slide index
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Update carousel state
    carouselStates[carouselId].currentSlide = slideIndex;

    // Show/hide slides
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide(carouselId) {
    const state = carouselStates[carouselId];
    if (state) {
        showSlide(carouselId, state.currentSlide + 1);
    }
}

function prevSlide(carouselId) {
    const state = carouselStates[carouselId];
    if (state) {
        showSlide(carouselId, state.currentSlide - 1);
    }
}

// Auto-advance carousels
function startCarouselAutoplay() {
    const carouselIds = [
        'construction-carousel',
        'technology-carousel',
        'oilgas-carousel',
        'transport-carousel',
        'agriculture-carousel',
        'training-carousel'
    ];

    carouselIds.forEach(carouselId => {
        setInterval(() => {
            // Only auto-advance if the carousel's tab is active
            const tabId = carouselId.replace('-carousel', '');
            const tab = document.getElementById(tabId);
            if (tab && tab.classList.contains('active')) {
                nextSlide(carouselId);
            }
        }, 5000); // Change slide every 5 seconds
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (mobileMenu.classList.contains('mobile-menu-closed')) {
        mobileMenu.classList.remove('mobile-menu-closed');
        mobileMenu.classList.add('mobile-menu-open');
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
    } else {
        mobileMenu.classList.remove('mobile-menu-open');
        mobileMenu.classList.add('mobile-menu-closed');
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    }
}

// FAQ Toggle
function toggleFAQ(faqNumber) {
    const content = document.getElementById(`faq-content-${faqNumber}`);
    const icon = document.getElementById(`faq-icon-${faqNumber}`);

    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

// Smooth Scrolling for Navigation Links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('mobile-menu-closed')) {
                toggleMobileMenu();
            }
        });
    });
}

// Contact Form Submission
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }
}

// Header scroll effect
function updateHeaderBackground() {
    const header = document.getElementById('header');
    const logo = document.querySelector('.header-logo');

    // Services page header is always visible (not transparent)
    if (window.scrollY > 100) {
        header.classList.add('shadow-xl');
    } else {
        header.classList.remove('shadow-xl');
    }
}

// Handle image loading errors (fallback for missing images)
function handleImageErrors() {
    const images = document.querySelectorAll('.carousel-slide img');
    images.forEach(img => {
        img.addEventListener('error', function () {
            // Create a placeholder div with gradient background
            const placeholder = document.createElement('div');
            placeholder.className = 'w-full h-80 rounded-lg shadow-lg flex items-center justify-center text-white font-semibold text-xl';

            // Set background based on service type
            const src = this.src;
            if (src.includes('tech-')) {
                placeholder.style.background = 'linear-gradient(135deg, #4f46e5, #7c3aed)';
                placeholder.textContent = 'Technology Solution';
            } else if (src.includes('oil-')) {
                placeholder.style.background = 'linear-gradient(135deg, #dc2626, #b91c1c)';
                placeholder.textContent = 'Oil & Gas Project';
            } else if (src.includes('transport-')) {
                placeholder.style.background = 'linear-gradient(135deg, #7c2d12, #92400e)';
                placeholder.textContent = 'Transportation Service';
            } else if (src.includes('agri-')) {
                placeholder.style.background = 'linear-gradient(135deg, #16a34a, #15803d)';
                placeholder.textContent = 'Agriculture Solution';
            } else if (src.includes('training-')) {
                placeholder.style.background = 'linear-gradient(135deg, #1d4ed8, #1e40af)';
                placeholder.textContent = 'Training Program';
            } else {
                placeholder.style.background = 'linear-gradient(135deg, #133551, #1e4766)';
                placeholder.textContent = 'Service Image';
            }

            // Replace the image with placeholder
            this.parentNode.replaceChild(placeholder, this);
        });
    });
}

// Keyboard navigation for carousels
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', function (e) {
        // Only handle keyboard navigation if a carousel is visible
        const activeTab = document.querySelector('.tab-content.active');
        if (!activeTab) return;

        const activeCarousel = activeTab.querySelector('.carousel-container');
        if (!activeCarousel) return;

        const carouselId = activeCarousel.id;

        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                prevSlide(carouselId);
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextSlide(carouselId);
                break;
        }
    });
}

// Touch/swipe support for mobile devices
function initializeTouchSupport() {
    const carouselIds = Object.keys(serviceData).map(key => `${key}-carousel`);

    carouselIds.forEach(carouselId => {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        carousel.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        carousel.addEventListener('touchmove', function (e) {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', function (e) {
            if (!isDragging) return;

            const diffX = startX - currentX;
            const threshold = 50; // Minimum swipe distance

            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    // Swiped left, show next slide
                    nextSlide(carouselId);
                } else {
                    // Swiped right, show previous slide
                    prevSlide(carouselId);
                }
            }

            isDragging = false;
        });
    });
}

// Utility function to add new service data
function addServiceData(serviceKey, serviceConfig) {
    if (serviceData[serviceKey]) {
        console.warn(`Service '${serviceKey}' already exists. Use updateServiceData to modify.`);
        return false;
    }

    // Validate service configuration
    if (!serviceConfig.name || !Array.isArray(serviceConfig.images)) {
        console.error('Invalid service configuration. Required: name (string), images (array)');
        return false;
    }

    serviceData[serviceKey] = serviceConfig;
    return true;
}

// Utility function to update existing service data
function updateServiceData(serviceKey, updates) {
    if (!serviceData[serviceKey]) {
        console.warn(`Service '${serviceKey}' not found. Use addServiceData to create new service.`);
        return false;
    }

    serviceData[serviceKey] = { ...serviceData[serviceKey], ...updates };

    // Re-initialize carousel if it exists
    const carouselId = `${serviceKey}-carousel`;
    if (document.getElementById(carouselId)) {
        initializeCarousel(carouselId);
    }

    return true;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize carousels using service data
    Object.keys(serviceData).forEach(serviceKey => {
        const carouselId = `${serviceKey}-carousel`;
        initializeCarousel(carouselId);
    });

    // Start autoplay
    startCarouselAutoplay();

    // Initialize other functionality
    initializeSmoothScrolling();
    initializeContactForm();
    initializeKeyboardNavigation();
    initializeTouchSupport();

    // Set current year
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Initialize header scroll effect
    window.addEventListener('scroll', updateHeaderBackground);
    updateHeaderBackground(); // Set initial state

    // Show default tab (construction)
    showTab('construction');
}); Carousel.id;

switch (e.key) {
    case 'ArrowLeft':
        e.preventDefault();
        prevSlide(carouselId);
        break;
    case 'ArrowRight':
        e.preventDefault();
        nextSlide(carouselId);
        break;
}

// Touch/swipe support for mobile devices
function initializeTouchSupport() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        carousel.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        carousel.addEventListener('touchmove', function (e) {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', function (e) {
            if (!isDragging) return;

            const diffX = startX - currentX;
            const threshold = 50; // Minimum swipe distance

            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    // Swiped left, show next slide
                    nextSlide(carousel.id);
                } else {
                    // Swiped right, show previous slide
                    prevSlide(carousel.id);
                }
            }

            isDragging = false;
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize carousels
    const carouselIds = [
        'construction-carousel',
        'technology-carousel',
        'oilgas-carousel',
        'transport-carousel',
        'agriculture-carousel',
        'training-carousel'
    ];

    carouselIds.forEach(carouselId => {
        initializeCarousel(carouselId);
    });

    // Start autoplay
    startCarouselAutoplay();

    // Initialize other functionality
    initializeSmoothScrolling();
    initializeContactForm();
    handleImageErrors();
    initializeKeyboardNavigation();
    initializeTouchSupport();

    // Set current year
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Initialize header scroll effect
    window.addEventListener('scroll', updateHeaderBackground);
    updateHeaderBackground(); // Set initial state

    // Show default tab (construction)
    showTab('construction');
});
