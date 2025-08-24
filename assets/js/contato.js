// =========================
// CONTATO.JS - Funcionalidades do formulário de contato
// =========================

// Função para enviar o formulário de contato
function enviarFormulario(event) {
    event.preventDefault();
    
    // Obter os dados do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
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
    
    // Desabilitar botão e mostrar loading
    const btnEnviar = document.getElementById('btnEnviar');
    const textoOriginal = btnEnviar.innerHTML;
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Abrindo Gmail...';
    
    // Preparar dados para envio
    const dadosEmail = {
        to_email: 'leandro130333.dev@gmail.com',
        from_name: nome,
        from_email: email,
        subject: assunto,
        message: mensagem
    };
    
    // Aguardar um momento para mostrar o loading
    setTimeout(() => {
        // Abrir Gmail com mensagem pré-preenchida
        abrirGmailComMensagem(dadosEmail);
        
        // Resetar formulário e botão
        document.getElementById('contactForm').reset();
        btnEnviar.disabled = false;
        btnEnviar.innerHTML = textoOriginal;
        
        // Mostrar mensagem de sucesso
        mostrarStatus('Gmail aberto! Sua mensagem está pré-preenchida. Complete o envio no Gmail.', 'success');
    }, 1500);
}

// Função para abrir Gmail com mensagem pré-preenchida
function abrirGmailComMensagem(dados) {
    const email = 'leandro130333.dev@gmail.com';
    const assunto = encodeURIComponent(dados.subject);
    const corpo = encodeURIComponent(`Nome: ${dados.from_name}\nE-mail: ${dados.from_email}\n\nMensagem:\n${dados.message}`);
    
    // URL do Gmail com todos os campos preenchidos
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${assunto}&body=${corpo}`;
    
    // Abrir Gmail em nova aba
    window.open(gmailUrl, '_blank');
}

// Função para mostrar status do envio
function mostrarStatus(mensagem, tipo) {
    const statusDiv = document.getElementById('formStatus');
    
    // Remover classes anteriores
    statusDiv.className = 'mt-3';
    
    // Adicionar classes baseadas no tipo
    if (tipo === 'success') {
        statusDiv.classList.add('alert', 'alert-success');
    } else if (tipo === 'error') {
        statusDiv.classList.add('alert', 'alert-danger');
    } else if (tipo === 'info') {
        statusDiv.classList.add('alert', 'alert-info');
    }
    
    // Definir mensagem
    statusDiv.textContent = mensagem;
    
    // Auto-remover após 8 segundos para mensagens de sucesso
    if (tipo === 'success') {
        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.className = 'mt-3';
        }, 8000);
    } else {
        // Auto-remover após 5 segundos para outros tipos
        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.className = 'mt-3';
        }, 5000);
    }
}

// Função para abrir opções de e-mail (fallback)
function abrirOpcoesEmail() {
    const email = 'leandro130333.dev@gmail.com';
    const opcoes = [
        {
            titulo: 'Gmail',
            url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
            icone: 'fab fa-google'
        },
        {
            titulo: 'Outlook',
            url: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
            icone: 'fab fa-microsoft'
        },
        {
            titulo: 'Yahoo',
            url: `https://compose.mail.yahoo.com/?to=${email}`,
            icone: 'fab fa-yahoo'
        },
        {
            titulo: 'Copiar E-mail',
            acao: 'copiar',
            icone: 'fas fa-copy'
        }
    ];
    
    // Criar modal de opções
    const modal = document.createElement('div');
    modal.className = 'modal-opcoes-email';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h5>Escolha uma opção para enviar e-mail</h5>
                <button onclick="this.closest('.modal-opcoes-email').remove()" class="btn-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="opcoes-grid">
                    ${opcoes.map(opcao => `
                        <div class="opcao-item" onclick="${opcao.acao === 'copiar' ? 'copiarEmail()' : `window.open('${opcao.url}', '_blank')`}">
                            <i class="${opcao.icone}"></i>
                            <span>${opcao.titulo}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(modal);
    
    // Fechar ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Função para copiar e-mail
function copiarEmail() {
    const email = 'leandro130333.dev@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        // Feedback visual
        const opcao = event.target.closest('.opcao-item');
        const textoOriginal = opcao.querySelector('span').textContent;
        opcao.querySelector('span').textContent = 'Copiado!';
        opcao.style.background = '#28a745';
        
        setTimeout(() => {
            opcao.querySelector('span').textContent = textoOriginal;
            opcao.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar e-mail:', err);
        alert(`Erro ao copiar e-mail. Copie manualmente: ${email}`);
    });
}

// Função para abrir WhatsApp
function abrirWhatsApp() {
    const numero = '553183479067';
    const mensagem = 'Olá! Gostaria de conversar sobre oportunidades de trabalho.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Função para abrir LinkedIn
function abrirLinkedIn() {
    window.open('https://www.linkedin.com/in/leandroalencarclemente/', '_blank');
}

// Função para abrir GitHub
function abrirGitHub() {
    window.open('https://github.com/alencarleandro', '_blank');
}

// Função para abrir Instagram
function abrirInstagram() {
    window.open('https://www.instagram.com/leandro_a_clemente/', '_blank');
}


