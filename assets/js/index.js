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
    // Atualizar ano no footer automaticamente
    const anoAtual = new Date().getFullYear();
    const footer = document.querySelector("footer strong");
    if (footer) {
        footer.innerHTML = footer.innerHTML.replace(/© \d{4}/, `© ${anoAtual}`);
    }
}




