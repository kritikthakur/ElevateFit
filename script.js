document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation (Hamburger Menu)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

    // Testimonials Carousel
    const testimonials = [
    {
        name: "KRITIK THAKUR",
        photo: "images/success_stories_image1.jpg", // <-- Your new image path
        text: "Training with ElevateFit had a transformative experience. Their personalized attention and expert guidance helped me surpass goals I never thought possible. I'm stronger and more confident than ever!"
    },
    {
        name: "ROHAN",
        photo: "images/success_stories_image2.jpg", // <-- Your new image path
        text: "As an athlete, I needed a trainer who could push me to the next level. ElevateFit's dynamic workouts and deep knowledge of performance training were exactly what I needed to break through my plateau."
    },
    {
        name: "Sarah L.",
        photo: "images/sarah-l.jpg", // <-- Your new image path
        text: "I was new to the gym and intimidated, but Alex created a welcoming and motivating environment. He taught me proper form and built a plan that made me fall in love with fitness."
    }
];

    let currentTestimonial = 0;
    const carouselContainer = document.querySelector('.testimonial-carousel');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    function loadTestimonial(index) {
    const item = testimonials[index];
    carouselContainer.innerHTML = `
        <div class="testimonial-slide active">
            <img src="${item.photo}" alt="${item.name}">
            <div class="testimonial-content">
                <p>"${item.text}"</p>
                <span class="author">- ${item.name}</span>
            </div>
        </div>
    `;
}

    nextBtn.addEventListener('click', () => {
        currentTestimonial++;
        if (currentTestimonial > testimonials.length - 1) {
            currentTestimonial = 0;
        }
        loadTestimonial(currentTestimonial);
    });
    
    prevBtn.addEventListener('click', () => {
        currentTestimonial--;
        if (currentTestimonial < 0) {
            currentTestimonial = testimonials.length - 1;
        }
        loadTestimonial(currentTestimonial);
    });
    
    // Initial load
    loadTestimonial(currentTestimonial);

    // Contact Form Submission (for demonstration)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

});