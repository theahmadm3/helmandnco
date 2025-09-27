let currentSlide = 1;
const totalSlides = 3;

function showSlide(slideNumber) {
    for (let i = 1; i <= totalSlides; i++) {
        const slide = document.getElementById(`slide-${i}`);
        if (i === slideNumber) {
            slide.style.opacity = "1";
        } else {
            slide.style.opacity = "0";
        }
    }

    // Update navigation dots
    const dots = document.querySelectorAll(".absolute.bottom-8 button");
    dots.forEach((dot, index) => {
        if (index + 1 === slideNumber) {
            dot.style.opacity = "1";
        } else {
            dot.style.opacity = "0.5";
        }
    });
}

function nextSlide() {
    currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    showSlide(currentSlide);
}

function goToSlide(slideNumber) {
    currentSlide = slideNumber;
    showSlide(currentSlide);
}

// Auto-advance slides
setInterval(nextSlide, 5000);

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");

    if (mobileMenu.classList.contains("mobile-menu-closed")) {
        mobileMenu.classList.remove("mobile-menu-closed");
        mobileMenu.classList.add("mobile-menu-open");
        menuIcon.innerHTML =
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
    } else {
        mobileMenu.classList.remove("mobile-menu-open");
        mobileMenu.classList.add("mobile-menu-closed");
        menuIcon.innerHTML =
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    }
}

// FAQ Toggle
function toggleFAQ(faqNumber) {
    const content = document.getElementById(`faq-content-${faqNumber}`);
    const icon = document.getElementById(`faq-icon-${faqNumber}`);

    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        // Close mobile menu if open
        const mobileMenu = document.getElementById("mobileMenu");
        if (!mobileMenu.classList.contains("mobile-menu-closed")) {
            toggleMobileMenu();
        }
    });
});

// Header Background on Scroll
function updateHeaderBackground() {
    const header = document.getElementById("header");
    const logo = document.querySelector(".header-logo"); // Get the logo element

    if (window.scrollY > 100) {
        header.classList.add("bg-white", "shadow-lg", "text-primary");
        header.classList.remove("bg-transparent", "text-white");

        // Change logo src for scrolled state (dark logo for light background)
        if (logo) {
            logo.src = "./helmand-logo-dark.png"; // Replace with your dark logo path
        }
    } else {
        header.classList.add("bg-transparent", "text-white");
        header.classList.remove("bg-white", "shadow-lg", "text-primary");

        // Change logo src for initial state (light logo for transparent/dark background)
        if (logo) {
            logo.src = "./helmand-logo-white.png"; // Replace with your light logo path
        }
    }
}

// Initialize header and add scroll listener when page loads
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const logo = document.querySelector(".header-logo");

    // Set initial transparent state
    header.classList.add("bg-transparent", "text-white");

    // Set initial logo
    if (logo) {
        logo.src = "./helmand-logo-white.png"; // Replace with your light logo path
    }

    // Add single scroll event listener
    window.addEventListener("scroll", updateHeaderBackground);

    // Call once to set initial state based on current scroll position
    updateHeaderBackground();
});

// Contact Form Submission
document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert("Thank you for your message! We will contact you soon.");
        this.reset();
    });

// Initialize
showSlide(1);
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Image arrays for each service
const serviceImages = {
    construction: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503387762603-91073566d70a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    technology: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    oilgas: [
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1585145759476-b21aec3d5d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    transportation: [
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    agriculture: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    training: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
};

// Carousel states
const carouselStates = {
    construction: { currentIndex: 0 },
    technology: { currentIndex: 0 },
    oilgas: { currentIndex: 0 },
    transportation: { currentIndex: 0 },
    agriculture: { currentIndex: 0 },
    training: { currentIndex: 0 }
};

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all carousels
    Object.keys(serviceImages).forEach(service => {
        initializeCarousel(service);
    });
});

// Initialize carousel for a specific service
function initializeCarousel(service) {
    const carousel = document.getElementById(`${service}-carousel`);
    const indicatorsContainer = document.getElementById(`${service}-indicators`);

    // Clear existing content
    carousel.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    // Add slides
    serviceImages[service].forEach((imageUrl, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${imageUrl}" alt="${service} image ${index + 1}" class="service-image">`;
        carousel.appendChild(slide);

        // Add indicator
        const indicator = document.createElement('span');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.onclick = () => goToSlide(service, index);
        indicatorsContainer.appendChild(indicator);
    });
}

// Service tab functionality
function showServiceDetail(service) {
    // Hide all service details
    const serviceDetails = document.querySelectorAll('.service-detail');
    serviceDetails.forEach(detail => {
        detail.classList.remove('active');
        detail.classList.add('hidden');
    });

    // Show selected service detail
    const selectedDetail = document.getElementById(`${service}-detail`);
    selectedDetail.classList.remove('hidden');
    selectedDetail.classList.add('active');

    // Update active tab
    const serviceTabs = document.querySelectorAll('.service-tab');
    serviceTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Find and activate the clicked tab
    serviceTabs.forEach(tab => {
        if (tab.textContent.toLowerCase().includes(service)) {
            tab.classList.add('active');
        }
    });

    // Reset carousel for the newly shown service
    resetCarousel(service);
}

// Carousel functionality
function changeSlide(service, direction) {
    const state = carouselStates[service];
    const totalSlides = serviceImages[service].length;
    state.currentIndex = (state.currentIndex + direction + totalSlides) % totalSlides;
    updateCarousel(service);
}

function goToSlide(service, index) {
    const state = carouselStates[service];
    state.currentIndex = index;
    updateCarousel(service);
}

function updateCarousel(service) {
    const state = carouselStates[service];
    const carousel = document.getElementById(`${service}-carousel`);
    const indicators = document.querySelectorAll(`#${service}-indicators .indicator`);

    // Update slide position
    carousel.style.transform = `translateX(-${state.currentIndex * 100}%)`;

    // Update active slide
    const slides = carousel.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        if (index === state.currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === state.currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function resetCarousel(service) {
    carouselStates[service].currentIndex = 0;
    updateCarousel(service);
}

// Auto-advance carousels (optional)
setInterval(() => {
    const activeServiceElement = document.querySelector('.service-detail.active');
    if (activeServiceElement) {
        const activeService = activeServiceElement.id.replace('-detail', '');
        changeSlide(activeService, 1);
    }
}, 5000); // Change slide every 5 seconds
