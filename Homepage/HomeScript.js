document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    // 1. Logika Navbar berubah warna saat Scroll
    if (navbar) {
        window.addEventListener('scroll', () => {
            // Jika discroll lebih dari 50px ke bawah
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                // Jika kembali ke paling atas
                navbar.classList.remove('nav-scrolled');
            }
        });
    }

    // 2. Logika Carousel (Optional, Bootstrap sudah handle otomatis sebenarnya)
    const myCarousel = document.querySelector('#carouselExampleCaptions');
    if (myCarousel) {
        // Inisialisasi carousel dengan interval 5 detik
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 5000,
            ride: 'carousel'
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    // 1. Logika Navbar berubah warna saat Scroll
    if (navbar) {
        window.addEventListener('scroll', () => {
            // Jika discroll lebih dari 50px ke bawah
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                // Jika kembali ke paling atas
                navbar.classList.remove('nav-scrolled');
            }
        });
    }

    // 2. Logika Carousel (DIPERBAIKI)
    const myCarousel = document.querySelector('#carouselExampleCaptions');
    if (myCarousel) {
        // Inisialisasi carousel dengan opsi lengkap
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 5000,     // Ganti gambar tiap 5 detik
            ride: 'carousel',   // Mulai otomatis
            pause: 'hover',     // BERHENTI saat di-hover (PC) atau disentuh (HP)
            touch: true         // Mengizinkan swipe kiri-kanan di HP
        });
    }
});
});