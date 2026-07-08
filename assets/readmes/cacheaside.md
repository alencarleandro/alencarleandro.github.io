<div align="center">
  <img src="docs/redis-cache-aside.svg" width="120" alt="Logo Cache Aside" />

  <h1>Cache Aside</h1>

  <p>API REST e dashboard React para demonstrar o padrao arquitetural Cache Aside com metricas em tempo real.</p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111111" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Node.js-API-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express-REST-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/Redis-cache-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
    <img src="https://img.shields.io/badge/PostgreSQL-database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  </p>

  <a href="https://cacheaside-8t48.onrender.com">Deploy no Render</a>
</div>

## Sobre o projeto

Cache Aside e um laboratorio academico para visualizar como uma aplicacao pode consultar primeiro o cache, buscar no banco apenas em caso de miss e invalidar chaves depois de escritas.

O projeto simula uma API de alunos com CRUD completo, painel web, benchmark e contadores de desempenho para comparar respostas com cache e sem cache.

## Stack utilizada

| Camada | Tecnologias |
| --- | --- |
| Frontend | React 19, React DOM, Vite 8, Handsontable, Lucide React |
| Backend | Node.js, Express 5, CORS, dotenv |
| Cache | Redis compativel, fallback em memoria, TTL configuravel |
| Banco de dados | PostgreSQL via `pg`, fallback JSON local em desenvolvimento |
| Automacao | n8n, Dockerfile e configuracao Render |
| Deploy | Render |

## Funcionalidades

- CRUD REST de alunos.
- Cache Aside para lista e consulta individual.
- Forca de cache miss para demonstracoes.
- Benchmark com tempo medio de respostas.
- Metricas de cache hit, cache miss, leituras no banco e invalidacoes.
- Invalidacao de chaves apos `POST`, `PUT`, `PATCH` e `DELETE`.
- Integracao opcional com Redis e PostgreSQL.

## Arquitetura

```text
React + Vite
    |
    | REST
    v
Node.js + Express
    |-- Cache Aside --> Redis ou memoria
    |-- Persistencia -> PostgreSQL ou JSON local
    `-- Metricas ----> painel web
```

## Estrutura

```text
.
|-- docs/
|-- img/
|-- n8n/
|-- scripts/
|-- server/
|-- src/
|-- package.json
|-- vite.config.js
`-- README.md
```

## Como executar localmente

```bash
npm install
npm run dev
```

URLs locais:

| Servico | URL |
| --- | --- |
| Frontend | `http://127.0.0.1:5173` |
| API | `http://127.0.0.1:3001/api` |

Para gerar e servir o build de producao pela API:

```bash
npm run build
npm run start
```

## Variaveis de ambiente

Crie um `.env` a partir de `.env.example`.

```env
REDIS_URL=redis://localhost:6379
CACHE_TTL_SECONDS=45
CACHE_NAMESPACE=cache-aside:students
DATABASE_URL=postgresql://usuario:senha@host:5432/database
DATABASE_SSL=true
DATABASE_ALLOW_JSON_FALLBACK=false
```

## Endpoints principais

| Metodo | Endpoint | Objetivo |
| --- | --- | --- |
| `GET` | `/api/health` | Verifica API, cache e banco |
| `GET` | `/api/students` | Lista alunos com Cache Aside |
| `GET` | `/api/students/:id` | Consulta aluno individual |
| `POST` | `/api/students` | Cria aluno e invalida cache |
| `PUT` | `/api/students/:id` | Substitui aluno e invalida cache |
| `PATCH` | `/api/students/:id` | Atualiza parte do aluno e invalida cache |
| `DELETE` | `/api/students/:id` | Remove aluno e invalida cache |
| `GET` | `/api/metrics` | Consulta metricas da demonstracao |
| `POST` | `/api/benchmark` | Executa comparativo com e sem cache |
