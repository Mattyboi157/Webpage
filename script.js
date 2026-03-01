// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const make = document.getElementById('car_make').value;
    const model = document.getElementById('car_model').value;
    const year = document.getElementById('car_year').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && address && make && model && year && message) {
        // Here you would typically send the data to a server
        // For now, we'll show a success message
        console.log('Form submitted:', {
            name,
            email,
            address,
            make,
            model,
            year,
            message
        });
        
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        this.reset();
    } else {
        alert('Please fill out all fields');
    }
});

// Smooth scrolling for navigation links
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
    });
});
