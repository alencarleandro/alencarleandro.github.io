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

// Sistema de internacionalização
const translations = {
    pt: {
        title: "Site Pessoal",
        "nav.profile": "Perfil",
        "nav.portfolio": "Portfólio",
        "lang.pt": "PT",
        "lang.en": "EN",
        palette: "Paleta",
        profile: "Perfil",
        "about.title": "Sobre mim",
        "about.description": "Sou apaixonado por tecnologia, especialmente por programação e arquitetura de software. Em 2022, durante o curso Técnico em Eletrônica no SENAI Horto, percebi minha vocação para o desenvolvimento de software. Atualmente curso Engenharia de Software na PUC Minas (2024-2027) e busco aplicar meus conhecimentos em projetos desafiadores, contribuindo com soluções e crescimento profissional contínuo.",
        portfolio: "Portfólio",
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
        "skills.programming": "Linguagens de Programação:",
        "skills.frameworks": "Frameworks & Bibliotecas:",
        "skills.frontend": "Frontend:",
        "skills.database": "Banco de Dados:",
        "skills.cloud": "Cloud & DevOps:",
        "skills.tools": "Ferramentas de Desenvolvimento:",
        "skills.design": "Design & Multimídia:",
        "experience.title": "Experiência Profissional",
        "experience.erp2.title": "Desenvolvedor Fullstack - ERP V2",
        "experience.erp2.description": "Desenvolvimento de um sistema ERP modular para médias empresas, com foco em escalabilidade e aplicação dos princípios SOLID.",
        "experience.messenger.title": "Desenvolvedor Fullstack - Disparador de Mensagens",
        "experience.messenger.description": "Aplicação desktop para envio automatizado de mensagens para WhatsApp, Facebook, Instagram e e-mail com suporte a mídias.",
        "experience.erp1.title": "Desenvolvedor Fullstack - ERP V1",
        "experience.erp1.description": "Sistema de gestão para pequenas empresas com funcionalidades de relatórios, ordens de serviço, estoque e controle financeiro.",
        "experience.technologies": "Tecnologias:",
        "education.title": "Formação Acadêmica",
        "education.software.title": "Engenharia de Software",
        "education.electronics.title": "Técnico em Eletrônica",
        "footer.copyright": "© 2024 - All rights reserved - Leandro Alencar"
    },
    en: {
        title: "Personal Website",
        "nav.profile": "Profile",
        "nav.portfolio": "Portfolio",
        "lang.pt": "PT",
        "lang.en": "EN",
        palette: "Palette",
        profile: "Profile",
        "about.title": "About me",
        "about.description": "I am passionate about technology, especially programming and software architecture. In 2022, during the Electronics Technician course at SENAI Horto, I discovered my vocation for software development. I am currently studying Software Engineering at PUC Minas (2024-2027) and seek to apply my knowledge in challenging projects, contributing with solutions and continuous professional growth.",
        portfolio: "Portfolio",
        "projects.erp2.title": "ERP V2",
        "projects.erp2.description": "Modular ERP system for medium-sized companies, focusing on scalability and application of SOLID principles.",
        "projects.messenger.title": "Message Dispatcher",
        "projects.messenger.description": "Desktop application for automated message sending to WhatsApp, Facebook, Instagram and email with media support.",
        "projects.erp1.title": "ERP V1",
        "projects.erp1.description": "Management system for small companies with reporting, service orders, inventory and financial control functionalities.",
        "projects.giostri.title": "Giostri Constructions",
        "projects.giostri.description": "The Giostri Constructions project implements a digital platform to transform the management of Giostri Warehouse.",
        "projects.cinescore.title": "CineScore",
        "projects.cinescore.description": "This project presents the development of a web application designed to offer personalized movie and series recommendations, based on user interactions, such as likes given to content.",
        "skills.title": "Technical Skills",
        "skills.programming": "Programming Languages:",
        "skills.frameworks": "Frameworks & Libraries:",
        "skills.frontend": "Frontend:",
        "skills.database": "Database:",
        "skills.cloud": "Cloud & DevOps:",
        "skills.tools": "Development Tools:",
        "skills.design": "Design & Multimedia:",
        "experience.title": "Professional Experience",
        "experience.erp2.title": "Fullstack Developer - ERP V2",
        "experience.erp2.description": "Development of a modular ERP system for medium-sized companies, focusing on scalability and application of SOLID principles.",
        "experience.messenger.title": "Fullstack Developer - Message Dispatcher",
        "experience.messenger.description": "Desktop application for automated message sending to WhatsApp, Facebook, Instagram and email with media support.",
        "experience.erp1.title": "Fullstack Developer - ERP V1",
        "experience.erp1.description": "Management system for small companies with reporting, service orders, inventory and financial control functionalities.",
        "experience.technologies": "Technologies:",
        "education.title": "Academic Background",
        "education.software.title": "Software Engineering",
        "education.electronics.title": "Electronics Technician",
        "footer.copyright": "© 2024 - All rights reserved - Leandro Alencar"
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
    document.querySelectorAll('img[alt="Logo do projeto"]').forEach(img => {
        img.src = `./assets/img/${nomeArquivo}`;
    });
}

/**
 * Troca de paleta
 */

function preto() {

    paleta.forEach((p) =>
        p.style.backgroundColor = "#000000"
    );
    textPaleta.forEach((txt) =>
        txt.style.color = "#e6e6e6"
    );
    fontEsp.forEach((txt) =>
        txt.style.color = "rgba(255, 255, 255, 0.8)"
    );

    folha.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    seletorPaleta.style.backgroundColor = "rgba(255, 255, 255, 0.4)";

    eu.style.backgroundImage = `url(./assets/img/eu_preto.png)`;
    trocarIconeLegnu('LegnuIconPreto.png');

}

function azulMarinho() {

    paleta.forEach((p) =>
        p.style.backgroundColor = "#01355c"
    );
    textPaleta.forEach((txt) =>
        txt.style.color = "#ffffff"
    );
    fontEsp.forEach((txt) =>
        txt.style.color = "rgba(255, 255, 255, 1)"
    );

    seletorPaleta.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    folha.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

    eu.style.backgroundImage = `url(./assets/img/eu_azul.png)`;
    trocarIconeLegnu('LegnuIconAzul.png');

}

function beje() {

    paleta.forEach((p) =>
        p.style.backgroundColor = "#e7d6b9"
    );
    textPaleta.forEach((txt) =>
        txt.style.color = "#262626"
    );
    fontEsp.forEach((txt) =>
        txt.style.color = "rgba(0, 0, 0, 0.8)"
    );

    folha.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
    seletorPaleta.style.backgroundColor = "rgba(0, 0, 0, 0.3)"

    eu.style.backgroundImage = `url(./assets/img/eu_beje.png)`;
    trocarIconeLegnu('LegnuIconBeje.png');

}

function start() {
    preto();
    updateLanguage();
    updateHTML();
    
    // Atualizar ano no footer automaticamente
    const anoAtual = new Date().getFullYear();
    const footer = document.querySelector("footer strong");
    if (footer) {
        footer.innerHTML = footer.innerHTML.replace(/© \d{4}/, `© ${anoAtual}`);
    }
}




