document.addEventListener("DOMContentLoaded", () => {
  const cardsGrid = document.getElementById("cards-grid");
  if (!cardsGrid) {
    console.error("Erro Crítico: O elemento 'cards-grid' não foi encontrado.");
    return;
  }

  const completedCardIds = ["001"];

  async function initializeMural() {
    cardsGrid.innerHTML = "";

    let nextThemeSuggestion = "Qualquer Tema"; // Um tema padrão caso o último card não sugira um

    for (const id of completedCardIds) {
      const cardData = await createVisualCardElement(id);
      if (cardData) {
        cardsGrid.appendChild(cardData.element);
        if (cardData.nextTheme) {
          nextThemeSuggestion = cardData.nextTheme;
        }
      }
    }

    const nextCardId = String(completedCardIds.length + 1).padStart(3, "0");
    const placeholderCard = createThemePlaceholderElement(
      nextCardId,
      nextThemeSuggestion
    );
    cardsGrid.appendChild(placeholderCard);
  }

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
   * ATUALIZADO: Cria um card placeholder que mostra o tema como uma sugestão.
   */
  function createThemePlaceholderElement(id, theme) {
    const placeholderCard = document.createElement("div");
    placeholderCard.className = "theme-placeholder-card";

    // O texto agora reflete a nova lógica
    placeholderCard.innerHTML = `
          <div class="placeholder-content">
              <span class="placeholder-tag">Sugestão de Tema</span>
              <h3 class="placeholder-theme">${theme}</h3>
              <p class="placeholder-suggestion">...ou crie o seu próprio!</p>
              <span class="placeholder-id">#${id}</span>
          </div>
          <a href="https://github.com/leo-nardo/devcards/blob/main/CONTRIBUTIING.md" target="_blank" class="btn-accept">Criar Card</a>
      `;

    return placeholderCard;
  }

  initializeMural();
});
