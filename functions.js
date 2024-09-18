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
