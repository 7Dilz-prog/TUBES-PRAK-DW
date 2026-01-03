document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const kebabBtn = document.getElementById('kebabBtn'); // Pastikan ID ini sama dengan HTML
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;

    // 1. EFEK SCROLL NAVBAR
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // 2. LOGIKA BUKA/TUTUP MOBILE MENU (Trigger Klik)
    if (kebabBtn && mobileMenu) {
        kebabBtn.addEventListener('click', () => {
            const isOpening = mobileMenu.classList.toggle('show');
            if (menuOverlay) menuOverlay.classList.toggle('active');

            // FIX SCROLL: Kunci layar saat menu buka
            if (isOpening) {
                body.style.overflow = 'hidden';
                body.style.touchAction = 'none';
            } else {
                body.style.overflow = 'auto';
                body.style.touchAction = 'auto';
            }
        });
    }

    // 3. AUTO-CLOSE SAAT KLIK LINK ATAU OVERLAY
    const closeMenu = () => {
        mobileMenu.classList.remove('show');
        if (menuOverlay) menuOverlay.classList.remove('active');
        body.style.overflow = 'auto';
        body.style.touchAction = 'auto';
    };

    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // 4. RESET SAAT LAYAR DIBESARKAN
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            closeMenu();
        }
    });
});