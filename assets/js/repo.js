const paletaPreta = document.querySelector("#paletaPreta");
const paleta = document.querySelectorAll(".paleta");
const textPaleta = document.querySelectorAll(".text_paleta");
const topicos = document.querySelectorAll(".topicos");
const folha = document.querySelector(".folha");

const repoTitulo = document.querySelector("#repoTitulo");
const repoDescricao = document.querySelector("#repoDescricao");
const repoDataCriacao = document.querySelector("#repoDataCriacao");
const repoFav = document.querySelector("#repoFav");
const repoLinguagens = document.querySelector("#repoLinguagens");
const repoFork = document.querySelector("#repoFork");
const repoLink = document.querySelector("#repoLink");
const repoTopicos = document.querySelector(".repoTopicos");

function start() {

    let cor = sessionStorage.getItem("paleta");
    let url = sessionStorage.getItem("url");
    let txtCor;

    switch (cor) {
        case "color_paleta_01":
            cor = "#000000";
            txtCor = "#ffffff";
            folha.style.backgroundColor = "rgba(255, 255, 255, 0.3)";

            topicos.forEach((txt) =>
                txt.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            );

            break;
        case "color_paleta_02":
            cor = "#01355c";
            txtCor = "#ffffff";
            folha.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

            topicos.forEach((txt) =>
                txt.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
            );

            break;
        case "color_paleta_03":
            cor = "#e7d6b9";
            txtCor = "#000000";
            folha.style.backgroundColor = "rgba(255, 255, 255, 0.7)"

            topicos.forEach((txt) =>
                txt.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
            );

            break;
    }


    paleta.forEach((p) =>
        p.style.backgroundColor = cor
    );
    textPaleta.forEach((txt) =>
        txt.style.color = txtCor
    );

    fetch(url)
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            const data = await res.json();

            repoTitulo.innerText += " " + data.name;
            repoDescricao.innerText = data.description;
            repoDataCriacao.innerText = data.created_at;
            repoFav.innerText = data.stargazers_count;
            repoLinguagens.innerText = data.language;
            repoFork.innerText = data.watchers_count;
            repoLink.href = data.html_url;
            repoLink.innerText = data.owner.login + "/" + data.name;

            for(i = 0; i < data.topics.length; i++){

                switch (cor) {
                    case "#000000":
                        pendurar_card_topico(data.topics[i], "background-color: rgba(0, 0, 0, 0.3)", "color: #ffffff");
                        break;
                    case "#01355c":
                        pendurar_card_topico(data.topics[i], "background-color: rgba(0, 0, 0, 0.5)", "color: #ffffff");            
                        break;
                    case "#e7d6b9":
                        pendurar_card_topico(data.topics[i], "background-color: rgba(0, 0, 0, 0.5)", "color: #ffffff");            
                        break;
                }

            }

        })

}

/**
 * Instanciar dados
 */

function instanciarColegas(paleta) {

    colegas.innerHTML = "";

    for (i = 0; i < dataS_Clg.length; i++) {
        pendurar_card_colega(dataS_Clg[i].foto, dataS_Clg[i].link, dataS_Clg[i].nome, paleta);

    }

}

/**
 * Elementos
 */

function pendurar_card_topico(nome, cor, text) {

    let card =
        `<div style="${cor}; ${text}" class="radius_All_-40- text-center textUnd p-3"><strong>${nome}</strong></div>`;

    const x = document.createElement('div');
    x.innerHTML = card;
    console.log(x);
    repoTopicos.appendChild(x);
}