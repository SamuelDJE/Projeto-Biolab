// ==========================================================================
// 1. CAPTURA DE ELEMENTOS (ACHANDO AS CAIXAS NA TELA)
// ==========================================================================

// Pega os links de clique das regiões (São Paulo, Minas Gerais, Canadá)
const abas = document.querySelectorAll('.aba-link');

// Pega os blocos que guardam as listas de botões de cada estado
const blocosUnidades = document.querySelectorAll('.bloco-unidades');

// Pega a imagem do planeta/globo para mudarmos a foto depois
const imagemGlobo = document.getElementById('globo-dinamico');

// Pega os elementos da caixinha flutuante de detalhes (Modal)
const janelaDetalhes = document.getElementById('janela-detalhes');
const nomeFabrica = document.getElementById('nome-fabrica');
const enderecoFabrica = document.getElementById('endereco-fabrica');
const fotoFabrica = document.getElementById('imagem-fabrica');

// Pega os botões que servem para fechar a caixinha de detalhes
const btnFecharX = document.getElementById('btn-fechar-x');
const btnFecharTexto = document.getElementById('btn-fechar-texto');

// Pega todos os botões de fábricas que existem na página
const botoesFabricas = document.querySelectorAll('.btn-localização');


// ==========================================================================
// 2. BANCO DE DADOS 
// ==========================================================================
// Lista de informações 
const dadosDasUnidades = {
    jandira: {
        nome: "Unidade Fabril - Jandira (SP)",
        endereco: "Rua Solange Aparecida Montan, 49 - Sagrado Coração De Jesus - \n Jandira - SP | CEP 06610-015",
        imagem: "./src/assets/images/Jandira.svg" // Usa a foto da sua pasta
    },
    taboao: {
        nome: "Unidade Fabril - Taboão da Serra (SP)",
        endereco: "Av. Paulo Ayres, 280 - Vila Iasi - \n Taboão da Serra - SP | CEP 06767-220",
        imagem: "./src/assets/images/Taboao.svg"
    },
    braganca: {
        nome: "Unidade Fabril - Bragança Paulista (SP)",
        endereco: "Av. Francisco Samuel  Lucchesi Filho, 1.039 - Penha - \n Bragança Paulista - SP | CEP 12929-600",
        imagem: "./src/assets/images/Braganca.svg"
    },
    admin: {
        nome: "Centro Administrativo (SP)",
        endereco: "Av. Brigadeiro Faria Lima, 4.509 - 14° Andar - Itaim Bibi - \n São Paulo - SP | CEP 04538-133",
        imagem: "./src/assets/images/CA.svg"
    },
    pdi: {
        nome: "Centro de Pesquisa, Desenvolvimento & Inovação (SP)",
        endereco: "Estrada De Itapecerica, 23.480 - Capão Redondo - \n São Paulo - SP | CEP 05858-004",
        imagem: "./src/assets/images/PD-I.svg"
    },
    ti: {
        nome: "Centro de Tecnologia da Informação (SP)",
        endereco: "Rua Pais Leme, 524 - Pinheiros - \n São Paulo - SP | CEP 05424-010",
        imagem: "./src/assets/images/TI.svg"
    },
    pousoalegre: {
        nome: "Centro Logístico e Unidade Fabril - Pouso Alegre (MG)",
        endereco: "Rodovia BR 381, Km 860, 2 - Bairro Limeira, S/n, Área rural - \n Pouso Alegre - MG | CEP 37561-899",
        imagem: "./src/assets/images/PousoAlegre.svg"
    },
    "canada-pdi": {
        nome: "Biolab Pharma PD&I - (Canadá)",
        endereco: "1790 Matheson Blvd , Unit 2- Mississauga, Ontario, L4w 0b3 \n Canada",
        imagem: "./src/assets/images/Canada.svg"
    }
};


// ==========================================================================
// 3. LOGICA DAS ABAS (MUDAR DE ESTADO E TROCAR O GLOBO)
// ==========================================================================

//Escuta em cada um dos links de regiões (Abas)
abas.forEach(aba => {
    aba.addEventListener('click', (evento) => {
        evento.preventDefault(); // Impede a página de dar aquele pulo feio ao clicar no link

        //Desliga a luz azul de todas as abas e acende apenas na que foi clicada
        abas.forEach(a => a.classList.remove('active'));
        aba.classList.add('active');

        //Pega o apelido da região clicada (sp, mg ou ca)
        const regiaoEscolhida = aba.getAttribute('data-regiao');

        // Esconde todas as listas de botões e mostra apenas a lista do estado clicado
        blocosUnidades.forEach(bloco => {
            bloco.classList.remove('active');
            if (bloco.id === regiaoEscolhida) {
                bloco.classList.add('active');
            }
        });

        // Troca a imagem do globo de acordo com a região escolhida (Mostra o globo com os pontos da região clicada)
        if (regiaoEscolhida === 'sp') {
            imagemGlobo.src = "./src/assets/images/globoSP.svg"; // Globo com pontos de SP
        } else if (regiaoEscolhida === 'mg') {
            imagemGlobo.src = "./src/assets/images/globoMG.svg"; // Troque pelo seu SVG de Minas quando tiver
        } else if (regiaoEscolhida === 'ca') {
            imagemGlobo.src = "./src/assets/images/globoCA.svg"; // Troque pelo seu SVG do Canadá quando tiver
        } 
    });
});


// ==========================================================================
// 4. LÓGICA DA JANELA FLUTUANTE (ABRIR E FECHAR DETALHES)
// ==========================================================================

// Escuta os botões das fábricas da página
botoesFabricas.forEach(botao => {
    botao.addEventListener('click', () => {
        // Descobre o ID da fábrica clicada através do atributo data-unidade
        const idUnidade = botao.getAttribute('data-unidade');

        // Puxa as informações correspondentes direto do nosso banco de dados lá de cima
        const dados = dadosDasUnidades[idUnidade];

        // Se as informações existirem, preenche a caixinha flutuante com elas
        if (dados) {
            nomeFabrica.innerText = dados.nome;
            enderecoFabrica.innerText = dados.endereco;
            fotoFabrica.src = dados.imagem;

            // MÁGICA: Adiciona a etiqueta 'active' para fazer a caixinha surgir no meio da tela
            janelaDetalhes.classList.add('active');
        }
    });
});

// Ação simples para fechar a caixinha (Tira a etiqueta 'active' e ela some)
function fecharJanela() {
    janelaDetalhes.classList.remove('active');
}

// Escuta o clique no botão do "X" do topo para fechar
btnFecharX.addEventListener('click', fecharJanela);

// Escuta o clique no botão escrito "Fechar" na base para fechar
btnFecharTexto.addEventListener('click', fecharJanela);

//Se o usuário clicar no fundo escuro fora do cartão, a caixinha também fecha sozinho
janelaDetalhes.addEventListener('click', (evento) => {
    if (evento.target === janelaDetalhes) {
        fecharJanela();
    }
});
