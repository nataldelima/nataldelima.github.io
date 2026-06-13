//Função para Carousel


document.addEventListener('DOMContentLoaded', () => {

    // Lista de projetos do portfólio
    const projetos = [
        {
            titulo: "Psico",
            descricao: "Projeto modelo de site simples para profissional em psicólogia.",
            imagem: "midia/psico.png",
            link: "https://nataldelima.github.io/psico"
        },
        {
            titulo: "BellElza",
            descricao: "Projeto modelo de site simples para esteticista.",
            imagem: "midia/bellelza.png",
            link: "https://nataldelima.github.io/bellelza"
        },
        {
            titulo: "Natal de Lima",
            descricao: "Site pessoal feito em HTML5, CSS e JavaScript.",
            imagem: "midia/nataldelima.png",
            link: "https://nataldelima.github.io"
        },

        {
            titulo: "Doguinho's",
            descricao: "Projeto modelo de site simples para clínica veterinária.",
            imagem: "midia/doguinhos.png",
            link: "https://nataldelima.github.io/doguinhos"
        }, {
            titulo: "Lista de Tarefas",
            descricao: "Projeto de lista de tarefas feito em HTML5, CSS e JavaScript.",
            imagem: "midia/lista-de-tarefas.png",
            link: "midia/portfolio/lista-de-tarefas/"
        },
        {
            titulo: "Clínica da Mulher",
            descricao: "Projeto fictício para treinar habilidades de desenvolvimento web.",
            imagem: "midia/clinica-mulher.png",
            link: "midia/portfolio/clinica-mulher/"
        },
        {
            titulo: "Inteligência Artificial",
            descricao: "Projeto fictício para treinar habilidades de desenvolvimento web.",
            imagem: "midia/ia.png",
            link: "midia/portfolio/ia/"
        },
        {
            titulo: "Agência Fake",
            descricao: "Projeto fictício para treinar habilidades de desenvolvimento web.",
            imagem: "midia/agencia-fake.png",
            link: "midia/portfolio/agencia-fake/"
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
            <h4 class="card-title text-dark" style="text-align: center;">Projeto ${projeto.titulo}</h4>
            <p class="card-text text-dark"><strong>Descrição:</strong> ${projeto.descricao}</p>            
            <a href="${projeto.link}" target="_blank" class="btn btn-warning mt-auto">Ver Projeto</a>
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


//Identificar o sistema operacional

function detectOS() {
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

    gtag_report_conversion();
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
