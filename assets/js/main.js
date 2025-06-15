document.addEventListener("DOMContentLoaded", () => {
  const cardsGrid = document.getElementById("cards-grid");
  if (!cardsGrid) {
    console.error("Erro Crítico: O elemento 'cards-grid' não foi encontrado.");
    return;
  }

  // Lógica automatizada para carregar cards sequencialmente
  async function initializeMural() {
    cardsGrid.innerHTML = "";
    let nextThemeSuggestion = "Qualquer Tema"; // Tema padrão
    let currentId = 1;

    while (true) {
      const cardId = String(currentId).padStart(3, "0");
      const cardPath = `cards/${cardId}/card.html`;

      try {
        const response = await fetch(cardPath);
        if (!response.ok) {
          // Para de carregar quando um card não for encontrado (ex: 404)
          break;
        }

        const cardData = await createVisualCardElement(cardId, response);
        if (cardData) {
          cardsGrid.appendChild(cardData.element);
          if (cardData.nextTheme) {
            nextThemeSuggestion = cardData.nextTheme;
          }
        }
      } catch (error) {
        console.error(`Falha ao verificar o card #${cardId}:`, error);
        break; // Para em caso de erro de rede, etc.
      }
      currentId++;
    }

    const nextCardId = String(currentId).padStart(3, "0");
    const placeholderCard = createThemePlaceholderElement(
      nextCardId,
      nextThemeSuggestion
    );
    cardsGrid.appendChild(placeholderCard);
  }

  async function createVisualCardElement(id, response) {
    try {
      const [htmlContent, cssContent] = await Promise.all([
        response.text(),
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

  function createThemePlaceholderElement(id, theme) {
    const placeholderCard = document.createElement("div");
    placeholderCard.className = "theme-placeholder-card";

    placeholderCard.innerHTML = `
          <div class="placeholder-content">
              <span class="placeholder-tag">Sugestão de Tema</span>
              <h3 class="placeholder-theme">${theme}</h3>
              <p class="placeholder-suggestion">...ou crie o seu próprio!</p>
              <span class="placeholder-id">#${id}</span>
          </div>
          <a href="https://github.com/leo-nardo/devcards/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" class="btn-accept">Criar Card</a>
      `;

    return placeholderCard;
  }

  initializeMural();
});
