/**
 * EventScript.js - Scaramouchtor
 * Berisi logika untuk Navbar, Mobile Menu, dan Perbaikan Bug Visual
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const kebabMenu = document.getElementById('kebabMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    // 1. EFEK SCROLL NAVBAR
    // Mengubah background navbar dari transparan ke hitam saat di-scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // 2. LOGIKA BUKA/TUTUP MOBILE MENU
    if (kebabMenu && mobileMenu) {
        kebabMenu.addEventListener('click', () => {
            const isOpening = mobileMenu.classList.toggle('show');

            // FIX GETAR: Kunci scroll body agar tidak terjadi konflik gerakan
            if (isOpening) {
                // Saat menu terbuka, layar belakang tidak bisa di-scroll
                body.style.overflow = 'hidden';
                body.style.touchAction = 'none'; // Tambahan untuk kestabilan di HP
            } else {
                // Saat menu tertutup, kembalikan fungsi scroll
                body.style.overflow = 'auto';
                body.style.touchAction = 'auto';
            }
        });
    }

    // 3. AUTO-CLOSE MENU SAAT KLIK LINK
    // Berguna agar menu otomatis tertutup saat user memilih menu (Events, Inventory, dll)
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            body.style.overflow = 'auto';
            body.style.touchAction = 'auto';
        });
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            mobileMenu.classList.remove('show');
            body.style.overflow = 'auto';
        }
    });
});