// Funcionalidades específicas da página de contato

// Funções para abrir redes sociais
function abrirEmail() {
    const email = 'leandro130333.dev@gmail.com'; // E-mail real
    const assunto = 'Contato via Site Pessoal';
    const body = 'Olá Leandro,\n\nGostaria de entrar em contato contigo.\n\nAtenciosamente,';
    
    // Estratégia 1: Tentar mailto: com window.open
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;
    
    try {
        // Primeira tentativa: window.open
        const emailWindow = window.open(mailtoLink, '_blank');
        
        // Verificar se a janela foi aberta
        if (emailWindow && !emailWindow.closed) {
            // Sucesso! E-mail foi aberto
            return;
        }
        
        // Estratégia 2: Tentar com location.href
        setTimeout(() => {
            try {
                window.location.href = mailtoLink;
            } catch (e) {
                console.log('location.href falhou, tentando próxima estratégia...');
            }
        }, 500);
        
        // Estratégia 3: Tentar com window.location.assign
        setTimeout(() => {
            try {
                window.location.assign(mailtoLink);
            } catch (e) {
                console.log('location.assign falhou, mostrando opções alternativas...');
            }
        }, 1000);
        
        // Estratégia 4: Se nada funcionar, mostrar opções alternativas
        setTimeout(() => {
            mostrarOpcoesEmail(email, assunto, body);
        }, 2000);
        
    } catch (error) {
        console.error('Erro ao tentar abrir e-mail:', error);
        // Se houver erro, mostrar opções alternativas imediatamente
        mostrarOpcoesEmail(email, assunto, body);
    }
}

// Função para mostrar opções alternativas de e-mail
function mostrarOpcoesEmail(email, assunto, body) {
    // Remover opções anteriores se existirem
    const opcoesAnteriores = document.querySelector('.opcoes-email');
    if (opcoesAnteriores) {
        opcoesAnteriores.remove();
    }
    
    const opcoesDiv = document.createElement('div');
    opcoesDiv.className = 'opcoes-email mt-3 p-3 rounded';
    opcoesDiv.innerHTML = `
        <h6 class="mb-2">📧 E-mail não abriu automaticamente?</h6>
        <p class="mb-3">Use uma das opções abaixo para entrar em contato:</p>
        
        <div class="mb-3">
            <strong>📋 Informações para copiar:</strong>
            <div class="mt-2">
                <strong>Para:</strong> <span class="text-primary">${email}</span>
                <button class="btn btn-sm btn-outline-primary ms-2" onclick="copiarTexto('${email}')">
                    <i class="fas fa-copy"></i> Copiar
                </button>
            </div>
            <div class="mt-2">
                <strong>Assunto:</strong> <span class="text-primary">${assunto}</span>
                <button class="btn btn-sm btn-outline-primary ms-2" onclick="copiarTexto('${assunto}')">
                    <i class="fas fa-copy"></i> Copiar
                </button>
            </div>
        </div>
        
        <div class="mb-3">
            <strong>🚀 Abrir diretamente em:</strong>
            <div class="d-flex gap-2 flex-wrap mt-2">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}" 
                   target="_blank" class="btn btn-primary btn-sm">
                    <i class="fab fa-google"></i> Gmail
                </a>
                <a href="https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}" 
                   target="_blank" class="btn btn-primary btn-sm">
                    <i class="fab fa-microsoft"></i> Outlook
                </a>
                <a href="https://mail.yahoo.com/compose?to=${email}&subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}" 
                   target="_blank" class="btn btn-primary btn-sm">
                    <i class="fab fa-yahoo"></i> Yahoo
                </a>
            </div>
        </div>
        
        <div class="text-center">
            <button class="btn btn-outline-secondary btn-sm" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i> Fechar
            </button>
        </div>
    `;
    
    // Inserir após o formulário
    const form = document.getElementById('contactForm');
    if (form) {
        form.parentNode.insertBefore(opcoesDiv, form.nextSibling);
        
        // Scroll para as opções
        opcoesDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Auto-remover após 1 minuto
    setTimeout(() => {
        if (opcoesDiv.parentNode) {
            opcoesDiv.remove();
        }
    }, 60000);
}

function abrirWhatsApp() {
    const telefone = '553183479067'; // WhatsApp real: +55 31 8347-9067
    const mensagem = 'Olá Leandro! Gostaria de conversar sobre oportunidades de trabalho.';
    
    const whatsappLink = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappLink, '_blank');
}

function abrirLinkedIn() {
    const linkedinProfile = 'https://www.linkedin.com/in/leandroalencarclemente/'; // LinkedIn real
    window.open(linkedinProfile, '_blank');
}

function abrirGitHub() {
    const githubProfile = 'https://github.com/alencarleandro';
    window.open(githubProfile, '_blank');
}

function abrirInstagram() {
    const instagramProfile = 'https://www.instagram.com/leandro_a_clemente/'; // Instagram real
    window.open(instagramProfile, '_blank');
}

// Função para enviar e-mail via formulário
function enviarEmail(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const statusDiv = document.getElementById('formStatus');
    
    // Obter dados do formulário
    const nome = formData.get('nome');
    const email = formData.get('email');
    const assunto = formData.get('assunto');
    const mensagem = formData.get('mensagem');
    
    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
        mostrarStatus('Por favor, preencha todos os campos.', 'error');
        return;
    }
    
    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarStatus('Por favor, insira um e-mail válido.', 'error');
        return;
    }
    
    // Simular envio (em produção, você usaria um serviço real)
    mostrarStatus('Enviando mensagem...', 'info');
    
    // Simular delay de envio
    setTimeout(() => {
        // Aqui você pode integrar com serviços como:
        // - EmailJS
        // - Formspree
        // - Netlify Forms
        // - Seu próprio backend
        
        // Por enquanto, vamos simular um envio bem-sucedido
        const sucesso = Math.random() > 0.1; // 90% de chance de sucesso para demonstração
        
        if (sucesso) {
            mostrarStatus('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            form.reset();
        } else {
            mostrarStatus('Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.', 'error');
        }
    }, 2000);
}

// Função para mostrar status do formulário
function mostrarStatus(mensagem, tipo) {
    const statusDiv = document.getElementById('formStatus');
    
    // Remover classes anteriores
    statusDiv.className = '';
    
    // Adicionar classes base e específicas
    statusDiv.className = `mt-3 ${tipo}`;
    statusDiv.textContent = mensagem;
    
    // Scroll para o status
    statusDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Auto-remover mensagens de sucesso após 5 segundos
    if (tipo === 'success') {
        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.className = 'mt-3';
        }, 5000);
    }
}

// Função para validar formulário em tempo real
function validarCampo(campo) {
    const valor = campo.value.trim();
    const campoId = campo.id;
    
    // Remover classes de erro anteriores
    campo.classList.remove('is-invalid');
    
    // Validações específicas
    switch (campoId) {
        case 'nome':
            if (valor.length < 2) {
                campo.classList.add('is-invalid');
                return false;
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(valor)) {
                campo.classList.add('is-invalid');
                return false;
            }
            break;
            
        case 'assunto':
            if (valor.length < 5) {
                campo.classList.add('is-invalid');
                return false;
            }
            break;
            
        case 'mensagem':
            if (valor.length < 10) {
                campo.classList.add('is-invalid');
                return false;
            }
            break;
    }
    
    return true;
}

// Adicionar validação em tempo real aos campos
document.addEventListener('DOMContentLoaded', function() {
    const campos = document.querySelectorAll('#contactForm input, #contactForm textarea');
    
    campos.forEach(campo => {
        campo.addEventListener('blur', () => validarCampo(campo));
        campo.addEventListener('input', () => {
            if (campo.classList.contains('is-invalid')) {
                validarCampo(campo);
            }
        });
    });
});

// Função para copiar informações de contato
function copiarTexto(texto) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(texto).then(() => {
            // Mostrar feedback visual
            mostrarTooltip('Copiado!');
        }).catch(err => {
            console.error('Erro ao copiar:', err);
        });
    } else {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = texto;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        mostrarTooltip('Copiado!');
    }
}

// Função para mostrar tooltip
function mostrarTooltip(mensagem) {
    // Criar tooltip temporário
    const tooltip = document.createElement('div');
    tooltip.textContent = mensagem;
    tooltip.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
        pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    
    // Remover após 2 segundos
    setTimeout(() => {
        document.body.removeChild(tooltip);
    }, 2000);
}

// Adicionar funcionalidade de copiar ao clicar nos ícones de informação
document.addEventListener('DOMContentLoaded', function() {
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        item.addEventListener('click', function() {
            const texto = this.querySelector('p').textContent;
            copiarTexto(texto);
        });
        
        // Adicionar cursor pointer
        item.style.cursor = 'pointer';
        
        // Adicionar tooltip visual
        item.title = 'Clique para copiar';
    });
});

// Função para animar elementos quando entram na viewport
function animarElementosVisiveis() {
    const elementos = document.querySelectorAll('.icone-item, .info-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar animações quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    animarElementosVisiveis();
});

// Função para alternar tema escuro/claro (opcional)
function alternarTema() {
    document.body.classList.toggle('tema-claro');
}

// Adicionar atalho de teclado para enviar formulário (Ctrl+Enter)
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Enter') {
        const form = document.getElementById('contactForm');
        if (form) {
            enviarEmail(new Event('submit'));
        }
    }
});
