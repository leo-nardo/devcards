# 🤝 Guia de Contribuição - DevCards

Obrigado por seu interesse em contribuir com o **DevCards: Corrente Criativa**! Este guia detalha o processo para adicionar sua própria carta criativa à nossa corrente de temas.

## 🎨 Como Funciona a Corrente de Temas

O projeto é uma sequência visual de cartas, onde cada uma é uma interpretação criativa de um tema. A carta anterior **sugere** um tema, mas você tem total liberdade para seguir a sugestão ou criar algo completamente novo.

1.  **Encontre a Sugestão:** No site, o último card da fila indica o "Próximo Tema". Use-o como inspiração ou ignore-o e traga sua própria ideia!
2.  **Crie sua Arte:** Sua missão é criar um card visual com HTML e CSS sobre o tema que você escolheu.
3.  **Passe a Sugestão Adiante:** Ao criar sua carta, você também irá propor o **próximo tema sugerido** para o desenvolvedor seguinte.

## 🎪 Processo de Criação da Sua Carta

### Passo 1: Preparação

**a) Fork e Clone o Repositório**

```bash
git clone [https://github.com/leo-nardo/devcards.git](https://github.com/leo-nardo/devcards.git)
cd devcards
b) Identifique o Próximo Número
Verifique a pasta cards/ para saber qual o próximo número da sua carta. Se a última pasta é 001, a sua será 002.

Passo 2: Criação dos Arquivos
a) Crie sua Pasta
Crie uma nova pasta em cards/ com o próximo número sequencial (ex: 002, 003, ...).

b) Crie seus Arquivos
Dentro da sua nova pasta, crie dois arquivos: card.html e style.css.

card.html (Exemplo para o card #002)

HTML

<div class="c-002-cyberpunk-card">
  </div>

<div data-next-theme="Natureza Mística" style="display: none;"></div>
style.css (Exemplo para o card #002)

CSS

/* Estilos para o Card #002 */

/* Use classes com prefixo para evitar conflitos e seja descritivo! */
.c-002-cyberpunk-card {
  width: 100%;
  height: 400px;
  /* ... seja criativo! ... */
}
Passo 3: Checklist de Qualidade (Obrigatório)
Antes de enviar, garanta que sua contribuição siga estas regras:

[ ] Prefixo Numérico: Todas as classes e IDs no seu CSS e HTML devem começar com o prefixo do seu card (ex: .c-002-).
[ ] CSS Isolado: Não estilize as tags body ou html no seu style.css.
[ ] Definição da Próxima Sugestão: Verifique se o seu card.html contém o elemento <div data-next-theme="Sua Sugestão" style="display: none;"></div>.
[ ] Sem Dependências Externas: Toda a arte deve ser feita com CSS puro ou SVG embutido.
Passo 4: Teste Localmente
Com as novas atualizações, você não precisa mais editar nenhum arquivo JavaScript. Apenas inicie um servidor local e seu card será carregado automaticamente na fila.

Passo 5: Envio (Pull Request)
Faça o commit apenas dos arquivos da sua pasta.
Bash

git add cards/002/
git commit -m "feat: Adiciona card #002 com o tema Música"
Abra um Pull Request no repositório principal.
Obrigado por ajudar a construir nossa corrente criativa! 🚀


### 4. Remoção de Arquivos de Template

Por fim, recomendo que você **delete a pasta `cards/002/`** do seu repositório, pois ela contém apenas arquivos de template. O novo contribuidor deverá criar a pasta e os arquivos do zero, seguindo o guia de contribuição atualizado.

Com estas mudanças, seu projeto estará mais robusto, seguro e muito mais fácil para novos desenvolvedores contribuírem!
```
