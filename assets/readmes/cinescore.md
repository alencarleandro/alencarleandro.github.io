<div align="center">
  <img src="src/front/public/assets/img/LogoCineScore.png" width="150" alt="Logo CineScore" />

  <h1>CineScore</h1>

  <p>Aplicacao web para descobrir filmes, explorar tendencias e consultar catalogo com filtros usando dados da API TMDb.</p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111111" alt="React" />
    <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/React%20Router-6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
    <img src="https://img.shields.io/badge/TMDb-API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" alt="TMDb API" />
    <img src="https://img.shields.io/badge/CSS-interface-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
  </p>
</div>

## Sobre o projeto

CineScore e um projeto academico de experiencia em streaming e recomendacao de filmes. A versao atual entrega um front-end React que consome a API do TMDb para exibir tendencias, filmes populares, busca por titulo, filtros de catalogo e modal de detalhes.

A documentacao em `docs/` descreve a visao completa do produto, incluindo processos, modelagem de dados, indicadores e proposta de evolucao da solucao.

## Stack utilizada

| Camada | Tecnologias |
| --- | --- |
| Frontend | React 18, React DOM, React Router DOM |
| Build | Vite 5, `@vitejs/plugin-react` |
| Dados | TMDb API v3 via `fetch` |
| Estilos | CSS modular por componentes e tema |
| Documentacao | Markdown, diagramas e imagens em `docs/` |
| Visao de produto | Processos, indicadores, modelo de dados e proposta com Spring Boot/PostgreSQL |

## Funcionalidades

- Home com tendencias da semana e filmes populares.
- Busca rapida por titulo.
- Pagina de filmes com filtros por genero e classificacao.
- Paginacao de resultados.
- Modal de detalhes de filme.
- Conteudo em portugues quando disponivel na API.
- Documentacao academica completa da solucao.

## Estrutura

```text
.
|-- docs/
|-- src/
|   |-- front/
|   |   |-- public/
|   |   |-- src/
|   |   |   |-- api/
|   |   |   |-- components/
|   |   |   |-- pages/
|   |   |   `-- assets/
|   |   |-- package.json
|   |   `-- vite.config.js
|   `-- README.md
|-- CITATION.cff
`-- README.md
```

## Como executar

Prerequisitos:

- Node.js LTS.
- Chave de API do TMDb.

```bash
cd src/front
npm install
cp .env.example .env
npm run dev
```

No Windows, para copiar o arquivo de ambiente:

```powershell
copy .env.example .env
```

Configure a chave:

```env
VITE_TMDB_API_KEY=sua_chave_aqui
```

## Scripts

| Comando | Descricao |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de producao |
| `npm run preview` | Preview do build |

## Documentacao

| Arquivo | Conteudo |
| --- | --- |
| `docs/solution-design.md` | Modelo de dados e tecnologias |
| `docs/interface.md` | Interfaces do sistema |
| `docs/processo_1.md` a `docs/processo_4.md` | Processos de usuario, favoritos, recomendacoes e feedback |
| `docs/performance-indicators.md` | Indicadores de desempenho |
| `docs/diagramas.md` | Diagramas do projeto |

## Equipe

- Brenda Evers
- Isabella Luiza Dias dos Santos
- Islayder Jackson Ribeiro de Oliveira
- Leandro Alencar Pereira Clemente
- Lucas Valente Alves
- Victor Rafael de Neiva Machado
