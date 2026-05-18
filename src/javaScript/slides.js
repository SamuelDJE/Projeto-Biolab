// Seleciona o trilho horizontal e a lista de cartões de slides
const trilho = document.querySelector('.trilho-carrossel');
const cartoes = document.querySelectorAll('.card-slide');

// Seleciona os botões de controle das setas
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');

// Memória que armazena qual o grupo de cartões que está aparecendo na tela
let indiceAtual = 0;

// Descobre quantos passos o carrossel pode dar para o lado antes de acabar
// Como mostramos 2 cartões por vez, o limite é o total de fotos menos 2
const limiteMovimento = cartoes.length - 2;

// Função limpa que calcula o espaço e empurra o trilho para os lados
function moverTrilho() {
    // Descobre a largura exata de um cartão individual na tela do usuário
    const larguraCartao = cartoes[0].getBoundingClientRect().width;

    // O tamanho do deslocamento é a largura da foto mais o espaço em branco (gap de 30px)
    const tamanhoDoPasso = larguraCartao + 30;

    // Calcula a distância final multiplicando o passo pelo índice da memória
    const distanciaFinal = indiceAtual * tamanhoDoPasso;

    // Aplica o comando CSS que empurra o trilho fisicamente para a esquerda
    trilho.style.transform = `translateX(-${distanciaFinal}px)`;
}

// Evento disparado ao clicar na seta da DIREITA (Avançar)
btnProximo.addEventListener('click', () => {
    indiceAtual++;

    // Se chegar ao final das fotos, reinicia o carrossel voltando para o primeiro cartão
    if (indiceAtual > limiteMovimento) {
        indiceAtual = 0;
    }

    moverTrilho();
});

// Evento disparado ao clicar na seta da ESQUERDA (Voltar)
btnAnterior.addEventListener('click', () => {
    indiceAtual--;

    // Se tentar voltar antes do primeiro slide, pula direto para o final do trilho
    if (indiceAtual < 0) {
        indiceAtual = limiteMovimento;
    }

    moverTrilho();
});
