async function buscarValorClasse(url, classe) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const html = await response.text();
        const document = new DOMParser().parseFromString(html, "text/html");
        const elementos = document.getElementsByClassName(classe);

        if (elementos.length === 0) {
            throw new Error(`Nenhum elemento encontrado com a classe ${classe}`);
        }

        const valor = elementos[0].textContent.trim();
        return valor;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Exemplo de uso
const url = "https://www.google.com/maps/search/clinica+estetica/@-20.5013962,-54.6412327,15z/data=!4m2!2m1!6e6?entry=ttu"; // Insira a URL do seu site
const classe = "meu-classe"; // Insira a classe que você deseja buscar o valor

buscarValorClasse(url, classe)
    .then(valor => {
        if (valor) {
            console.log(`Valor da classe ${classe}: ${valor}`);
        } else {
            console.error(`Não foi possível obter o valor da classe ${classe}`);
        }
    })
    .catch(error => console.error(error));


//Função para Carousel

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#portfolioCarousel');
    const prevBtn = carousel.querySelector('.carousel-control-prev');
    const nextBtn = carousel.querySelector('.carousel-control-next');
    const items = carousel.querySelectorAll('.carousel-item');

    const updateButtons = () => {
        const activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
        prevBtn.style.display = activeIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = activeIndex === items.length - 1 ? 'none' : 'block';
    };

    carousel.addEventListener('slid.bs.carousel', updateButtons);
    updateButtons(); // Initialize button visibility
});

//Identificar o sistema operacional

function detectOS() {
    const userAgent = navigator.userAgent;

    return (/Android|iPhone|iPad|iPod|Windows/.test(userAgent)) ? "api" : "web";
}


// Enviar mensagem por whatsapp
function sendWhatsAppMessage(source = 'form') {
    const phoneNumber = "5567991609897";
    const app = detectOS();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var alertBox = document.querySelector('.alert');

    if (source == 'form') {

        if (!name || !email || !phone) {
            alertBox.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            alertBox.style.color = 'yellow';
            return;
        }
    }
    if (!message) {
        message = `👋Olá! estou pensando em desenvolver um site.🖥️ 📱 Pode me dar mais informações?`;
    }

    var whatsappMessage = source === 'form' ? `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}` : message;
    var whatsappUrl = `https://${app}.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
}