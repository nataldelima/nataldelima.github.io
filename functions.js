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


/*

const phoneNumber = "5567991609897";
function detectOS() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    if (/Android|iPhone|iPad|iPod|Windows/.test(userAgent)) {
        return "mobileOrWindows";
    }
    return "other";
}

function updateWhatsAppLink() {
    const whatsappLink = document.getElementById("whatsapp");
    const message = `Olá! 👋 
    
    🖥️ Gostaria de informações para fazer um site. 📱
    
    Pode me ajudar?`;
    const encodedMessage = encodeURIComponent(message);
    const baseURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    const webURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    if (detectOS() === "mobileOrWindows") {
        whatsappLink.href = baseURL;
    } else {
        whatsappLink.href = webURL;
    }
}

// Executa a função ao carregar a página
window.onload = updateWhatsAppLink;


function sendWhatsAppMessage() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const fone = document.getElementById('fone').value;
    const mensagem = document.getElementById('mensagem').value;
    const whatsappMessage = `*Nome:* ${nome}%0A*Email:* ${email}%0A*Telefone:* ${fone}%0A*Mensagem:* ${mensagem}`;
    const app = detectOS() === "mobileOrWindows" ? 'api' : 'web';
    const whatsappUrl = `https://${app}.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
}

*/

function detectOS() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    if (/Android|iPhone|iPad|iPod|Windows/.test(userAgent)) {
        return "mobileOrWindows";
    }
    return "other";
}


// Enviar mensagem por whatsapp
function sendWhatsAppMessage(source = 'form') {
    const phoneNumber = "5567991609897";
    const app = detectOS() === "mobileOrWindows" ? 'api' : 'web';
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

    alert(detectOS());


    var whatsappMessage = source === 'form' ? `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}` : message;
    var whatsappUrl = `https://${app}.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
}