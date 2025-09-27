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

// Tab functionality
const serviceTabs = document.querySelectorAll(".service-tab");
const tabContents = document.querySelectorAll(".tab-content");

serviceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs and contents
        serviceTabs.forEach((t) => {
            t.classList.remove("active", "bg-blue-900", "text-white");
            t.classList.add("text-gray-700", "hover:bg-gray-100");
        });
        tabContents.forEach((content) => content.classList.remove("active"));

        // Add active class to clicked tab
        tab.classList.add("active", "bg-blue-900", "text-white");
        tab.classList.remove("text-gray-700", "hover:bg-gray-100");

        // Show corresponding content
        const serviceId = tab.getAttribute("data-service");
        document.getElementById(serviceId).classList.add("active");

        // Reset all carousels to first slide
        resetCarousels();
    });
});

// Carousel functionality
const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const indicators = carousel.querySelectorAll(".carousel-indicator");
    const prevBtn = carousel.querySelector(".carousel-nav.prev");
    const nextBtn = carousel.querySelector(".carousel-nav.next");

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event listeners
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Auto-advance carousel every 5 seconds
    setInterval(nextSlide, 5000);
});

function resetCarousels() {
    carousels.forEach((carousel) => {
        const track = carousel.querySelector(".carousel-track");
        const indicators = carousel.querySelectorAll(".carousel-indicator");

        track.style.transform = "translateX(0%)";
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === 0);
        });
    });
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("mobile-menu-closed");
}

// Scroll to form function
function scrollToForm() {
    document.getElementById("contact-form").scrollIntoView({
        behavior: "smooth",
    });
}

// Initialize first tab as active
document.addEventListener("DOMContentLoaded", () => {
    serviceTabs[0].classList.add("active", "bg-blue-900", "text-white");
});