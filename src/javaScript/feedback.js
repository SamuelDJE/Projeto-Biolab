/* =======================================================================
  CONTROLE DE NAVEGAÇÃO DA SEÇÃO 6 (FEEDBACK)
========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const trilhoFeedback = document.getElementById("trilho-feedback");
    const btnAnterior = document.getElementById("btn-anterior-feedback");
    const btnProximo = document.getElementById("btn-proximo-feedback");

    if (trilhoFeedback && btnAnterior && btnProximo) {
        // Calcula dinamicamente a largura de um card somada ao espaçamento (gap)
        const obterLarguraPasso = () => {
            const primeiroCard = trilhoFeedback.querySelector(".card-feedback");
            if (!primeiroCard) return 350; // Valor padrão caso não encontre
            const estiloCard = window.getComputedStyle(primeiroCard);
            const margemGap = 30; // Correspondente ao gap: 30px definido no CSS
            return primeiroCard.offsetWidth + margemGap;
        };

        // Evento para avançar os depoimentos
        btnProximo.addEventListener("click", () => {
            trilhoFeedback.scrollBy({
                left: obterLarguraPasso(),
                behavior: "smooth"
            });
        });

        // Evento para retroceder os depoimentos
        btnAnterior.addEventListener("click", () => {
            trilhoFeedback.scrollBy({
                left: -obterLarguraPasso(),
                behavior: "smooth"
            });
        });
    }
});
