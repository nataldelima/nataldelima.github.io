//Função para Carousel


document.addEventListener('DOMContentLoaded', () => {

    // Lista de projetos do portfólio
    const projetos = [
        {
            titulo: "Studio Bia Jordão",
            descricao: "Site profissional para especialista em sobrancelhas e lash lifting, com foco em conversão e agendamentos.",
            contexto: "O projeto foi desenvolvido para um negócio local de Campo Grande-MS que precisava centralizar a apresentação dos seus serviços, transmitir credibilidade e facilitar a jornada de marcação de horários das clientes.",
            solucao: "Criação de uma landing page com design personalizado e sofisticado, totalmente responsiva, estruturada com apresentação dos procedimentos e CTAs diretos para agendamento no WhatsApp.",
            imagem: "midia/studio-bia-jordao.png",
            link: "https://studiobiajordao.site.je"
        },
        {
            titulo: "Clínica Psico",
            descricao: "Site institucional para clínica de psicologia com foco em captação de pacientes.",
            contexto: "Projeto desenvolvido como simulação de presença digital para um profissional de psicologia, com necessidade de atrair pacientes e facilitar contato via WhatsApp.",
            solucao: "Layout responsivo, estrutura clara de serviços, CTA para WhatsApp e SEO básico para busca local.",
            imagem: "midia/psico.png",
            link: "https://nataldelima.github.io/psico"
        },
        {
            titulo: "Bellelza Estética",
            descricao: "Site institucional para profissional de estética e beleza.",
            contexto: "Simulação de site para uma esteticista autônoma que precisa divulgar serviços e captar clientes online.",
            solucao: "Design moderno, foco em apresentação de serviços, responsividade mobile e integração com WhatsApp.",
            imagem: "midia/bellelza.png",
            link: "https://nataldelima.github.io/bellelza"
        },
        {
            titulo: "Natal Lima - Portfólio",
            descricao: "Site pessoal e portfólio profissional desenvolvido em HTML, CSS e JavaScript puro.",
            contexto: "Projeto de branding pessoal para apresentação de habilidades como desenvolvedor web.",
            solucao: "Estrutura leve, foco em performance, SEO básico e organização de projetos como vitrine técnica.",
            imagem: "midia/nataldelima.png",
            link: "https://nataldelima.github.io"
        },

        {
            titulo: "Doguinho's Vet",
            descricao: "Site institucional para clínica veterinária",
            contexto: "Projeto modelo de site simples para clínica veterinária.",
            solucao: "Layout responsivo, SEO básico e foco em conversão.",
            imagem: "midia/doguinhos.png",
            link: "https://nataldelima.github.io/doguinhos"
        },
        {
            titulo: "Clínica da Mulher",
            descricao: "Site institucional fictício para clínica médica especializada.",
            contexto: "Simulação de site para clínica de saúde com foco em apresentação de serviços médicos.",
            solucao: "Layout institucional, estrutura de serviços e design responsivo para mobile.",
            imagem: "midia/clinica-mulher.png",
            link: "midia/portfolio/clinica-mulher/"
        },
        {
            titulo: "Sistema IA Landing",
            descricao: "Landing page conceitual sobre inteligência artificial.",
            contexto: "Projeto de estudo para prática de construção de landing pages modernas.",
            solucao: "Layout moderno, hierarquia visual clara e foco em conversão de interesse.",
            imagem: "midia/ia.png",
            link: "midia/portfolio/ia/"
        }
    ];

    // Container do Swiper
    const wrapper = document.getElementById('portfolioWrapper');

    // Gera dinamicamente os slides
    projetos.forEach(projeto => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        slide.innerHTML = `
        <div class="card h-100">
          <img src="${projeto.imagem}" class="card-img-top" alt="${projeto.titulo}" style="height: 250px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
          
            <h4 class="card-title text-dark text-center">${projeto.titulo}</h4>
            <p class="text-muted text-center"><strong>Descrição:</strong> ${projeto.descricao}</p>
            <hr/>
           <div class="details-wrapper mt-2 d-flex flex-column gap-2">

          <div class="d-flex gap-2 mt-auto">
                <button class="btn btn-portfolio toggle-details w-50">
                    <i class="bi bi-chevron-down"></i> Detalhes
                </button>

                <a href="${projeto.link}" target="_blank" class="btn btn-warning w-50">
                    <i class="bi bi-box-arrow-up-right"></i> Projeto
                </a>
            </div>
            <div class="details-content mt-3">
                <p class="text-dark">
                <strong>Contexto:</strong> ${projeto.contexto || 'N/A'}
                </p>

                <p class="text-dark">
                <strong>Solução:</strong> ${projeto.solucao || 'N/A'}
                </p>
            </div>
            </div>
            
          </div>
        </div>
      `;
        wrapper.appendChild(slide);
    });

    // Inicializa o Swiper
    const swiper = new Swiper(".portfolioSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoHeight: false,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 30 }, // tablets
            992: { slidesPerView: 3, spaceBetween: 30 }, // notebooks e PCs
        },
    });
});


document.addEventListener('click', function (e) {
    const btn = e.target.closest('.toggle-details');
    if (!btn) return;

    const wrapper = btn.closest('.details-wrapper');

    wrapper.classList.toggle('active');

    const isOpen = wrapper.classList.contains('active');

    btn.innerHTML = isOpen
        ? `<i class="bi bi-chevron-up"></i> Ocultar detalhes`
        : `<i class="bi bi-chevron-down"></i> Detalhes`;
});

//Identificar o sistema operacional

function detectOS() {
    const userAgent = window.navigator.userAgent;
    return (/Android|iPhone|iPad|iPod|Windows/i.test(userAgent)) ? "api" : "web";
}


// Enviar mensagem por whatsapp
function sendWhatsAppMessage(source = 'form') {
    const phoneNumber = "5567991609897";
    const app = detectOS();

    var name = document.getElementById('name')?.value || '';
    var email = document.getElementById('email')?.value || '';
    var phone = document.getElementById('phone')?.value || '';
    var message = document.getElementById('message')?.value || '';
    var alertBox = document.querySelector('.alert');

    if (source === 'form') {

        if (!name || !email || !phone) {
            alertBox.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            alertBox.style.color = 'yellow';
            return;
        }
    }

    if (source === 'float') {
        message = `👋Olá! Vi seu site e gostaria de solicitar um orçamento`;
    }

    if (source === 'btn') {
        message = `👋Olá! Gostaria de saber mais sobre seus serviços`;
    }

    try {
        if (typeof gtag_report_conversion === 'function') {
            gtag_report_conversion();
        }
    } catch (error) {
        console.warn("Conversão não registrada devido a bloqueador de anúncios, mas o redirecionamento ocorrerá.");
    }


    if (!message) {
        message = `👋Olá! estou pensando em desenvolver um site.🖥️ 📱 Pode me dar mais informações?`;
    }

    var whatsappMessage = source === 'form' ? `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}` : message;
    var whatsappUrl = `https://${app}.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
}

// Função para trocar o ícone ao passar o mouse
document.querySelectorAll('.social-media img').forEach(icon => {
    const originalSrc = icon.src;
    const hoverSrc = icon.getAttribute('data-hover');

    icon.addEventListener('mouseenter', () => {
        icon.src = hoverSrc;
    });

    icon.addEventListener('mouseleave', () => {
        icon.src = originalSrc;
    });
});
