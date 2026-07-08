<div align="center">
  <img src="code/mobile/app/lib/assets/LogoCompleta(VaiComigo).png" width="180" alt="Logo VaiComigo" />

  <h1>VaiComigo</h1>

  <p>Sistema de monitoramento preventivo de trajetos com app mobile, painel web, backend em tempo real e alertas para contatos de confianca.</p>

  <p>
    <img src="https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java 21" />
    <img src="https://img.shields.io/badge/Spring%20Boot-3.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111111" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-web-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Flutter-mobile-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter" />
    <img src="https://img.shields.io/badge/PostgreSQL-Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/RabbitMQ-CloudAMQP-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" alt="RabbitMQ" />
  </p>
</div>

## Sobre o projeto

VaiComigo e um sistema de seguranca preventiva para trajetos. O app mobile envia localizacao, o backend monitora a rota, identifica eventos de risco e aciona contatos de confianca por painel web, SSE e e-mail.

O projeto combina uma API Spring Boot, front web em React/TypeScript, app Flutter, banco PostgreSQL, fila RabbitMQ e integracao de e-mail.

## Stack utilizada

| Camada | Tecnologias |
| --- | --- |
| Backend | Java 21, Spring Boot 3.5, Maven Wrapper |
| API | Spring Web, Spring Security, JWT, Bean Validation, Actuator |
| Persistencia | Spring Data JPA, PostgreSQL, H2 local, Flyway |
| Mensageria | RabbitMQ, CloudAMQP, Spring AMQP |
| Documentacao API | Springdoc OpenAPI, Swagger UI |
| Frontend web | React 19, TypeScript, Vite 5, React Router |
| Mapas e dados | Leaflet, React Leaflet, Recharts |
| Mobile | Flutter, Dart, Material, geolocator, flutter_map, http, shared_preferences |
| Infraestrutura | Render, Supabase, CloudAMQP, Brevo |
| Testes de carga | k6 |

## Arquitetura

```text
Flutter mobile       --REST/SSE--> Spring Boot API
React web dashboard  --REST/SSE--> Spring Boot API
                                      |
                                      |-- JDBC --> PostgreSQL/Supabase
                                      |-- AMQP --> RabbitMQ/CloudAMQP
                                      |-- HTTP --> Brevo e-mail
                                      `-- FS   --> armazenamento de audio
```

Diagrama completo: `docs/imagens/DIAGRAMA-ARQUITETURAL.png`.

## Funcionalidades

- Cadastro e autenticacao de usuarios.
- Cadastro de contatos de confianca.
- Criacao e acompanhamento de rotas.
- Envio de localizacao pelo app mobile.
- Monitoramento em tempo real via SSE.
- Acionamento de alerta/panico.
- Notificacoes e e-mails para contatos.
- Painel web para acompanhamento de eventos.
- Testes de carga com cenarios k6.

## Como executar localmente

### Backend

```bash
cd code/backend
cp application-local.properties.example application-local.properties
./mvnw spring-boot:run
```

No Windows:

```powershell
cd code\backend
copy application-local.properties.example application-local.properties
.\mvnw.cmd spring-boot:run
```

URLs:

| Servico | URL |
| --- | --- |
| API | `http://localhost:8080` |
| Swagger | `http://localhost:8080/swagger-ui.html` |

### Frontend web

```bash
cd code/front
npm install
cp .env.example .env
npm run dev
```

No Windows:

```powershell
cd code\front
copy .env.example .env
npm install
npm run dev
```

App web: `http://localhost:5173`.

### Mobile

```bash
cd code/mobile/app
flutter pub get
flutter run
```

## Ambiente de producao

| Servico | URL ou provedor |
| --- | --- |
| API | `https://pmg-es-2026-1-ti5-6904100-vaicomigo-5dzr.onrender.com` |
| Web | `https://front-vaicomigo.onrender.com` |
| Banco | PostgreSQL via Supabase |
| Mensageria | CloudAMQP |
| E-mail | Brevo |

## Estrutura

```text
.
|-- assets/
|-- code/
|   |-- backend/
|   |-- front/
|   `-- mobile/
|-- docs/
|-- divulge/
|-- load-tests/
|-- render.yaml
`-- README.md
```

## Testes de carga

```bash
k6 run -e BASE_URL=http://localhost:8080 load-tests/k6/scenarios/smoke.js
```

Guia completo: `load-tests/k6/README.md`.

## Equipe

- Leandro Alencar Pereira Clemente
- Isabella Luiza Dias dos Santos
- Islayder Jackson Ribeiro de Oliveira
- Natalie Santana Dias Abreu
- Vinicius Gomes Rodrigues

## Orientadores

- Arthur Martins Mol
- Cleiton Silva Tavares
- Leonardo Vilela Cardoso
