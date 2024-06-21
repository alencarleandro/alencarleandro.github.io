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

paletaPreta.addEventListener('click', function () {
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
    eu.style.backgroundImage = "url(\"./public/assets/img/eu5.jpeg\")";
    instagram.src = "./public/assets/img/instagramBranco.png";
    linkedin.src = "./public/assets/img/linkedinBranco.png";
});

paletaAzul.addEventListener('click', function () {
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
    eu.style.backgroundImage = "url(\"./public/assets/img/eu2.png\")";
    instagram.src = "./public/assets/img/instagramBranco.png";
    linkedin.src = "./public/assets/img/linkedinBranco.png";
});

paletaBeje.addEventListener('click', function () {
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
    eu.style.backgroundImage = "url(\"./public/assets/img/eu3.png\")";
    instagram.src = "./public/assets/img/instagram.png";
    linkedin.src = "./public/assets/img/linkedin.png";
});

window.addEventListener("load", () => {
    paleta.forEach((p) =>
        p.style.backgroundColor = "#000000"
    );
    textPaleta.forEach((txt) =>
        txt.style.color = "#e6e6e6"
    );
    fontEsp.forEach((txt) =>
        txt.style.color = "rgba(255, 255, 255, 0.8)"
    );
    
    var ss = document.styleSheets[0];

    seletorPaleta.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
    folha.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
    eu.style.backgroundImage = "url(\"./public/assets/img/eu5.jpeg\")";
    instagram.src = "./public/assets/img/instagramBranco.png";
    linkedin.src = "./public/assets/img/linkedinBranco.png";
});