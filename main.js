/* ==========================================================================
   COMPORTAMIENTO INTERACTIVO: MOCKUP OBSERVATORIO DDHH ELVIS VIVAS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MENÚ MÓVIL (Hamburguesa)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Cambiar icono de hamburguesa a cerrar (X)
            const icon = mobileMenuBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Cerrar menú al hacer clic en un enlace de navegación (móvil)
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fa-solid fa-bars';
            });
        });
    }

    // 2. CAMBIO DE ESTILO EN LA CABECERA AL HACER SCROLL
    const header = document.querySelector('.main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.padding = '5px 0';
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            } else {
                header.style.padding = '0';
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
            }
        });
    }

    // 3. EVENTOS DE CLIC EN BOTONES DE MOCKUP (Feedback visual simple)
    const mockButtons = document.querySelectorAll('.btn, .btn-text');
    mockButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Si el botón no es un enlace de ancla real en la página
            const href = btn.getAttribute('href');
            if (!href || href === '#' || href.startsWith('#proyecto-detalle')) {
                e.preventDefault();
                alert('¡Interacción de Mockup! Este botón llevaría a la sección o funcionalidad seleccionada en el sitio real.');
            }
        });
    });

});
