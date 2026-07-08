<div align="center">
  <img src="assets/logo.svg" width="130" alt="Logo SGO" />

  <h1>SGO - Sistema de Gerenciamento das Olimpiadas</h1>

  <p>Repositorio de modelagem e documentacao para um sistema de gestao olimpica baseado em competicoes, atletas, locais e resultados.</p>

  <p>
    <img src="https://img.shields.io/badge/UML-modelagem-7C3AED?style=for-the-badge" alt="UML" />
    <img src="https://img.shields.io/badge/Microservices-arquitetura-0F766E?style=for-the-badge" alt="Microservices" />
    <img src="https://img.shields.io/badge/REST%20API-proposta-2563EB?style=for-the-badge" alt="REST API" />
    <img src="https://img.shields.io/badge/Amazon%20SQS-mensageria-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="Amazon SQS" />
  </p>
</div>

## Sobre o projeto

O SGO e uma proposta academica de sistema para coordenar os principais processos de uma olimpiada: cadastro de competicoes, inscricao de atletas, alocacao de locais, registro de resultados e relatorios de medalhas por pais.

Este repositorio concentra a modelagem do sistema, com diagramas UML e descricao das historias de usuario. Ele funciona como documentacao de arquitetura e produto.

## Stack e tecnologias propostas

| Camada | Tecnologias e conceitos |
| --- | --- |
| Modelagem | UML, diagramas de classes, componentes, implantacao e pacotes |
| Arquitetura | Microservicos, API Gateway, comunicacao assincrona |
| Backend proposto | Java, Spring Boot, REST API, JPA/Hibernate |
| Mensageria proposta | Amazon SQS |
| Frontend proposto | HTML, CSS, JavaScript, interface web responsiva |
| Infraestrutura proposta | Cloud computing, Docker, HTTPS, banco de dados |

## Funcionalidades planejadas

- Cadastro e gerenciamento de competicoes.
- Inscricao de atletas por pais e modalidade.
- Alocacao de locais com verificacao de disponibilidade.
- Registro de resultados por competicao.
- Geracao de relatorios e quadro de medalhas.

## Historias de usuario

| Codigo | Historia |
| --- | --- |
| US01 | Cadastro de competicoes com modalidade, data, horario e local |
| US02 | Inscricao de atletas em competicoes |
| US03 | Alocacao de locais sem conflito de horario |
| US04 | Registro de resultados e medalhas |
| US05 | Relatorios de medalhas por pais |

## Diagramas

| Diagrama | Arquivo |
| --- | --- |
| Classes | `Diagramas/DiagramaDeClasses.PNG` |
| Componentes | `Diagramas/DiagramaDeComponentes.PNG` |
| Implantacao | `Diagramas/DiagramaDeImplantacao.PNG` |
| Pacotes | `Diagramas/DiagramaDePacotes.PNG` |

## Estrutura

```text
.
|-- assets/
|   `-- logo.svg
|-- Diagramas/
|   |-- DiagramaDeClasses.PNG
|   |-- DiagramaDeComponentes.PNG
|   |-- DiagramaDeImplantacao.PNG
|   `-- DiagramaDePacotes.PNG
`-- README.md
```

## Observacao

Este repositorio documenta a concepcao do sistema. A stack acima representa a arquitetura proposta nos diagramas e na descricao do projeto.
