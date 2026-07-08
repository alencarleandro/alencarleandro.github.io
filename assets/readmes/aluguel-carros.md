<div align="center">
  <img src="docs/logo.svg" width="130" alt="Logo Sistema de Aluguel de Carros" />

  <h1>Sistema de Aluguel de Carros</h1>

  <p>Aplicacao web para gerenciar clientes, frota, agentes financeiros e pedidos de aluguel de veiculos.</p>

  <p>
    <img src="https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java 21" />
    <img src="https://img.shields.io/badge/Spring%20Boot-3.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
    <img src="https://img.shields.io/badge/Thymeleaf-templates-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white" alt="Thymeleaf" />
    <img src="https://img.shields.io/badge/Gradle-build-02303A?style=for-the-badge&logo=gradle&logoColor=white" alt="Gradle" />
    <img src="https://img.shields.io/badge/H2%20%2F%20PostgreSQL-database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="H2 e PostgreSQL" />
  </p>
</div>

## Sobre o projeto

Sistema academico de aluguel de carros com fluxo completo de cadastro, autenticacao, consulta de catalogo, solicitacao de aluguel e painel administrativo. A aplicacao segue arquitetura MVC com Spring Boot, persistencia JPA, views Thymeleaf e seguranca com Spring Security.

## Stack utilizada

| Camada | Tecnologias |
| --- | --- |
| Linguagem | Java 21 |
| Backend web | Spring Boot 3.5, Spring MVC |
| Templates | Thymeleaf |
| Persistencia | Spring Data JPA, Hibernate |
| Banco de dados | H2 em memoria por padrao, PostgreSQL opcional |
| Seguranca | Spring Security |
| Validacao | Jakarta Bean Validation |
| Build | Gradle Wrapper |
| Testes | JUnit 5, Spring Boot Test, Spring Security Test |
| Utilitarios | Lombok, Dockerfile |

## Funcionalidades

- Cadastro e login de clientes.
- Catalogo de carros disponiveis.
- Criacao e acompanhamento de pedidos de aluguel.
- Painel administrativo para pedidos.
- Gestao de clientes, automoveis e agentes financeiros.
- Status de pedido: `PENDENTE`, `APROVADO`, `REJEITADO` e `CANCELADO`.
- Carga inicial de dados via `data.sql`.

## Estrutura

```text
.
|-- docs/
|-- src/
|   `-- backend/
|       `-- aluguel-carros/
|           |-- src/main/java/br/com/aluguel/aluguelcarros/
|           |   |-- config/
|           |   |-- controller/
|           |   |-- dto/
|           |   |-- facade/
|           |   |-- model/
|           |   |-- repository/
|           |   `-- service/
|           |-- src/main/resources/
|           |   |-- templates/
|           |   |-- application.properties
|           |   `-- data.sql
|           |-- build.gradle
|           |-- settings.gradle
|           `-- Dockerfile
`-- README.md
```

## Como executar

Prerequisito:

- JDK 21.

```bash
cd src/backend/aluguel-carros
./gradlew bootRun
```

No Windows:

```powershell
cd src\backend\aluguel-carros
.\gradlew.bat bootRun
```

A aplicacao inicia em `http://localhost:8080`.

## Banco de dados

Por padrao, o projeto usa H2 em memoria:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update
```

Console H2: `http://localhost:8080/h2-console`.

Tambem ha suporte a PostgreSQL via dependencia no `build.gradle`; ajuste o `application.properties` para usar um banco externo.

## Testes

```bash
./gradlew test
```

No Windows:

```powershell
.\gradlew.bat test
```

## Principais rotas

| Rota | Uso |
| --- | --- |
| `/` | Home |
| `/login` | Login |
| `/cadastro` | Cadastro de cliente |
| `/catalogo-carros` | Catalogo de veiculos |
| `/pedidos/meus-pedidos` | Pedidos do cliente |
| `/pedidos/todos` | Painel administrativo de pedidos |
| `/automoveis` | Gestao de automoveis |
| `/agentes` | Gestao de agentes |
| `/admin/gestao-clientes` | Gestao de clientes |
