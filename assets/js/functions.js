document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Menu Hamburger (Mobile) ---------- */
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Fecha o menu ao clicar em um link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ---------- Botões de WhatsApp (data-whatsapp) ---------- */
    document.querySelectorAll('[data-whatsapp]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const message = el.dataset.message || '';
            sendWhatsAppMessage(message);
        });
    });

    /* ---------- Ano dinâmico no rodapé ---------- */
    const yearEl = document.querySelector('[data-year]');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});


function detectOS() {
    const userAgent = window.navigator.userAgent;
    return (/Android|iPhone|iPad|iPod|Windows/i.test(userAgent)) ? "api" : "web";
}


function sendWhatsAppMessage(message) {
    const phoneNumber = "5567991609897";
    const app = detectOS();
    const finalMessage = message || `👋Olá! estou pensando em desenvolver um site.🖥️ 📱 Pode me dar mais informações?`;

    try {
        if (typeof gtag_report_conversion === 'function') {
            gtag_report_conversion();
        }
    } catch (error) {
        console.warn("Conversão não registrada devido a bloqueador de anúncios, mas o redirecionamento ocorrerá.");
    }

    const whatsappUrl = `https://${app}.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
}