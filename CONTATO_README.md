# 📧 Página de Contato - Leandro Alencar

## 🚀 Funcionalidades Implementadas

### 1. **Ícones de Redes Sociais Clicáveis**
- **E-mail**: Abre o cliente de e-mail padrão com assunto e corpo pré-preenchidos
- **WhatsApp**: Abre o WhatsApp Web/App com mensagem pré-formatada
- **LinkedIn**: Redireciona para o perfil do LinkedIn
- **GitHub**: Redireciona para o perfil do GitHub
- **Instagram**: Redireciona para o perfil do Instagram

### 2. **Formulário de Contato Funcional**
- **Campos obrigatórios**: Nome, E-mail, Assunto, Mensagem
- **Validação em tempo real**: Verifica campos conforme o usuário digita
- **Feedback visual**: Mostra status de envio (sucesso/erro)
- **Responsivo**: Adapta-se a diferentes tamanhos de tela

### 3. **Informações de Contato Adicionais**
- **Localização**: Belo Horizonte, MG - Brasil
- **Disponibilidade**: Segunda a Sexta, 9h às 18h
- **Formação**: Engenharia de Software - PUC Minas
- **Funcionalidade**: Clique para copiar informações

## 🛠️ Como Configurar

### 1. **Personalizar Informações de Contato**
Edite o arquivo `assets/js/contato.js` e atualize:

```javascript
// E-mail pessoal
const email = 'leandro130333.dev@gmail.com';

// WhatsApp (formato: código do país + DDD + número)
const telefone = '553183479067'; // +55 31 8347-9067

// LinkedIn
const linkedinProfile = 'https://www.linkedin.com/in/leandroalencarclemente/';

// Instagram
const instagramProfile = 'https://www.instagram.com/leandro_a_clemente/';
```

### 2. **Integrar com Serviços de E-mail Reais**
Substitua a simulação de envio por um serviço real:

#### **Opção A: EmailJS**
```javascript
// Instalar: npm install emailjs-com
import emailjs from 'emailjs-com';

function enviarEmail(event) {
    event.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_USER_ID')
        .then((result) => {
            mostrarStatus('Mensagem enviada com sucesso!', 'success');
        }, (error) => {
            mostrarStatus('Erro ao enviar mensagem.', 'error');
        });
}
```

#### **Opção B: Formspree**
```html
<form action="https://formspree.io/f/seu-form-id" method="POST">
    <!-- campos do formulário -->
</form>
```

#### **Opção C: Netlify Forms**
```html
<form name="contact" netlify>
    <!-- campos do formulário -->
</form>
```

### 3. **Personalizar Cores e Estilos**
Edite o arquivo `assets/css/contato.css` para:
- Alterar cores dos ícones
- Modificar animações
- Ajustar layout responsivo

## 📱 Responsividade

A página é totalmente responsiva e se adapta a:
- **Desktop**: Layout em duas colunas (redes sociais + formulário)
- **Tablet**: Layout em coluna única com divisor horizontal
- **Mobile**: Layout otimizado para telas pequenas

## 🌐 Internacionalização

A página suporta **português** e **inglês** automaticamente:
- Botão de idioma no header
- Todas as traduções já implementadas
- Persistência do idioma selecionado

## ✨ Recursos Extras

### **Animações**
- Fade-in suave dos elementos
- Hover effects nos ícones
- Transições suaves nos botões

### **Validação Avançada**
- Validação de e-mail em tempo real
- Verificação de campos obrigatórios
- Feedback visual imediato

### **Funcionalidades de UX**
- Atalho de teclado: `Ctrl + Enter` para enviar
- Tooltips informativos
- Status de envio com auto-remoção
- Scroll automático para mensagens de status

## 🔧 Estrutura de Arquivos

```
views/
├── contato.html          # Página de contato
assets/
├── css/
│   └── contato.css      # Estilos específicos
├── js/
│   └── contato.js       # Funcionalidades JavaScript
└── js/
    └── index.js         # Sistema de tradução
```

## 🚀 Como Usar

1. **Acesse**: `./views/contato.html`
2. **Clique nos ícones** para abrir redes sociais
3. **Preencha o formulário** e envie mensagens
4. **Use o botão de idioma** para alternar entre PT/EN

## 📞 Suporte

Para dúvidas ou sugestões sobre a página de contato:
- Abra uma issue no repositório
- Entre em contato via LinkedIn ou e-mail
- Consulte a documentação do projeto principal

---

**Desenvolvido com ❤️ por Leandro Alencar**
