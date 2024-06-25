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

/**
 * Instanciando dados pela -> GitHub - API 
 */

function getApiGitHub_User() {
    fetch('https://api.github.com/users/alencarleandro')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            txtNome.innerText = data.name;
            txtDescricao.innerText = data.bio;
            txtLocation.innerText += " " + data.location;
            linkSite.href = data.blog;
            linkGitHub.href = data.html_url;
            txtNumeroSeguidores.innerText = data.followers
        })
}

function getApiGitHub_Repos() {
    fetch('https://api.github.com/users/alencarleandro/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
        })
}

function getApiGitHub_Social() {
    fetch('https://api.github.com/users/alencarleandro/social_accounts')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            linkInstagram.href = data[0].url;
            linkLinkedIn.href = data[1].url;
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
    folha.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
    seletorPaleta.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
    eu.style.backgroundImage = "url(\"./assets/img/eu5.jpeg\")";
    instagram.src = "./assets/img/instagramBranco.png";
    linkedin.src = "./assets/img/linkedinBranco.png";
    seguidor.src = "./assets/img/seguidor_branco.png";

    pendurar_card_repo("./assets/img/LogoVazia.png","Legnu","teste","1","2","color_paleta_01");
}

function azulMarinho(){
    paleta.forEach((p) =>
        p.style.backgroundColor = "#01355c"
    );
    textPaleta.forEach((txt) =>
        txt.style.color = "#ffffff"
    );
    fontEsp.forEach((txt) =>
        txt.style.color = "rgba(255, 255, 255, 1)"
    );
    seletorPaleta.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    folha.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
    eu.style.backgroundImage = "url(\"./assets/img/eu2.png\")";
    instagram.src = "./assets/img/instagramBranco.png";
    linkedin.src = "./assets/img/linkedinBranco.png";
    seguidor.src = "./assets/img/seguidor_branco.png";

    for(i = 0; i< 10;i++){
        pendurar_card_repo("./assets/img/LogoVazia.png","Legnu","teste","1","2","color_paleta_02");

    }
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
    eu.style.backgroundImage = "url(\"./assets/img/eu3.png\")";
    instagram.src = "./assets/img/instagram.png";
    linkedin.src = "./assets/img/linkedin.png";
    seguidor.src = "./assets/img/seguidor.png";

    pendurar_card_repo("./assets/img/LogoVazia.png","Legnu","teste","1","2","color_paleta_03");
}

window.addEventListener("load", () => {
    getApiGitHub_User();
    getApiGitHub_Repos();
    getApiGitHub_Social();

    azulMarinho();
});

/**
 * Elementos
 */

function pendurar_card_repo(img, titulo, descricao, favoritos, forks, paleta) {
  
    let card = 
        `<div class="card p-4 m-3 centro cursorHand repo">
            <div class="${paleta} x100x300 radius_All_-0-" style="display: flex; align-items: center; justify-content: center;">
                <img class="x100x300 ra" src="${img}" alt="Card image cap">
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
