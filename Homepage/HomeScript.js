document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    // logika bayangan saar di scroll navbar
    if (navbar) {
        Object.assign(navbar.style, {
            position: 'fixed',
            top: '0',
            width: '100%',
            zIndex: '1000',
            backgroundColor: 'black',
            transition: 'box-shadow 0.3s ease'
        });

        // logika Bayangan saat Scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // logika scroll navbar
    const carouselContainer = document.getElementById('carouselExampleCaptions');
    const nextButton = document.querySelector('.carousel-control-next');
    
    const slideInterval = 3000; 
    let autoSlide; // variabel buat nyimpen timer
    if (carouselContainer && nextButton) {
        const startSlide = () => {
            autoSlide = setInterval(() => {
                nextButton.click();
            }, slideInterval);
        };

        // untuk stop slide (pause)
        const stopSlide = () => {
            clearInterval(autoSlide);
        };

        startSlide();

        // fitur pause saat mouse nempel
        carouselContainer.addEventListener('mouseenter', stopSlide);
        carouselContainer.addEventListener('mouseleave', startSlide);
    }
});