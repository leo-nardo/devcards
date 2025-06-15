# 🤝 Guia de Contribuição - DevCards

Obrigado por seu interesse em contribuir com o **DevCards: Corrente Criativa**! Este guia detalha o processo para adicionar sua própria carta criativa à nossa corrente de temas.

## 🎨 Como Funciona a Corrente de Temas

O projeto é uma sequência visual de cartas, onde cada uma é uma interpretação criativa de um tema proposto pela carta anterior.

1.  **Mural de Temas:** No site, você verá uma fila de cartas já criadas. A última posição é um placeholder indicando o **tema atual**.
2.  **Crie sua Arte:** Sua missão é criar um card visual com HTML e CSS que represente criativamente o tema proposto.
3.  **Passe Adiante:** Ao criar sua carta, você também irá propor o **próximo tema** para o desenvolvedor seguinte.

## 🎪 Processo de Criação da Sua Carta

### Passo 1: Preparação

**a) Fork e Clone o Repositório**

```bash
git clone [https://github.com/leo-nardo/devcards.git](https://github.com/leo-nardo/devcards.git)
cd devcards
```

**b) Identifique o Próximo Tema e Número**

- Acesse o site e veja qual é o tema do placeholder **"Próximo Tema"**.
- Verifique a pasta `cards/` para saber qual o próximo número da sua carta. Se a última pasta é `001`, a sua será `002`.

### Passo 2: Criação dos Arquivos

**a) Crie sua Pasta**
Crie uma nova pasta em `cards/` com o próximo número sequencial (ex: `002`, `003`, ...).

**b) Crie seus Arquivos**
Dentro da sua nova pasta (ex: `cards/002/`), crie dois arquivos: `card.html` e `style.css`.

**`card.html`**

```html
<!-- Autor: [Seu Nome ou Usuário do GitHub] -->
<!-- Tema Cumprido: [Tema que você está desenvolvendo] -->

<div class="c-002-seu-container-principal">
  <!-- Sua criação visual em HTML -->
</div>

<!-- 
  IMPORTANTE: Defina o próximo tema aqui!
  O JavaScript usará este atributo para criar o próximo placeholder.
-->
<div data-next-theme="Cyberpunk" style="display: none;"></div>
```

**`style.css`**

```css
/* Estilos para o Card #002 */

/* Use classes com prefixo para evitar conflitos */
.c-002-seu-container-principal {
  width: 100%;
  height: 400px; /* Importante para a animação funcionar corretamente */
  /* ... seja criativo! ... */
}
```

### Passo 3: Checklist de Qualidade (Obrigatório)

Antes de enviar, garanta que sua contribuição siga estas regras para manter a qualidade e a estabilidade do projeto.

- [ ] **Prefixo Numérico:** Todas as classes e IDs no seu CSS e HTML **devem** começar com o prefixo do seu card (ex: `.c-002-`, `#c-002-`). Isso é crucial para evitar que seu estilo afete outros cards.
- [ ] **Sem `body` ou `html` no CSS:** Não estilize as tags `body` ou `html` no seu `style.css`. Estilize apenas as classes que você criou.
- [ ] **Definição do Próximo Tema:** Verifique se o seu `card.html` contém o elemento `<div data-next-theme="Seu Tema Novo" style="display: none;"></div>`.
- [ ] **Sem Dependências Externas:** Não use `<img>` ou `@import` para buscar recursos de outros sites. Toda a arte deve ser feita com CSS puro ou SVG embutido.
- [ ] **Código Limpo:** Seu código está razoavelmente organizado e, se necessário, comentado.

### Passo 4: Teste Localmente

Para visualizar sua carta, abra `assets/js/main.js` e adicione o número do seu card à lista `completedCardIds`.

```javascript
// Exemplo para testar o card #002
const completedCardIds = ["001", "002"];
```

**Atenção:** Lembre-se de **reverter essa mudança** no `main.js` antes de fazer o commit dos seus arquivos!

### Passo 5: Envio (Pull Request)

1.  Faça o commit apenas dos arquivos da **sua** pasta.
    ```bash
    git add cards/002/
    git commit -m "feat: Adiciona card #002 com o tema Música"
    ```
2.  Abra um Pull Request no repositório principal e preencha as informações solicitadas.

---

**Obrigado por ajudar a construir nossa corrente criativa!** 🚀
