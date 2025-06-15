document.addEventListener("DOMContentLoaded", () => {
  const cardsGrid = document.getElementById("cards-grid");
  if (!cardsGrid) {
    console.error("Erro Crítico: O elemento 'cards-grid' não foi encontrado.");
    return;
  }

  // Lista dos IDs dos cards que JÁ FORAM COMPLETADOS.
  const completedCardIds = ["001"];

  async function initializeMural() {
    cardsGrid.innerHTML = ""; // Limpa o mural

    let nextTheme = "Chuva"; // Tema inicial para o primeiro card

    // 1. Renderiza todos os cards visuais que já foram completados
    for (const id of completedCardIds) {
      const cardData = await createVisualCardElement(id);
      if (cardData) {
        cardsGrid.appendChild(cardData.element);
        // Atualiza o tema para o próximo placeholder
        nextTheme = cardData.nextTheme;
      }
    }

    // 2. No final da corrente, renderiza o card com o próximo tema
    if (nextTheme) {
      const nextCardId = String(completedCardIds.length + 1).padStart(3, "0");
      const placeholderCard = createThemePlaceholderElement(
        nextCardId,
        nextTheme
      );
      cardsGrid.appendChild(placeholderCard);
    }
  }

  /**
   * Busca os dados e cria o elemento de um card visual.
   * Retorna o elemento e o tema para o próximo card.
   */
  async function createVisualCardElement(id) {
    try {
      const [htmlContent, cssContent] = await Promise.all([
        fetch(`cards/${id}/card.html`).then((res) => res.text()),
        fetch(`cards/${id}/style.css`).then((res) => res.text()),
      ]);

      const cardContainer = document.createElement("div");
      cardContainer.className = "dev-card";

      const host = document.createElement("div");
      host.className = "card-content-host";
      cardContainer.appendChild(host);

      const shadowRoot = host.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `<style>${cssContent}</style>${htmlContent}`;

      // Extrai o próximo tema do elemento oculto no HTML do card
      const nextThemeElement = shadowRoot.querySelector("[data-next-theme]");
      const nextTheme = nextThemeElement
        ? nextThemeElement.getAttribute("data-next-theme")
        : null;

      return { element: cardContainer, nextTheme: nextTheme };
    } catch (error) {
      console.error(`Erro ao criar o card visual #${id}:`, error);
      return null;
    }
  }

  /**
   * Cria um card placeholder que mostra o próximo tema a ser feito.
   */
  function createThemePlaceholderElement(id, theme) {
    const placeholderCard = document.createElement("div");
    placeholderCard.className = "theme-placeholder-card";

    placeholderCard.innerHTML = `
          <div class="placeholder-content">
              <span class="placeholder-tag">Próximo Tema</span>
              <h3 class="placeholder-theme">${theme}</h3>
              <span class="placeholder-id">#${id}</span>
          </div>
          <a href="https://github.com/leo-nardo/devcards/" target="_blank" class="btn-accept">Criar Card</a>
      `;

    return placeholderCard;
  }

  initializeMural();
});
