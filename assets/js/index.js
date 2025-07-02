const paletaPreta = document.querySelector("#paletaPreta");
const paletaAzul = document.querySelector("#paletaAzul");
const paletaBeje = document.querySelector("#paletaBeje");

const paleta = document.querySelectorAll(".paleta");
const eu = document.querySelector(".eu");
const instagram = document.querySelector(".instagram");
const linkedin = document.querySelector(".linkedin");
const textPaleta = document.querySelectorAll(".text_paleta");
const scroll = document.querySelector(".cartaoH");
const fontEsp = document.querySelectorAll(".fontEsp");
const folha = document.querySelector(".folha");
const seletorPaleta = document.querySelector(".seletorPaleta");

const txtNome = document.querySelector("#txtNome");
const txtDescricao = document.querySelector("#txtDescricao");
const txtLocation = document.querySelector("#txtLocation");
const linkSite = document.querySelector("#linkSite");
const linkGitHub = document.querySelector("#linkGitHub");
const repositorios = document.querySelector("#repositorios");

const linkInstagram = document.querySelector("#linkInstagram");
const linkLinkedIn = document.querySelector("#linkLinkedIn");

const cards_repos = document.querySelector("#cards_repos");

var dataUser;
var dataRepos;
var dataSocial;

var dataS_Repo;

/**
 * Instanciando dados pela -> GitHub - API 
 */

async function getApiGitHub_User() {
    fetch('https://api.github.com/users/alencarleandro')
        .then(async res => {
            if (!res.ok) {
                alert("API do GitHub exedeu sua cota de usos, aguarde 40 min para sua recarga.");
                throw new Error(res.status);
            }

            dataUser = await res.json();

            // Dados do perfil baseados no currículo
            txtNome.innerText = "Leandro Alencar Pereira Clemente";
//             txtDescricao.innerText = "Engenheiro de Software (em formação) apaixonado por tecnologia, especialmente por programação e arquitetura de software. Comecei a trabalhar com informática aos 12 anos e atualmente curso Engenharia de Software na PUC Minas (2024-2027). Busco aplicar meus conhecimentos em projetos desafiadores, contribuindo com soluções e crescimento profissional contínuo.";
            txtLocation.innerText = "Belo Horizonte, MG";
            linkSite.href = "https://alencarleandro.github.io";
            linkGitHub.href = dataUser.html_url;

            // Sempre usar a imagem local padrão azul
            eu.style.backgroundImage = `url(./assets/img/eu_azul.png)`;
        })
}

async function getApiGitHub_Social() {
    fetch('https://api.github.com/users/alencarleandro/social_accounts')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            dataSocial = await res.json();

            linkInstagram.href = dataSocial[0].url;
            linkLinkedIn.href = dataSocial[1].url;

        })
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
    instagram.src = "./assets/img/instagramBranco.png";
    linkedin.src = "./assets/img/linkedinBranco.png";

    eu.style.backgroundImage = `url(./assets/img/eu_preto.png)`;

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
    instagram.src = "./assets/img/instagramBranco.png";
    linkedin.src = "./assets/img/linkedinBranco.png";

    eu.style.backgroundImage = `url(./assets/img/eu_azul.png)`;

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
    instagram.src = "./assets/img/instagram.png";
    linkedin.src = "./assets/img/linkedin.png";

    eu.style.backgroundImage = `url(./assets/img/eu_beje.png)`;

}

function start() {
    preto();
    // Atualizar ano no footer automaticamente
    const anoAtual = new Date().getFullYear();
    const footer = document.querySelector("footer strong");
    if (footer) {
        footer.innerHTML = footer.innerHTML.replace(/© \d{4}/, `© ${anoAtual}`);
    }

    getApiGitHub_User();
    getApiGitHub_Social();
}

/**
 * Instanciar dados
 */

function trocar(paleta, url){
    sessionStorage.setItem("paleta", paleta);
    sessionStorage.setItem("url", url);
    window.location.href = "./views/repo.html";
}

/**
 * Elementos
 */

function pendurar_card_repo(img, titulo, descricao, favoritos, forks, paleta, url) {

    let card =
        `<div onclick="trocar('${paleta}', '${url}')" class="card p-4 m-3 centro cursorHand repo">
            <div class="${paleta} x100x300 radius_All_-0-" style="display: flex; align-items: center; justify-content: center;">
                <img class="h100 ra" src="${img}" alt="Card image cap">
            </div>

            <div class="card-body hM300 h200">
                <h5 class="card-title text-center ">${titulo}</h5>
                <p class="card-text text-center">${descricao}</p>

                <div class="flex centro gap-4 mt-2">
                    <div class="aCentro gap-2">
                        <img class="icon32  cursorHand" src="./assets/img/estrela.png" alt="Seguidor">
                        <Label class=" font_1-5em "><strong>${favoritos}</strong></Label>
                    </div>

                    <div class="aCentro gap-2">
                        <img class="icon32  cursorHand" src="./assets/img/fork.png" alt="Seguidor">
                        <Label class=" font_1-5em "><strong>${forks}</strong></Label>
                    </div>
                </div>
            </div>
        </div>`;

    const x = document.createElement('div');
    x.innerHTML = card;
    cards_repos.appendChild(x);
}




