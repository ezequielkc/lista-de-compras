# Lista de Compras - Projeto para Iniciantes

## O que é este projeto?

Este é um projeto de **lista de compras interativa** criado para ensinar conceitos básicos de desenvolvimento web para quem está começando a aprender HTML, CSS e JavaScript.

## Funcionalidades

### O que você pode fazer:
- **Adicionar itens** - Digite e pressione Enter
- **Marcar como comprado** - Clique no checkbox
- **Remover itens** - Clique na lixeira
- **Desfazer remoção** - Use o botão "Voltar"
- **Funciona em celular** - Design responsivo

## Tecnologias Utilizadas

### HTML
- **Estrutura semântica** - Tags com significado
- **Formulários** - Input e botões
- **Listas** - Organização de itens

### CSS
- **Flexbox** - Layout moderno e flexível
- **CSS Variables** - Sistema de cores organizado
- **Media Queries** - Adaptação para diferentes telas
- **Transitions** - Animações suaves

### JavaScript
- **Event Listeners** - Detectar ações do usuário
- **DOM Manipulation** - Criar e modificar elementos
- **Local Storage** - Salvar dados no navegador
- **Template Strings** - Criar HTML dinamicamente

## Estrutura do Projeto

```
Lista de compras/
├── index.html          # Página principal
├── styles.css          # Estilos e layout
├── script.js           # Funcionalidades
├── Icons/              # Ícones do projeto
│   ├── logo.png        # Logo da aplicação
│   ├── trash.png       # Ícone de lixeira
│   ├── aviso.png       # Ícone de aviso
│   └── favicon.png     # Favicon da aplicação
└── README.md           # Este arquivo
```

## Como Usar

### Para Estudantes:
1. **Abra o `index.html`** no navegador
2. **Teste as funcionalidades** - adicione, remova, desfaça
3. **Leia os comentários** no código para aprender
4. **Experimente** - modifique cores, textos, comportamentos

### Para Desenvolvedores:
1. **Clone o repositório**
2. **Abra no seu editor** (VS Code, Sublime, etc.)
3. **Modifique o código** e veja as mudanças
4. **Adicione novas funcionalidades**

## Conceitos Aprendidos

### HTML Básico
- Estrutura de uma página web
- Formulários e inputs
- Listas e organização de conteúdo
- Semântica HTML

### CSS Moderno
- Layout com Flexbox
- Sistema de cores com variáveis
- Responsividade para mobile
- Animações e transições
- Design limpo e moderno

### JavaScript Funcional
- Manipulação do DOM
- Eventos e interatividade
- Armazenamento local
- Criação dinâmica de elementos

## Design System

### Cores
- **Primária**: Azul violeta (#6366F1)
- **Fundo**: Cinza claro (#F3F4F6)
- **Texto**: Quase preto (#18181B)
- **Alerta**: Vermelho (#EF4444)

### Tipografia
- **Fonte**: Inter (moderna e legível)
- **Tamanhos**: Sistema escalável
- **Pesos**: Variações para hierarquia

### Layout
- **Container**: Máximo 400px de largura
- **Espaçamentos**: Sistema consistente
- **Bordas**: Cantos arredondados (6px)

## Como Funciona por Dentro

### 1. Adicionar Item
```javascript
// Usuário digita e pressiona Enter
// JavaScript captura o evento
// Cria novo elemento HTML
// Adiciona à lista
```

### 2. Remover Item
```javascript
// Usuário clica na lixeira
// JavaScript salva o item removido
// Remove da lista
// Mostra alerta de confirmação
```

### 3. Desfazer Ação
```javascript
// Usuário clica em "Voltar"
// JavaScript recupera o item salvo
// Reinsere na posição original
```

## Próximos Passos para Aprender

### Para Iniciantes:
1. **Modifique as cores** no CSS
2. **Adicione novos campos** (quantidade, categoria)
3. **Crie novas animações** 
4. **Teste em diferentes dispositivos**

### Para Intermediários:
1. **Adicione persistência** (salvar no servidor)
2. **Implemente categorias** de produtos
3. **Crie modo escuro**
4. **Adicione validações** de entrada

## Contribuindo

### Como Contribuir:
1. **Fork o projeto**
2. **Crie uma branch** para sua feature
3. **Faça suas mudanças**
4. **Teste tudo**
5. **Envie um Pull Request**

### Sugestões de Melhorias:
- Melhorar responsividade
- Adicionar temas
- Implementar busca
- Adicionar estatísticas
- Suporte a múltiplos idiomas

## Recursos para Aprender Mais

### HTML
- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [W3Schools HTML](https://www.w3schools.com/html/)

### CSS
- [CSS-Tricks](https://css-tricks.com/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### JavaScript
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [MDN JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Licença

Este projeto é open source e está disponível sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## Agradecimentos

- **Comunidade web** por compartilhar conhecimento
- **Desenvolvedores** que criaram as tecnologias utilizadas
- **Estudantes** que testaram e deram feedback

---

**Feito para a comunidade de desenvolvedores**

*Este projeto é um exemplo prático de como aplicar conceitos básicos de desenvolvimento web de forma didática e acessível.*
