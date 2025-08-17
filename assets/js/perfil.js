// Funcionalidades específicas da página de perfil

// Função para animar elementos quando entram na viewport
function animarElementosVisiveis() {
    const elementos = document.querySelectorAll('.skill-category, .exp-item, .formacao-item');
    
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

// Função para destacar seção ativa no scroll
function destacarSecaoAtiva() {
    const secoes = document.querySelectorAll('.habilidades-section, .experiencia-formacao');
    const navItems = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remover destaque de todos os itens
                navItems.forEach(item => item.classList.remove('active'));
                
                // Destacar item correspondente
                const secaoId = entry.target.className;
                if (secaoId.includes('habilidades')) {
                    navItems[0].classList.add('active');
                } else if (secaoId.includes('experiencia')) {
                    navItems[1].classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    secoes.forEach(secao => observer.observe(secao));
}

// Função para copiar informações de contato
function copiarContato(tipo) {
    let texto = '';
    
    switch(tipo) {
        case 'github':
            texto = 'https://github.com/alencarleandro';
            break;
        case 'linkedin':
            texto = 'https://www.linkedin.com/in/leandroalencarclemente/';
            break;
        case 'email':
            texto = 'leandro130333.dev@gmail.com';
            break;
    }
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(texto).then(() => {
            mostrarTooltip('Copiado!');
        }).catch(err => {
            console.error('Erro ao copiar:', err);
            fallbackCopyTextToClipboard(texto);
        });
    } else {
        fallbackCopyTextToClipboard(texto);
    }
}

// Fallback para navegadores mais antigos
function fallbackCopyTextToClipboard(texto) {
    const textArea = document.createElement('textarea');
    textArea.value = texto;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        mostrarTooltip('Copiado!');
    } catch (err) {
        console.error('Erro ao copiar:', err);
        mostrarTooltip('Erro ao copiar');
    }
    
    document.body.removeChild(textArea);
}

// Função para mostrar tooltip
function mostrarTooltip(mensagem) {
    // Remover tooltips anteriores
    const tooltipsExistentes = document.querySelectorAll('.tooltip-custom');
    tooltipsExistentes.forEach(tooltip => tooltip.remove());
    
    // Criar tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-custom';
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
        animation: tooltipFadeIn 0.3s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    // Remover após 2 segundos
    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.style.animation = 'tooltipFadeOut 0.3s ease';
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 300);
        }
    }, 2000);
}

// Adicionar estilos CSS para tooltip
const tooltipStyles = document.createElement('style');
tooltipStyles.textContent = `
    @keyframes tooltipFadeIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes tooltipFadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(tooltipStyles);

// Função para adicionar interatividade aos itens de contato
function adicionarInteratividadeContatos() {
    const contatoItems = document.querySelectorAll('.contato-item');
    
    contatoItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.style.transition = 'all 0.3s ease';
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.color = '#4dabf7';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.color = '';
        });
        
        item.addEventListener('click', function() {
            const link = this.querySelector('a');
            if (link) {
                window.open(link.href, '_blank');
            }
        });
    });
}

// Função para adicionar efeitos de hover nas habilidades
function adicionarEfeitosHabilidades() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.borderColor = 'rgba(77, 171, 247, 0.5)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.borderColor = '';
        });
    });
}

// Função para inicializar todas as funcionalidades
function inicializarPerfil() {
    // Aguardar um pouco para garantir que o DOM esteja carregado
    setTimeout(() => {
        animarElementosVisiveis();
        destacarSecaoAtiva();
        adicionarInteratividadeContatos();
        adicionarEfeitosHabilidades();
    }, 500);
}

// Adicionar funcionalidade de copiar ao clicar nos itens de contato
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar tooltip aos itens de contato
    const contatoItems = document.querySelectorAll('.contato-item');
    contatoItems.forEach(item => {
        item.title = 'Clique para abrir';
    });
    
    // Inicializar funcionalidades
    inicializarPerfil();
});

// Adicionar atalho de teclado para navegação (Ctrl + 1, Ctrl + 2)
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        switch(event.key) {
            case '1':
                event.preventDefault();
                document.querySelector('.habilidades-section').scrollIntoView({ behavior: 'smooth' });
                break;
            case '2':
                event.preventDefault();
                document.querySelector('.experiencia-formacao').scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
});

// Função para mostrar/ocultar seções (opcional)
function alternarSecao(secaoId) {
    const secao = document.getElementById(secaoId);
    if (secao) {
        secao.style.display = secao.style.display === 'none' ? 'block' : 'none';
    }
}

// Função para exportar perfil como PDF (conceito)
function exportarPerfil() {
    // Esta é uma funcionalidade conceitual
    // Em implementação real, você usaria bibliotecas como jsPDF
    alert('Funcionalidade de exportação será implementada em breve!');
}

// Adicionar botão de exportação se necessário
function adicionarBotaoExportacao() {
    const header = document.querySelector('.perfil-header');
    if (header && !document.querySelector('.btn-exportar')) {
        const btnExportar = document.createElement('button');
        btnExportar.className = 'btn btn-outline-primary btn-sm mt-3';
        btnExportar.innerHTML = '<i class="fas fa-download"></i> Exportar Perfil';
        btnExportar.onclick = exportarPerfil;
        header.appendChild(btnExportar);
    }
}

// Inicializar botão de exportação quando necessário
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar botão de exportação se Font Awesome estiver disponível
    if (document.querySelector('.fa-download') || document.querySelector('.fas')) {
        adicionarBotaoExportacao();
    }
});
