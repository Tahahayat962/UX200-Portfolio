document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debug confirmation

    // ====== MOBILE MENU ======
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-item a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // ====== SCROLL EFFECTS ======
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth scrolling for portfolio button
    const portfolioBtn = document.querySelector('.btn[href="#portfolio"]');
    if (portfolioBtn) {
        portfolioBtn.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector("#portfolio").scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        });
    }

    // ====== ANIMATIONS ======
    const animatedElements = document.querySelectorAll(".fade-in-up");
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px" // Triggers slightly before element is in view
        });

        animatedElements.forEach(element => observer.observe(element));
    } else {
        console.warn("No elements with .fade-in-up found");
    }

    // ====== CUSTOM CURSOR ======
    const cursor = document.querySelector(".custom-cursor");
    
    if (cursor) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        const interactiveElements = document.querySelectorAll("a, button, input, textarea, .btn");
        
        interactiveElements.forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursor.style.transform += " scale(1.5)";
            });

            el.addEventListener("mouseleave", () => {
                cursor.style.transform = `translate(${parseInt(cursor.style.left)}px, ${parseInt(cursor.style.top)}px) scale(1)`;
            });
        });
    }
});