const paletaPreta = document.querySelector("#paletaPreta");
const paletaAzul = document.querySelector("#paletaAzul");
const paletaBeje = document.querySelector("#paletaBeje");

const paleta = document.querySelectorAll(".paleta");
const eu = document.querySelector(".eu");
const textPaleta = document.querySelectorAll(".text_paleta");
const scroll = document.querySelectorAll(".cartaoV");

paletaPreta.addEventListener('click', function () {
    paleta.forEach((p) =>
        p.style.backgroundColor = "#000000"
    );
    textPaleta.forEach((txt) =>
        txt.style.color = "#d6d6d6"
    );
    eu.style.backgroundImage = "url(\"./img/eu5.jpeg\")";
});

paletaAzul.addEventListener('click', function () {
    paleta.forEach((p) =>
        p.style.backgroundColor = "#01355c"
    );
    textPaleta.forEach((txt) =>
        txt.style.color = "#ffffff"
    );
    eu.style.backgroundImage = "url(\"./img/eu2.png\")";
});

paletaBeje.addEventListener('click', function () {
    paleta.forEach((p) =>
        p.style.backgroundColor = "#e7d6b9"
    );
    textPaleta.forEach((txt) =>
        txt.style.color = "#262626"
    );
    eu.style.backgroundImage = "url(\"./img/eu3.png\")";
});

window.addEventListener("load", () => {
    paleta.forEach((p) =>
        p.style.backgroundColor = "#000000"
    );
    textPaleta.forEach((txt) =>
        txt.style.color = "#d6d6d6"
    );
    eu.style.backgroundImage = "url(\"./img/eu5.jpeg\")";
});