# Estrutura CSS Modular

Este documento descreve a nova organização modular dos arquivos CSS do projeto.

## Arquivos CSS Principais

### 1. **main.css** - Estilos base e utilitários
- Reset CSS e estilos base
- Utilitários de display, flexbox, grid
- Utilitários de tamanho, margem, padding
- Utilitários de border-radius, sombras, rotações
- Utilitários de scroll e animações básicas
- Classes utilitárias reutilizáveis

### 2. **colors.css** - Sistema de cores e paletas
- Cores base do sistema
- Sistema de paletas (preta, azul, beje)
- Controle de cores por paleta
- Estilos específicos para cada paleta
- Contraste e acessibilidade de cores

### 3. **layout.css** - Layouts e grids
- Layout principal da aplicação
- Grids específicos para cada página
- Layouts responsivos
- Media queries para diferentes tamanhos de tela
- Estruturas de grid reutilizáveis

### 4. **components.css** - Componentes reutilizáveis
- Botões e formulários
- Cards e elementos de interface
- Ícones e badges
- Divisores e separadores
- Animações e transições
- Efeitos de hover e interação

### 5. **typography.css** - Tipografia e textos
- Tamanhos de fonte
- Classes de tipografia
- Estilos de títulos e textos
- Contraste e legibilidade
- Estilos específicos para elementos de texto

## Arquivos CSS Específicos de Página

### 6. **index.css** - Página inicial
- Estilos específicos da página principal
- Navegação rápida
- Seções de destaque
- Elementos únicos da página inicial

### 7. **perfil.css** - Página de perfil
- Layout específico do perfil
- Cards de experiência e formação
- Seção de habilidades
- Estilos específicos da página de perfil

### 8. **portfolio.css** - Página de portfólio
- Grid de projetos
- Cards de projeto
- Estatísticas
- Estilos específicos do portfólio

### 9. **contato.css** - Página de contato
- Formulário de contato
- Redes sociais
- Informações de contato
- Estilos específicos da página de contato

### 10. **fotos.css** - Estilos de fotos
- Estilos para imagens de perfil
- Controle de cores das molduras por paleta

### 11. **repo.css** - Página de repositórios
- Layout específico para repositórios
- Grid de repositórios

## Ordem de Importação

A ordem de importação é importante para garantir que os estilos sejam aplicados corretamente:

```html
<!-- 1. Estilos base e utilitários -->
<link href="assets/css/main.css" rel="stylesheet">

<!-- 2. Sistema de cores e paletas -->
<link href="assets/css/colors.css" rel="stylesheet">

<!-- 3. Layouts e grids -->
<link href="assets/css/layout.css" rel="stylesheet">

<!-- 4. Componentes reutilizáveis -->
<link href="assets/css/components.css" rel="stylesheet">

<!-- 5. Tipografia -->
<link href="assets/css/typography.css" rel="stylesheet">

<!-- 6. Estilos específicos da página -->
<link href="assets/css/index.css" rel="stylesheet">
<link href="assets/css/perfil.css" rel="stylesheet">
<!-- etc. -->
```

## Benefícios da Modularização

1. **Separação de Responsabilidades**: Cada arquivo tem uma função específica
2. **Manutenibilidade**: Mais fácil de encontrar e modificar estilos específicos
3. **Reutilização**: Componentes podem ser reutilizados em diferentes páginas
4. **Performance**: Carregamento mais eficiente e cache mais inteligente
5. **Colaboração**: Diferentes desenvolvedores podem trabalhar em arquivos diferentes
6. **Escalabilidade**: Fácil adicionar novos componentes ou páginas

## Convenções de Nomenclatura

- **Classes utilitárias**: `.em1`, `.w100`, `.centro`, `.flex`
- **Classes de layout**: `.perfil-container`, `.projects-grid`, `.contato-container`
- **Classes de componentes**: `.project-card`, `.btn-enviar`, `.icone-item`
- **Classes de paleta**: `.paleta-preta`, `.paleta-azul`, `.paleta-beje`
- **Classes de estado**: `.active`, `.hover`, `.focus`

## Responsividade

Todos os layouts são responsivos e seguem a abordagem mobile-first:
- **Desktop**: `min-width: 900px`
- **Tablet**: `max-width: 900px`
- **Mobile**: `max-width: 600px`

## Paletas de Cores

O sistema suporta três paletas principais:
- **Paleta Preta**: Fundo preto com texto branco
- **Paleta Azul**: Fundo azul escuro com texto branco
- **Paleta Beje**: Fundo claro com texto escuro

Cada paleta tem suas próprias regras de contraste e acessibilidade.
