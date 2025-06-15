# 🎮 DevCards: Corrente Criativa

Bem-vindo ao DevCards, uma plataforma colaborativa onde desenvolvedores criam **cartas visuais** usando apenas HTML e CSS. Cada carta é uma interpretação criativa de um **tema**, e propõe o próximo tema para a comunidade, criando uma corrente infinita de arte e código.

![Mural de Cartas](https://devcards-to.vercel.app/)

## 🎯 Como Funciona a Corrente de Temas

A mecânica é simples e focada na criatividade:

1.  **Corrente de Temas:** O projeto é uma sequência visual de cartas. Cada carta é uma obra de arte baseada em um tema (ex: "Chuva", "Música", "Pixel Art").
2.  **Passe Adiante:** Ao criar sua carta, você define qual será o **próximo tema** para o desenvolvedor seguinte.
3.  **Colaboração no GitHub:** Todas as contribuições são feitas via Pull Requests, de forma 100% open-source.
4.  **Puro CSS e HTML:** Sem frameworks, sem JavaScript nos cards. Apenas a criatividade e a habilidade dos desenvolvedores.

## 🚀 Visualizar o Projeto

1.  **Clone o repositório**:

    ```bash
    git clone [https://github.com/leo-nardo/devcards.git](https://github.com/leo-nardo/devcards.git)
    cd devcards
    ```

2.  **Inicie um servidor local**:
    - Se você usa o VS Code, instale a extensão **Live Server** e clique em "Go Live".
    - Ou, se tiver Python, execute no terminal: `python -m http.server` e acesse `http://localhost:8000`.

## 🎨 Estrutura do Projeto

A estrutura foi pensada para ser o mais simples possível para o contribuidor.

```
devcards/
├── index.html
├── assets/
│   ├── css/global.css
│   └── js/main.js
├── cards/
│   ├── 001/
│   │   ├── card.html
│   │   └── style.css
│   └── ...
└── README.md
└── CONTRIBUTING.md
```

## 🎪 Como Criar Sua Carta

1.  **Encontre o Tema Atual:** Visite o site do projeto. No final da fila de cartas, você encontrará um placeholder indicando qual é o **tema atual**.
2.  **Crie sua Estrutura:** Crie uma nova pasta em `cards/` com o próximo número sequencial (ex: `002`). Dentro dela, crie seus arquivos `card.html` e `style.css`.
3.  **Desenvolva sua Arte:** Use sua criatividade para interpretar o tema. Ao terminar, não se esqueça de definir o próximo tema dentro do seu `card.html`.
4.  **Envie:** Abra um Pull Request com sua contribuição.

Para um guia detalhado com o **checklist de qualidade obrigatório**, consulte nosso **[Guia de Contribuição](CONTRIBUTING.md)**.

## 💡 Inspiração de Temas

Um bom tema é aberto à interpretação. Ao definir o próximo, pense em conceitos como:

- **Conceitos:** "Ordem e Caos", "Solidão", "Velocidade", "Silêncio".
- **Estilos:** "Pixel Art", "Art Déco", "Glitch Art", "Steampunk".
- **Elementos:** "Fogo e Gelo", "Cristais", "Engrenagens", "Cosmos".

---

**Pronto para deixar sua marca na corrente?** 🚀
