<div align="center">
  <img src="front/src/assets/logo-original.png" width="140" alt="Logo Legnu ERP" />

  <h1>Legnu ERP</h1>

  <p>ERP em evolucao com front web, API REST, aplicacao desktop JavaFX e utilitario local para administracao de tenants.</p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111111" alt="React" />
    <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Java-21%20%2F%2025-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
    <img src="https://img.shields.io/badge/Spring%20Boot-API-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
    <img src="https://img.shields.io/badge/PostgreSQL-database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/Python-Tkinter-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  </p>
</div>

## Sobre o projeto

Legnu ERP e um sistema de gestao empresarial composto por modulos web, API, desktop e ferramentas locais de apoio. O foco do projeto e centralizar rotinas de cadastro, vendas, produtos, funcionarios, taxas, financeiro, ordem de servico e administracao multi-tenant.

Este repositorio esta organizado em uma estrutura modular:

| Pasta | Descricao |
| --- | --- |
| `front/` | Aplicacao web React + Vite |
| `api/` | API REST em Spring Boot |
| `desktop/` | Aplicacao desktop JavaFX e base historica do ERP |
| `tenantMaker/` | App local em Python/Tkinter para administrar tenants |

## Stack utilizada

| Camada | Tecnologias |
| --- | --- |
| Frontend web | React 18, React Router DOM, Vite 5, CSS |
| API | Java 25, Spring Boot 4, Spring Web, Spring Data JPA, Spring Security, Bean Validation |
| Autenticacao | JWT com `jjwt` |
| Banco de dados | PostgreSQL, JPA/Hibernate |
| Desktop | Java 21, JavaFX 21, Maven, Spring Boot 3, JasperReports, iText PDF, Java NF-e |
| Ferramenta local | Python, Tkinter, `psycopg2-binary` |
| Build | Maven Wrapper, npm |
| Deploy/API | Dockerfile no modulo `api/` |

## Modulos em destaque

- Gestao de clientes, funcionarios, produtos e servicos.
- Ponto de venda, comandas e fluxo comercial.
- Controle financeiro, taxas e terminais de pagamento.
- Recursos fiscais e emissao/estrutura de NF-e no modulo desktop.
- Administracao de tenants com criacao, edicao, ativacao e exclusao.

## Como executar

### Frontend web

```bash
cd front
npm install
npm run dev
```

### API

No Windows:

```bash
cd api
mvnw.cmd spring-boot:run
```

Em Linux/macOS:

```bash
cd api
./mvnw spring-boot:run
```

### Desktop JavaFX

```bash
cd desktop
mvn javafx:run
```

### Tenant Maker

No Windows:

```text
tenantMaker\run.bat
```

Em Linux/macOS:

```bash
cd tenantMaker
sh run.sh
```

## Estrutura

```text
.
|-- api/
|-- desktop/
|-- front/
|-- tenantMaker/
`-- README.md
```

## Observacao de manutencao

O repositorio possui uma base desktop historica e modulos novos em evolucao. Para mudancas grandes, trate cada pasta como um modulo independente e valide o fluxo especifico antes de integrar.
