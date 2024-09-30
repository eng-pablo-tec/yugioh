// Objeto para armazenar a carta
const carta_adv_batalha = {};
let carta_adv; // Declarar a variável carta_adv

// Função do botão id_teste000
document.getElementById('id_teste000').addEventListener('click', function() {
    // Criar objeto baralho_adv
    const baralho_adv = {
        nome: 'Dragão',
        ataque: 1000,
        defesa: 500
    };

    // Criar objeto carta_adv e copiar propriedades de baralho_adv
    carta_adv = Object.assign({}, baralho_adv);

    // Criar uma nova div, mas não adicionar conteúdo
    const divCampoAdv1 = document.getElementById('id_campo_adv_1');
    const novaDivCarta = document.createElement('div');

    // Apenas adicionar a nova div vazia à div id_campo_adv_1
    divCampoAdv1.appendChild(novaDivCarta);
});