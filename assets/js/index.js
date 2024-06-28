const paletaPreta = document.querySelector("#paletaPreta");
const paletaAzul = document.querySelector("#paletaAzul");
const paletaBeje = document.querySelector("#paletaBeje");

const paleta = document.querySelectorAll(".paleta");
const eu = document.querySelector(".eu");
const instagram = document.querySelector(".instagram");
const linkedin = document.querySelector(".linkedin");
const seguidor = document.querySelector(".seguidor");
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
const txtNumeroSeguidores = document.querySelector("#txtNumeroSeguidores");
const repositorios = document.querySelector("#repositorios");

const linkInstagram = document.querySelector("#linkInstagram");
const linkLinkedIn = document.querySelector("#linkLinkedIn");

const cards_repos = document.querySelector("#cards_repos");

const itensCarrosel = document.querySelector("#itensCarrosel");
const contadorCarrosel = document.querySelector("#contadorCarrosel");

const colegas = document.querySelector("#colegas");

var dataUser;
var dataRepos;
var dataSocial;

var dataS_Fotos;
var dataS_Repo;
var dataS_Clg;

/**
 * Instanciando dados pela -> JsonServer - Vercel 
 */

async function getJsonServer_Fotos() {
    fetch('https://site-pessoal-servidor.vercel.app/minhasFotos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            dataS_Fotos = await res.json();

        })
}

async function getJsonServer_Repositorios() {
    fetch('https://site-pessoal-servidor.vercel.app/repositorios')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();

            for (i = 0; i < data.length; i++) {

                if (!data[i].link == "") {
                    for (j = 0; j < x.length; j++) {
                        if (data[i].link == x[j].html_url) {
                            pendurar_card_repo(data[i].foto, data[i].titulo, data[i].descricao, x[j].stargazers_count, x[j].watchers_count, paleta)
                        }
                    }
                } else {
                    pendurar_card_repo(data[i].foto, data[i].titulo, data[i].descricao, "0", "0", paleta)
                }

            }

            dataS_Repo = data;

        })
}

async function getJsonServer_Recomendacoes() {
    fetch('https://site-pessoal-servidor.vercel.app/recomendacoes')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();

            for (i = 0; i < data.length; i++) {

                if (i == 0) {
                    pendurar_card_reco(data[i].imagem, data[i].link, i, "active")
                } else {
                    pendurar_card_reco(data[i].imagem, data[i].link, i, "estado")
                }

            }

        })
}

async function getJsonServer_Colegas() {
    fetch('https://site-pessoal-servidor.vercel.app/colegas')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();

            for (i = 0; i < data.length; i++) {
                pendurar_card_colega(data[i].foto, data[i].link, data[i].nome, "text_paleta_02");

            }

            dataS_Clg = data;

        })
}

/**
 * Instanciando dados pela -> GitHub - API 
 */

async function getApiGitHub_User() {
    fetch('https://api.github.com/users/alencarleandro')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            dataUser = await res.json();

            txtNome.innerText = dataUser.name;
            txtDescricao.innerText = dataUser.bio;
            txtLocation.innerText += " " + dataUser.location;
            linkSite.href = dataUser.blog;
            linkGitHub.href = dataUser.html_url;
            txtNumeroSeguidores.innerText = dataUser.followers

            eu.style.backgroundImage = `url(${dataUser.avatar_url})`;
        })
}

async function getApiGitHub_Repos() {
    fetch('https://api.github.com/users/alencarleandro/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            var git = await res.json();

            fetch('https://site-pessoal-servidor.vercel.app/repositorios')
                .then(async res2 => {
                    if (!res2.ok) {
                        throw new Error(res2.status);
                    }

                    let json = await res2.json();

                    for (i = 0; i < json.length; i++) {

                        if (!json[i].link == "") {
                            for (j = 0; j < git.length; j++) {
                                if (json[i].link == git[j].html_url) {
                                    pendurar_card_repo(json[i].foto, json[i].titulo, json[i].descricao, git[j].stargazers_count, git[j].watchers_count, "color_paleta_02")
                                }
                            }
                        } else {
                            pendurar_card_repo(json[i].foto, json[i].titulo, json[i].descricao, "0", "0", "color_paleta_02")
                        }

                    }

                    dataS_Repo = json;

                })

            dataRepos = git;
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

    instanciarColegas("text_paleta_02");

    folha.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    seletorPaleta.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    instagram.src = "./assets/img/instagramBranco.png";
    linkedin.src = "./assets/img/linkedinBranco.png";
    seguidor.src = "./assets/img/seguidor_branco.png";

    eu.style.backgroundImage = `url(${dataS_Fotos[0].foto})`;

    instanciarRepositorios("color_paleta_01");
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
    seguidor.src = "./assets/img/seguidor_branco.png";

    instanciarColegas("text_paleta_02");

    instanciarRepositorios("color_paleta_02");

    eu.style.backgroundImage = `url(${dataUser.avatar_url})`;

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
    seguidor.src = "./assets/img/seguidor.png";

    eu.style.backgroundImage = `url(${dataS_Fotos[1].foto})`;

    instanciarColegas("text_paleta_01");

    instanciarRepositorios("color_paleta_03");
}

function start() {

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
    seguidor.src = "./assets/img/seguidor_branco.png";

    getApiGitHub_User();
    getApiGitHub_Social();
    getApiGitHub_Repos()

    getJsonServer_Fotos();
    getJsonServer_Recomendacoes();
    getJsonServer_Colegas();
}

/**
 * Instanciar dados
 */

function instanciarRepositorios(paleta) {

    cards_repos.innerHTML = "";

    for (i = 0; i < dataS_Repo.length; i++) {

        if (!dataS_Repo[i].link == "") {
            for (j = 0; j < dataRepos.length; j++) {
                if (dataS_Repo[i].link == dataRepos[j].html_url) {
                    pendurar_card_repo(dataS_Repo[i].foto, dataS_Repo[i].titulo, dataS_Repo[i].descricao, dataRepos[j].stargazers_count, dataRepos[j].watchers_count, paleta)
                }
            }
        } else {
            pendurar_card_repo(dataS_Repo[i].foto, dataS_Repo[i].titulo, dataS_Repo[i].descricao, "0", "0", paleta)
        }

    }

}



function instanciarColegas(paleta) {

    colegas.innerHTML = "";

    for (i = 0; i < dataS_Clg.length; i++) {
        pendurar_card_colega(dataS_Clg[i].foto, dataS_Clg[i].link, dataS_Clg[i].nome, paleta);

    }

}

/**
 * Elementos
 */

function pendurar_card_repo(img, titulo, descricao, favoritos, forks, paleta) {

    let card =
        `<div class="card p-4 m-3 centro cursorHand repo">
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

function pendurar_card_reco(img, link, n, estado) {

    let card =
        `<div class="carousel-item ${estado}">
            <a href="${link}">
                <img class="d-block w-100" src="${img}">
            </a>
            <div class="carousel-caption d-none d-md-block"></div>
         </div>`;

    const x = document.createElement('div');
    x.innerHTML = card;
    itensCarrosel.appendChild(x);

    let card2 =
        `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${n}"
                                class="${estado}" aria-current="true"></button>`;

    const y = document.createElement('div');
    y.innerHTML = card2;
    contadorCarrosel.appendChild(y);
}

function pendurar_card_colega(img, link, nome, paleta) {

    let card =
        `<div class="centro ">
            <a class="textUnd" href="${link}">
                <span class="textoNome textUnd">
                    <img class="rounded-circle colegasTrabalho textUnd" src="${img}" alt="${nome}, foto perfil.">
                    <div class="mt-3 textUnd ${paleta}"><strong>${nome}</strong></div>
                </span>
            </a>
        </div>`;

    const x = document.createElement('div');
    x.innerHTML = card;
    colegas.appendChild(x);
}
