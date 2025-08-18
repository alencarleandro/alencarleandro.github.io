const paletaPreta = document.querySelector("#paletaPreta");
const paletaAzul = document.querySelector("#paletaAzul");
const paletaBeje = document.querySelector("#paletaBeje");

const paleta = document.querySelectorAll(".paleta");
const eu = document.querySelector(".eu");
const textPaleta = document.querySelectorAll(".text_paleta");
const scroll = document.querySelector(".cartaoH");
const fontEsp = document.querySelectorAll(".fontEsp");
const folha = document.querySelector(".folha");
const seletorPaleta = document.querySelector(".seletorPaleta");
const foto = document.getElementById('fotoPerfil');

// Sistema de internacionalização
const translations = {
    pt: {
        title: "Site Pessoal",
        "nav.profile": "Perfil",
        "nav.portfolio": "Portfólio",
        "nav.contact": "Contato",
        "lang.pt": "PT",
        "lang.en": "EN",
        palette: "Paleta",
        profile: "Perfil",
        "profile.title": "Meu Perfil",
        "profile.personal": "Informações Pessoais",
        "profile.contacts": "Contatos",
        "about.title": "Sobre mim",
        "about.description": "Sou apaixonado por tecnologia, especialmente por programação e arquitetura de software. Em 2022, durante o curso Técnico em Eletrônica no SENAI Horto, percebi minha vocação para o desenvolvimento de software. Atualmente curso Engenharia de Software na PUC Minas (2024-2027) e busco aplicar meus conhecimentos em projetos desafiadores, contribuindo com soluções e crescimento profissional contínuo.",
        portfolio: "Portfólio",
        "portfolio.title": "Meu Portfólio",
        "portfolio.subtitle": "Projetos Desenvolvidos",
        "portfolio.description": "Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e abordagens de desenvolvimento. Cada projeto representa um desafio único e uma oportunidade de aprendizado.",
        "portfolio.features": "Características",
        "portfolio.features.modular": "Arquitetura modular",
        "portfolio.features.scalable": "Altamente escalável",
        "portfolio.features.solid": "Princípios SOLID",
        "portfolio.features.enterprise": "Focado em médias empresas",
        "portfolio.features.automation": "Automação completa",
        "portfolio.features.multiplatform": "Múltiplas plataformas",
        "portfolio.features.media": "Suporte a mídias",
        "portfolio.features.batch": "Envio em lote",
        "portfolio.features.reports": "Relatórios gerenciais",
        "portfolio.features.inventory": "Controle de estoque",
        "portfolio.features.financial": "Gestão financeira",
        "portfolio.features.service": "Ordens de serviço",
        "portfolio.features.web": "Aplicação web",
        "portfolio.features.management": "Gestão de depósito",
        "portfolio.features.modern": "Interface moderna",
        "portfolio.features.responsive": "Totalmente responsiva",
        "portfolio.features.recommendations": "Sistema de recomendações",
        "portfolio.features.personalization": "Personalização",
        "portfolio.features.interaction": "Interação do usuário",
        "portfolio.features.analytics": "Análise de preferências",
        "portfolio.technologies": "Tecnologias Utilizadas",
        "portfolio.stats.title": "Estatísticas dos Projetos",
        "portfolio.stats.projects": "Projetos",
        "portfolio.stats.erps": "Sistemas ERP",
        "portfolio.stats.web": "Aplicações Web",
        "portfolio.stats.technologies": "Tecnologias",
        "projects.erp2.title": "ERP V2",
        "projects.erp2.description": "Sistema ERP modular para médias empresas, com foco em escalabilidade e aplicação dos princípios SOLID.",
        "projects.messenger.title": "Disparador de Mensagens",
        "projects.messenger.description": "Aplicação desktop para envio automatizado de mensagens para WhatsApp, Facebook, Instagram e e-mail com suporte a mídias.",
        "projects.erp1.title": "ERP V1",
        "projects.erp1.description": "Sistema de gestão para pequenas empresas com funcionalidades de relatórios, ordens de serviço, estoque e controle financeiro.",
        "projects.giostri.title": "Giostri Construções",
        "projects.giostri.description": "O projeto Giostri Construções implementa uma plataforma digital para transformar a gestão do Depósito Giostri.",
        "projects.cinescore.title": "CineScore",
        "projects.cinescore.description": "Este projeto apresenta o desenvolvimento de uma aplicação web projetada para oferecer recomendações personalizadas de filmes e séries, baseada nas interações dos usuários, como os likes atribuídos aos conteúdos.",
        "skills.title": "Habilidades Técnicas",
        "skills.programming": "Linguagens de Programação",
        "skills.frameworks": "Frameworks & Bibliotecas",
        "skills.frontend": "Frontend",
        "skills.database": "Banco de Dados",
        "skills.cloud": "Cloud & DevOps",
        "skills.tools": "Ferramentas de Desenvolvimento",
        "skills.design": "Design & Multimídia",
        "experience.title": "Experiência Profissional",
        "experience.erp2.title": "Desenvolvedor Fullstack - ERP V2",
        "experience.erp2.description": "Desenvolvimento de um sistema ERP modular para médias empresas, com foco em escalabilidade e aplicação dos princípios SOLID.",
        "experience.messenger.title": "Desenvolvedor Fullstack - Disparador de Mensagens",
        "experience.messenger.description": "Aplicação desktop para envio automatizado de mensagens para WhatsApp, Facebook, Instagram e e-mail com suporte a mídias.",
        "experience.erp1.title": "Desenvolvedor Fullstack - ERP V1",
        "experience.erp1.description": "Sistema de gestão para pequenas empresas com funcionalidades de relatórios, ordens de serviço, estoque e controle financeiro.",
        "experience.technologies": "Tecnologias",
        "education.title": "Formação Acadêmica",
        "education.software.title": "Engenharia de Software",
        "education.electronics.title": "Técnico em Eletrônica",
        "footer.copyright": "© 2024 - All rights reserved - Leandro Alencar",
        // Traduções da página de contato
        "contact.title": "Entre em Contato",
        "contact.social.title": "Redes Sociais",
        "contact.social.email": "E-mail",
        "contact.social.whatsapp": "WhatsApp",
        "contact.social.linkedin": "LinkedIn",
        "contact.social.github": "GitHub",
        "contact.social.instagram": "Instagram",
        "contact.form.title": "Envie uma Mensagem",
        "contact.form.name": "Nome",
        "contact.form.email": "E-mail",
        "contact.form.subject": "Assunto",
        "contact.form.message": "Mensagem",
        "contact.form.send": "Enviar Mensagem",
        "contact.info.title": "Informações de Contato",
        "contact.info.location.title": "Localização",
        "contact.info.location.value": "Belo Horizonte, MG - Brasil",
        "contact.info.availability.title": "Disponibilidade",
        "contact.info.availability.value": "Segunda a Sexta, 9h às 18h",
        "contact.info.education.title": "Formação",
        "contact.info.education.value": "Engenharia de Software - PUC Minas"
    },
    en: {
        title: "Personal Website",
        "nav.profile": "Profile",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "lang.pt": "PT",
        "lang.en": "EN",
        palette: "Palette",
        profile: "Profile",
        "profile.title": "My Profile",
        "profile.personal": "Personal Information",
        "profile.contacts": "Contacts",
        "about.title": "About me",
        "about.description": "I am passionate about technology, especially programming and software architecture. In 2022, during the Electronics Technician course at SENAI Horto, I realized my vocation for software development. I am currently studying Software Engineering at PUC Minas (2024-2027) and seek to apply my knowledge in challenging projects, contributing with solutions and continuous professional growth.",
        portfolio: "Portfolio",
        "portfolio.title": "My Portfolio",
        "portfolio.subtitle": "Developed Projects",
        "portfolio.description": "Here are some of the projects I developed, demonstrating my skills in different technologies and development approaches. Each project represents a unique challenge and a learning opportunity.",
        "portfolio.features": "Features",
        "portfolio.features.modular": "Modular architecture",
        "portfolio.features.scalable": "Highly scalable",
        "portfolio.features.solid": "SOLID principles",
        "portfolio.features.enterprise": "Focused on medium companies",
        "portfolio.features.automation": "Complete automation",
        "portfolio.features.multiplatform": "Multiple platforms",
        "portfolio.features.media": "Media support",
        "portfolio.features.batch": "Batch sending",
        "portfolio.features.reports": "Management reports",
        "portfolio.features.inventory": "Inventory control",
        "portfolio.features.financial": "Financial management",
        "portfolio.features.service": "Service orders",
        "portfolio.features.web": "Web application",
        "portfolio.features.management": "Warehouse management",
        "portfolio.features.modern": "Modern interface",
        "portfolio.features.responsive": "Fully responsive",
        "portfolio.features.recommendations": "Recommendation system",
        "portfolio.features.personalization": "Personalization",
        "portfolio.features.interaction": "User interaction",
        "portfolio.features.analytics": "Preference analysis",
        "portfolio.technologies": "Technologies Used",
        "portfolio.stats.title": "Project Statistics",
        "portfolio.stats.projects": "Projects",
        "portfolio.stats.erps": "ERP Systems",
        "portfolio.stats.web": "Web Applications",
        "portfolio.stats.technologies": "Technologies",
        "projects.erp2.title": "ERP V2",
        "projects.erp2.description": "Modular ERP system for medium companies, focusing on scalability and application of SOLID principles.",
        "projects.messenger.title": "Message Dispatcher",
        "projects.messenger.description": "Desktop application for automated message sending to WhatsApp, Facebook, Instagram and email with media support.",
        "projects.erp1.title": "ERP V1",
        "projects.erp1.description": "Management system for small companies with reporting, service orders, inventory and financial control functionalities.",
        "projects.giostri.title": "Giostri Construções",
        "projects.giostri.description": "The Giostri Construções project implements a digital platform to transform the management of Depósito Giostri.",
        "projects.cinescore.title": "CineScore",
        "projects.cinescore.description": "This project presents the development of a web application designed to offer personalized recommendations for movies and series, based on user interactions, such as likes assigned to content.",
        "skills.title": "Technical Skills",
        "skills.programming": "Programming Languages",
        "skills.frameworks": "Frameworks & Libraries",
        "skills.frontend": "Frontend",
        "skills.database": "Database",
        "skills.cloud": "Cloud & DevOps",
        "skills.tools": "Development Tools",
        "skills.design": "Design & Multimedia",
        "experience.title": "Professional Experience",
        "experience.erp2.title": "Fullstack Developer - ERP V2",
        "experience.erp2.description": "Development of a modular ERP system for medium companies, focusing on scalability and application of SOLID principles.",
        "experience.messenger.title": "Fullstack Developer - Message Dispatcher",
        "experience.messenger.description": "Desktop application for automated message sending to WhatsApp, Facebook, Instagram and email with media support.",
        "experience.erp1.title": "Fullstack Developer - ERP V1",
        "experience.erp1.description": "Management system for small companies with reporting, service orders, inventory and financial control functionalities.",
        "experience.technologies": "Technologies",
        "education.title": "Academic Background",
        "education.software.title": "Software Engineering",
        "education.electronics.title": "Electronics Technician",
        "footer.copyright": "© 2024 - All rights reserved - Leandro Alencar",
        // Traduções da página de contato
        "contact.title": "Get in Touch",
        "contact.social.title": "Social Networks",
        "contact.social.email": "E-mail",
        "contact.social.whatsapp": "WhatsApp",
        "contact.social.linkedin": "LinkedIn",
        "contact.social.github": "GitHub",
        "contact.social.instagram": "Instagram",
        "contact.form.title": "Send a Message",
        "contact.form.name": "Name",
        "contact.form.email": "E-mail",
        "contact.form.subject": "Subject",
        "contact.form.message": "Message",
        "contact.form.send": "Send Message",
        "contact.info.title": "Contact Information",
        "contact.info.location.title": "Location",
        "contact.info.location.value": "Belo Horizonte, MG - Brazil",
        "contact.info.availability.title": "Availability",
        "contact.info.availability.value": "Monday to Friday, 9am to 6pm",
        "contact.info.education.title": "Education",
        "contact.info.education.value": "Software Engineering - PUC Minas"
    }
};

let currentLanguage = 'pt';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    updateLanguage();
    updateHTML();
}

function updateLanguage() {
    // Atualiza o atributo lang do HTML
    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'en';
    
    // Atualiza o título da página
    document.title = translations[currentLanguage].title;
}

function updateHTML() {
    // Atualiza todos os elementos com atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

function trocarIconeLegnu(nomeArquivo) {
    try {
        // Detecta se estamos na página principal ou em uma subpágina
        const isMainPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
        const basePath = isMainPage ? './assets/img/' : '../assets/img/';
        
        const logos = document.querySelectorAll('img[alt="Logo do projeto"]');
        console.log(`Encontrados ${logos.length} logos para trocar`);
        
        if (logos.length > 0) {
            logos.forEach((img, index) => {
                img.src = basePath + nomeArquivo;
                console.log(`Logo ${index + 1} trocado para: ${basePath + nomeArquivo}`);
            });
        } else {
            console.log('Nenhum logo encontrado para trocar');
        }
    } catch (error) {
        console.log('Erro ao trocar logos:', error);
    }
}

/**
 * Sistema de persistência de paleta
 */
function salvarPaletaSelecionada(paletaNome) {
    localStorage.setItem('paletaSelecionada', paletaNome);
}

function restaurarPaletaSelecionada() {
    const paletaSalva = localStorage.getItem('paletaSelecionada');
    console.log('Paleta salva encontrada:', paletaSalva);
    
    if (paletaSalva) {
        switch (paletaSalva) {
            case 'preto':
                console.log('Aplicando paleta preta');
                preto();
                break;
            case 'azul':
                console.log('Aplicando paleta azul');
                azulMarinho();
                break;
            case 'beje':
                console.log('Aplicando paleta beje');
                beje();
                break;
            default:
                console.log('Paleta desconhecida, aplicando padrão (preto)');
                preto();
                break;
        }
    } else {
        console.log('Nenhuma paleta salva encontrada, aplicando padrão (preto)');
        preto();
    }

    atualizarFotoPorPaleta();
}

/**
 * Troca de paleta
 */

function preto() {
    try {
        if (paleta && paleta.length > 0) {
    paleta.forEach((p) =>
        p.style.backgroundColor = "#000000"
    );
        }
        
        if (textPaleta && textPaleta.length > 0) {
    textPaleta.forEach((txt) =>
        txt.style.color = "#e6e6e6"
    );
        }
        
        if (fontEsp && fontEsp.length > 0) {
    fontEsp.forEach((txt) =>
        txt.style.color = "rgba(255, 255, 255, 0.8)"
    );
        }

        if (folha) {
    folha.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        }
        
        if (seletorPaleta) {
    seletorPaleta.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        }

        if (eu) {
    eu.style.backgroundImage = `url(./assets/img/eu_preto.png)`;
        }
        
        
        foto.src = '../assets/img/eu_preto.png';
  

        
    trocarIconeLegnu('LegnuIconPreto.png');

        // Salva a paleta selecionada
        salvarPaletaSelecionada('preto');
        
        // Aplica estilos específicos da paleta
        aplicarEstilosPaleta();
        
        console.log('Paleta preta aplicada com sucesso');
    } catch (error) {
        console.log('Erro ao aplicar paleta preta:', error);
    }
}

function azulMarinho() {
    try {
        if (paleta && paleta.length > 0) {
    paleta.forEach((p) =>
        p.style.backgroundColor = "#01355c"
    );
        }
        
        if (textPaleta && textPaleta.length > 0) {
    textPaleta.forEach((txt) =>
        txt.style.color = "#ffffff"
    );
        }
        
        if (fontEsp && fontEsp.length > 0) {
    fontEsp.forEach((txt) =>
        txt.style.color = "rgba(255, 255, 255, 1)"
    );
        }

        if (seletorPaleta) {
    seletorPaleta.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        }
        
        if (folha) {
    folha.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        }

        if (eu) {
    eu.style.backgroundImage = `url(./assets/img/eu_azul.png)`;
        }

        foto.src = '../assets/img/eu_azul.png';
        
    trocarIconeLegnu('LegnuIconAzul.png');

        // Salva a paleta selecionada
        salvarPaletaSelecionada('azul');
        
        // Aplica estilos específicos da paleta
        aplicarEstilosPaleta();
        
        console.log('Paleta azul aplicada com sucesso');
    } catch (error) {
        console.log('Erro ao aplicar paleta azul:', error);
    }
}

function beje() {
    try {
        if (paleta && paleta.length > 0) {
    paleta.forEach((p) =>
        p.style.backgroundColor = "#e7d6b9"
    );
        }
        
        if (textPaleta && textPaleta.length > 0) {
    textPaleta.forEach((txt) =>
        txt.style.color = "#262626"
    );
        }
        
        if (fontEsp && fontEsp.length > 0) {
    fontEsp.forEach((txt) =>
        txt.style.color = "rgba(0, 0, 0, 0.8)"
    );
        }

        if (folha) {
            folha.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        }

        if (seletorPaleta) {
            seletorPaleta.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        }

        if (eu) {
    eu.style.backgroundImage = `url(./assets/img/eu_beje.png)`;
        }
        
        
        foto.src = '../assets/img/eu_beje.png';
    

    trocarIconeLegnu('LegnuIconBeje.png');

        // Salva a paleta selecionada
        salvarPaletaSelecionada('beje');
        
        // Aplica estilos específicos da paleta
        aplicarEstilosPaleta();
        
        console.log('Paleta beje aplicada com sucesso');
    } catch (error) {
        console.log('Erro ao aplicar paleta beje:', error);
    }
}

/**
 * Função de inicialização que restaura a paleta salva
 */
function start() {
    console.log('Função start() chamada');
    
    // Aguarda o DOM estar completamente carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarAplicacao);
    } else {
        // Se já está carregado, aguarda um pouco para garantir que todos os elementos estejam prontos
        setTimeout(inicializarAplicacao, 100);
    }
}

function inicializarAplicacao() {
    console.log('Inicializando aplicação...');
    
    // Verifica se os elementos necessários existem
    if (!paleta || paleta.length === 0) {
        console.log('Elementos de paleta não encontrados, aguardando...');
        setTimeout(inicializarAplicacao, 200);
        return;
    }
    
    // Restaura a paleta selecionada anteriormente
    restaurarPaletaSelecionada();
    
    // Atualiza o idioma
    updateLanguage();
    updateHTML();
    
    // Aplica estilos específicos da paleta atual
    aplicarEstilosPaleta();
    
    console.log('Inicialização concluída');
}

/**
 * Aplica estilos específicos da paleta atual
 */
function aplicarEstilosPaleta() {
    try {
        const paletaSalva = localStorage.getItem('paletaSelecionada') || 'preto';
        console.log('Aplicando estilos para paleta:', paletaSalva);
        
        // Remove estilos anteriores de todas as paletas
        document.body.classList.remove('paleta-preta', 'paleta-azul', 'paleta-beje');
        
        // Adiciona classe da paleta atual
        document.body.classList.add(`paleta-${paletaSalva}`);
        
        // Aplica estilos específicos
        switch (paletaSalva) {
            case 'preto':
                aplicarEstilosPaletaPreta();
                break;
            case 'azul':
                aplicarEstilosPaletaAzul();
                break;
            case 'beje':
                aplicarEstilosPaletaBeje();
                break;
            default:
                console.log('Paleta desconhecida, aplicando estilos padrão');
                aplicarEstilosPaletaPreta();
                break;
        }
        
        console.log('Estilos da paleta aplicados com sucesso');
    } catch (error) {
        console.log('Erro ao aplicar estilos da paleta:', error);
    }
}

function atualizarFotoPorPaleta() {
    const body = document.body;
    const foto = document.getElementById('fotoPerfil');
    if (!foto) return;

    if (body.classList.contains('paleta-preta')) {
        foto.src = '../assets/img/eu_preto.png';
    } else if (body.classList.contains('paleta-azul')) {
        foto.src = '../assets/img/eu_azul.png';
    } else if (body.classList.contains('paleta-beje')) {
        foto.src = '../assets/img/eu_beje.png';
    } else {
        foto.src = '../assets/img/eu_preto.png';
    }
}

document.addEventListener('DOMContentLoaded', atualizarFotoPorPaleta);



