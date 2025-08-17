// Funcionalidades específicas da página de portfólio

// Função para animar elementos quando entram na viewport
function animarElementosVisiveis() {
    const elementos = document.querySelectorAll('.project-card, .stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Função para filtrar projetos por tecnologia
function filtrarProjetos(tecnologia) {
    const projetos = document.querySelectorAll('.project-card');
    
    projetos.forEach(projeto => {
        const techBadges = projeto.querySelectorAll('.tech-badges img');
        let temTecnologia = false;
        
        techBadges.forEach(badge => {
            if (badge.alt.toLowerCase().includes(tecnologia.toLowerCase())) {
                temTecnologia = true;
            }
        });
        
        if (tecnologia === 'todos' || temTecnologia) {
            projeto.style.display = 'block';
            projeto.style.animation = 'fadeInUp 0.6s ease-out';
        } else {
            projeto.style.display = 'none';
        }
    });
    
    // Atualizar contador de projetos visíveis
    atualizarContadorProjetos();
}

// Função para atualizar contador de projetos visíveis
function atualizarContadorProjetos() {
    const projetosVisiveis = document.querySelectorAll('.project-card[style*="display: block"], .project-card:not([style*="display: none"])');
    const contador = document.getElementById('contador-projetos');
    
    if (contador) {
        contador.textContent = projetosVisiveis.length;
    }
}

// Função para criar filtros de tecnologia
function criarFiltrosTecnologia() {
    const tecnologias = [
        'Java', 'Spring', 'JavaFX', 'CSS', 'Postgres', 'MySQL', 
        'JavaScript', 'HTML', 'Bootstrap', 'Hibernate', 'Selenium'
    ];
    
    const filtrosContainer = document.createElement('div');
    filtrosContainer.className = 'filtros-tecnologia mb-4';
    filtrosContainer.innerHTML = `
        <div class="em1-2 text_paleta mb-2 centro">
            <strong>Filtrar por Tecnologia:</strong>
        </div>
        <div class="d-flex gap-2 flex-wrap justify-content-center">
            <button class="btn btn-outline-primary btn-sm" onclick="filtrarProjetos('todos')">
                Todas
            </button>
            ${tecnologias.map(tech => `
                <button class="btn btn-outline-secondary btn-sm" onclick="filtrarProjetos('${tech}')">
                    ${tech}
                </button>
            `).join('')}
        </div>
    `;
    
    // Inserir antes do grid de projetos
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.parentNode.insertBefore(filtrosContainer, projectsGrid);
    }
}

// Função para adicionar funcionalidade de busca
function adicionarBusca() {
    const buscaContainer = document.createElement('div');
    buscaContainer.className = 'busca-projetos mb-4';
    buscaContainer.innerHTML = `
        <div class="em1-2 text_paleta mb-2 centro">
            <strong>Buscar Projetos:</strong>
        </div>
        <div class="d-flex justify-content-center">
            <input type="text" id="busca-projetos" class="form-control" 
                   placeholder="Digite o nome do projeto ou tecnologia..." 
                   style="max-width: 400px;">
        </div>
    `;
    
    // Inserir antes dos filtros
    const filtros = document.querySelector('.filtros-tecnologia');
    if (filtros) {
        filtros.parentNode.insertBefore(buscaContainer, filtros);
    }
    
    // Adicionar funcionalidade de busca
    const inputBusca = document.getElementById('busca-projetos');
    if (inputBusca) {
        inputBusca.addEventListener('input', function() {
            const termo = this.value.toLowerCase();
            const projetos = document.querySelectorAll('.project-card');
            
            projetos.forEach(projeto => {
                const titulo = projeto.querySelector('.project-title').textContent.toLowerCase();
                const descricao = projeto.querySelector('.project-description').textContent.toLowerCase();
                const tecnologias = Array.from(projeto.querySelectorAll('.tech-badges img'))
                    .map(img => img.alt.toLowerCase()).join(' ');
                
                const contemTermo = titulo.includes(termo) || 
                                   descricao.includes(termo) || 
                                   tecnologias.includes(termo);
                
                if (contemTermo) {
                    projeto.style.display = 'block';
                    projeto.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    projeto.style.display = 'none';
                }
            });
            
            atualizarContadorProjetos();
        });
    }
}

// Função para adicionar contador de projetos
function adicionarContadorProjetos() {
    const contadorContainer = document.createElement('div');
    contadorContainer.className = 'contador-projetos text-center mb-3';
    contadorContainer.innerHTML = `
        <div class="em1-2 text_paleta">
            <strong>Projetos encontrados: <span id="contador-projetos">5</span></strong>
        </div>
    `;
    
    // Inserir antes do grid de projetos
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.parentNode.insertBefore(contadorContainer, projectsGrid);
    }
}

// Função para adicionar funcionalidade de ordenação
function adicionarOrdenacao() {
    const ordenacaoContainer = document.createElement('div');
    ordenacaoContainer.className = 'ordenacao-projetos mb-3';
    ordenacaoContainer.innerHTML = `
        <div class="d-flex justify-content-center gap-2">
            <span class="em1-2 text_paleta">
                <strong>Ordenar por:</strong>
            </span>
            <select id="ordenar-projetos" class="form-select form-select-sm" style="max-width: 200px;">
                <option value="nome">Nome (A-Z)</option>
                <option value="tecnologias">Mais Tecnologias</option>
                <option value="complexidade">Complexidade</option>
            </select>
        </div>
    `;
    
    // Inserir antes do contador
    const contador = document.querySelector('.contador-projetos');
    if (contador) {
        contador.parentNode.insertBefore(ordenacaoContainer, contador);
    }
    
    // Adicionar funcionalidade de ordenação
    const selectOrdenacao = document.getElementById('ordenar-projetos');
    if (selectOrdenacao) {
        selectOrdenacao.addEventListener('change', function() {
            ordenarProjetos(this.value);
        });
    }
}

// Função para ordenar projetos
function ordenarProjetos(criterio) {
    const projectsGrid = document.querySelector('.projects-grid');
    const projetos = Array.from(projectsGrid.children);
    
    projetos.sort((a, b) => {
        switch(criterio) {
            case 'nome':
                const tituloA = a.querySelector('.project-title').textContent;
                const tituloB = b.querySelector('.project-title').textContent;
                return tituloA.localeCompare(tituloB);
                
            case 'tecnologias':
                const techA = a.querySelectorAll('.tech-badges img').length;
                const techB = b.querySelectorAll('.tech-badges img').length;
                return techB - techA;
                
            case 'complexidade':
                // Lógica baseada no número de características
                const featuresA = a.querySelectorAll('.project-features li').length;
                const featuresB = b.querySelectorAll('.project-features li').length;
                return featuresB - featuresA;
                
            default:
                return 0;
        }
    });
    
    // Reordenar no DOM
    projetos.forEach(projeto => {
        projectsGrid.appendChild(projeto);
    });
}

// Função para adicionar efeitos de hover nos projetos
function adicionarEfeitosHover() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Função para adicionar funcionalidade de compartilhamento
function adicionarCompartilhamento() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const header = card.querySelector('.project-header');
        const btnCompartilhar = document.createElement('button');
        btnCompartilhar.className = 'btn btn-outline-info btn-sm position-absolute';
        btnCompartilhar.style.cssText = 'top: 1rem; right: 1rem; z-index: 10;';
        btnCompartilhar.innerHTML = '<i class="fas fa-share-alt"></i>';
        btnCompartilhar.onclick = function(e) {
            e.stopPropagation();
            compartilharProjeto(card);
        };
        
        header.style.position = 'relative';
        header.appendChild(btnCompartilhar);
    });
}

// Função para compartilhar projeto
function compartilharProjeto(card) {
    const titulo = card.querySelector('.project-title').textContent;
    const descricao = card.querySelector('.project-description').textContent;
    const tecnologias = Array.from(card.querySelectorAll('.tech-badges img'))
        .map(img => img.alt).join(', ');
    
    const texto = `${titulo}\n\n${descricao}\n\nTecnologias: ${tecnologias}\n\nPortfólio: ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: titulo,
            text: descricao,
            url: window.location.href
        });
    } else {
        // Fallback: copiar para clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(texto).then(() => {
                mostrarTooltip('Projeto copiado para compartilhamento!');
            });
        } else {
            mostrarTooltip('Use Ctrl+C para copiar as informações do projeto');
        }
    }
}

// Função para mostrar tooltip
function mostrarTooltip(mensagem) {
    const tooltip = document.createElement('div');
    tooltip.textContent = mensagem;
    tooltip.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        pointer-events: none;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(tooltip);
    
    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
        }
    }, 3000);
}

// Função para inicializar todas as funcionalidades
function inicializarPortfolio() {
    setTimeout(() => {
        animarElementosVisiveis();
        criarFiltrosTecnologia();
        adicionarBusca();
        adicionarContadorProjetos();
        adicionarOrdenacao();
        adicionarEfeitosHover();
        adicionarCompartilhamento();
    }, 500);
}

// Adicionar funcionalidade de atalhos de teclado
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        switch(event.key) {
            case 'f':
                event.preventDefault();
                const inputBusca = document.getElementById('busca-projetos');
                if (inputBusca) {
                    inputBusca.focus();
                }
                break;
            case 'r':
                event.preventDefault();
                filtrarProjetos('todos');
                const input = document.getElementById('busca-projetos');
                if (input) {
                    input.value = '';
                }
                break;
        }
    }
});

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    inicializarPortfolio();
    
    // Adicionar tooltips aos filtros
    const filtros = document.querySelectorAll('.filtros-tecnologia button');
    filtros.forEach(btn => {
        btn.title = `Filtrar projetos por ${btn.textContent}`;
    });
    
    // Adicionar tooltip ao campo de busca
    const inputBusca = document.getElementById('busca-projetos');
    if (inputBusca) {
        inputBusca.title = 'Pressione Ctrl+F para focar rapidamente';
    }
});

// Função para exportar portfólio (conceito)
function exportarPortfolio() {
    alert('Funcionalidade de exportação será implementada em breve!');
}

// Função para adicionar botão de exportação
function adicionarBotaoExportacao() {
    const header = document.querySelector('.portfolio-header');
    if (header && !document.querySelector('.btn-exportar-portfolio')) {
        const btnExportar = document.createElement('button');
        btnExportar.className = 'btn btn-outline-success btn-sm mt-3';
        btnExportar.innerHTML = '<i class="fas fa-download"></i> Exportar Portfólio';
        btnExportar.onclick = exportarPortfolio;
        header.appendChild(btnExportar);
    }
}

// Inicializar botão de exportação quando necessário
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.fa-download') || document.querySelector('.fas')) {
        adicionarBotaoExportacao();
    }
});
