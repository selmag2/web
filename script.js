window.addEventListener('scroll', () => {
    const contactForm = document.querySelector('.contact-form');
    if (window.scrollY > 500) {
        contactForm.classList.add('animate');
    } else {
        contactForm.classList.remove('animate');
    }
});
gsap.to('.contact-form', { duration: 1, x: 100, rotation: 360 });
