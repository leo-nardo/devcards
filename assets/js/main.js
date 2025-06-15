document.addEventListener("DOMContentLoaded", () => {
  const cardsGrid = document.getElementById("cards-grid");

  const cardIds = ["001"];

  async function loadAllCards() {
    if (!cardsGrid) {
      console.error(
        "Erro Crítico: O elemento 'cards-grid' não foi encontrado."
      );
      return;
    }

    for (const id of cardIds) {
      try {
        const [htmlContent, cssContent, challengeContent] = await Promise.all([
          fetch(`cards/${id}/card.html`).then((res) => res.text()),
          fetch(`cards/${id}/style.css`).then((res) => res.text()),
          fetch(`cards/${id}/desafio.txt`).then((res) => res.text()),
        ]);

        createCardElement(id, htmlContent, cssContent, challengeContent);
      } catch (error) {
        console.error(`Erro ao processar o card #${id}:`, error);
        createErrorCard(id);
      }
    }
  }

  /**
   * Cria a estrutura do card usando Shadow DOM para isolamento de estilo.
   */
  function createCardElement(id, htmlContent, cssContent, challengeContent) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "dev-card";
    cardContainer.style.animationDelay = `${(parseInt(id, 10) - 1) * 0.1}s`;

    // O conteúdo HTML do card, que será o host para o Shadow DOM
    cardContainer.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-content-host"></div>
                </div>
                <div class="card-back">
                    <h3 class="challenge-title">Desafio #${String(
                      parseInt(id, 10) + 1
                    ).padStart(3, "0")}</h3>
                    <pre class="challenge-text">${challengeContent}</pre>
                </div>
            </div>
        `;

    cardsGrid.appendChild(cardContainer);

    // --- MÁGICA DO SHADOW DOM ---
    const host = cardContainer.querySelector(".card-content-host");
    if (host) {
      // 1. Cria uma "sombra" (ambiente encapsulado) no elemento host.
      const shadowRoot = host.attachShadow({ mode: "open" });

      // 2. Cria o HTML e o CSS que viverão DENTRO da sombra.
      shadowRoot.innerHTML = `
                <style>${cssContent}</style>
                ${htmlContent}
            `;
    }
  }

  function createErrorCard(id) {
    const errorContainer = document.createElement("div");
    errorContainer.className = "dev-card-error";
    errorContainer.innerHTML = `<h3>Erro ao Carregar</h3><p>Card #${id}</p>`;
    cardsGrid.appendChild(errorContainer);
  }

  loadAllCards();
});
