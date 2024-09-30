// efeito.js

// Função para configurar o botão de efeito
function configurarBotaoEfeito(campoArray) {
    let botaoEfeito = document.getElementById("id_botao_efeito");

    if (botaoEfeito) {
        botaoEfeito.addEventListener("click", function() {
            // Encontra a carta clonada na div id_esquerda_carta
            let cartaCloneDiv = document.querySelector("#id_esquerda_carta .carta_clonada");
            if (cartaCloneDiv) {
                // Encontra a carta correspondente no campo de cartas
                let nomeCarta = cartaCloneDiv.querySelector("div").textContent.split(":")[1].trim();
                let carta = campoArray.find(carta => carta.nome === nomeCarta);

                if (carta && typeof carta.efeito === 'function') {
                    if (window.confirm(`Deseja ativar o efeito da carta ${carta.nome}?`)) {
                        carta.efeito();
                        console.log(`Efeito da carta ${carta.nome} executado.`);
                } else {
                    console.log("Esta carta não tem efeito definido.");
                }
            }
            }
        });
    }
}

// Chama a função para configurar o botão de efeito para o campo de monstros e mágico
configurarBotaoEfeito(campo_monstro_jogador);
configurarBotaoEfeito(campo_magico_jogador);