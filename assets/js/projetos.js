/* ============================================================
   Lista de projetos — dados centralizados
   ============================================================ */
const projetos = [
    {
        titulo: "Studio Bia Jordão",
        categoria: "Beleza & Estética",
        descricao: "Site profissional para especialista em sobrancelhas e lash lifting, com foco em conversão e agendamentos.",
        contexto: "O projeto foi desenvolvido para um negócio local de Campo Grande-MS que precisava centralizar a apresentação dos seus serviços, transmitir credibilidade e facilitar a jornada de marcação de horários das clientes.",
        solucao: "Criação de uma landing page com design personalizado e sofisticado, totalmente responsiva, estruturada com apresentação dos procedimentos e CTAs diretos para agendamento no WhatsApp.",
        imagem: "./assets/img/studio-bia-jordao.png",
        link: "https://studiobiajordao.site.je"
    },
    {
        titulo: "Clínica Psico",
        categoria: "Saúde & Psicologia",
        descricao: "Site institucional para clínica de psicologia com foco em captação de pacientes.",
        contexto: "Projeto desenvolvido como simulação de presença digital para um profissional de psicologia, com necessidade de atrair pacientes e facilitar contato via WhatsApp.",
        solucao: "Layout responsivo, estrutura clara de serviços, CTA para WhatsApp e SEO básico para busca local.",
        imagem: "./assets/img/psico.png",
        link: "./psico"
    },
    {
        titulo: "Bellelza Estética",
        categoria: "Estética & Bem-estar",
        descricao: "Site institucional para profissional de estética e beleza.",
        contexto: "Simulação de site para uma esteticista autônoma que precisa divulgar serviços e captar clientes online.",
        solucao: "Design moderno, foco em apresentação de serviços, responsividade mobile e integração com WhatsApp.",
        imagem: "./assets/img/bellelza.png",
        link: "./bellelza"
    },
    {
        titulo: "Natal Lima - Portfólio",
        categoria: "Portfólio Pessoal",
        descricao: "Site pessoal e portfólio profissional desenvolvido em HTML, CSS e JavaScript puro.",
        contexto: "Projeto de branding pessoal para apresentação de habilidades como desenvolvedor web.",
        solucao: "Estrutura leve, foco em performance, SEO básico e organização de projetos como vitrine técnica.",
        imagem: "./assets/img/nataldelima.png",
        link: "./"
    },
    {
        titulo: "Doguinho's Vet",
        categoria: "Veterinária",
        descricao: "Site institucional para clínica veterinária.",
        contexto: "Projeto modelo de site simples para clínica veterinária.",
        solucao: "Layout responsivo, SEO básico e foco em conversão.",
        imagem: "./assets/img/doguinhos.png",
        link: "./doguinhos"
    }
];

/* ============================================================
   Renderização dos cards
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projectsList');
    const filtersContainer = document.getElementById('projectsFilters');
    if (!container || !filtersContainer) return;

    /* ---------- Renderizar cards ---------- */
    projetos.forEach(projeto => {
        const card = document.createElement('article');
        card.classList.add('project-detail-card');
        card.dataset.categoria = projeto.categoria;

        card.innerHTML = `
            <div class="project-detail-image" style="background-image: url('${projeto.imagem}')">
                <span class="project-detail-category">${projeto.categoria}</span>
            </div>
            <div class="project-detail-body">
                <h2>${projeto.titulo}</h2>
                <p class="project-detail-description">${projeto.descricao}</p>

                <div class="project-detail-meta">
                    <div class="project-detail-block">
                        <h3><i class="bi bi-info-circle"></i> Contexto</h3>
                        <p>${projeto.contexto}</p>
                    </div>
                    <div class="project-detail-block">
                        <h3><i class="bi bi-lightbulb"></i> Solução</h3>
                        <p>${projeto.solucao}</p>
                    </div>
                </div>

                <a href="${projeto.link}" target="_blank" rel="noopener" class="btn btn-gold">
                    <i class="bi bi-box-arrow-up-right me-2"></i> Visitar projeto
                </a>
            </div>
        `;

        container.appendChild(card);
    });

    /* ---------- Gerar botões de filtro automaticamente ---------- */
    const categorias = [...new Set(projetos.map(p => p.categoria))].sort();

    categorias.forEach(cat => {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        btn.dataset.filter = cat;
        btn.textContent = cat;
        filtersContainer.appendChild(btn);
    });

    /* ---------- Lógica de filtro ---------- */
    filtersContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        // Atualiza o botão ativo
        filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        const cards = document.querySelectorAll('.project-detail-card');

        cards.forEach(card => {
            const match = filter === 'all' || card.dataset.categoria === filter;
            card.style.display = match ? '' : 'none';
        });
    });
});