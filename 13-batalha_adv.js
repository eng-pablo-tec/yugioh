let cartaSelecionada = null; // Variável para armazenar a carta selecionada

// Função para selecionar uma carta ao clicar
function selecionarCarta(slot) {
    cartaSelecionada = slot.children[0]; // Armazena a carta clicada
    console.log('Carta selecionada:', cartaSelecionada.innerHTML);
}

// Função para escolher o oponente e clonar a carta selecionada
function escolherOponente() {
    // Verifica se uma carta foi selecionada
    if (!cartaSelecionada) {
        alert('Nenhuma carta foi selecionada!');
        return;
    }

    // Limpa o conteúdo anterior do div de destino
    const divBranco = document.getElementById('id_branco_adv');
    divBranco.innerHTML = ''; // Limpa o conteúdo anterior

    // Clona a carta escolhida
    const cartaClone = cartaSelecionada.cloneNode(true);
    cartaClone.classList.add('carta-clonada'); // Adiciona uma classe se necessário

    // Adiciona o clone ao div de destino
    divBranco.appendChild(cartaClone);
    console.log('Carta clonada:', cartaClone.innerHTML);
}

// Adiciona o evento de clique ao botão de escolher o oponente
document.getElementById('id_botao_atk_adv').addEventListener('click', escolherOponente);

// Adiciona eventos de clique às cartas no campo de monstros
const slots_monstro = [
    document.getElementById('id_campo_adv_1'),
    document.getElementById('id_campo_adv_2'),
    document.getElementById('id_campo_adv_3'),
    document.getElementById('id_campo_adv_4'),
    document.getElementById('id_campo_adv_5')
];

// Adiciona evento de clique em cada slot de monstro
slots_monstro.forEach(slot => {
    slot.addEventListener('click', () => {
        if (slot.children.length > 0) {
            selecionarCarta(slot); // Seleciona a carta se o slot não estiver vazio
        }
    });
});