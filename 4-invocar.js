let invocar_monstro = 5; // Inicializa a contagem de monstros invocados

// Função para mover a carta da mão para o campo
function moverCartaParaCampo(event) {
    let cartaDiv = event.target.closest(".carta"); // Encontra a carta clicada

    if (cartaDiv) {
        // Encontrar o índice da carta na mão
        let index = Array.from(mao.children).indexOf(cartaDiv);
        
        if (index === -1) return; // Carta não encontrada

        // Obtém a carta atual do vetor
        let carta = vetor[index];
        let tipoCarta = carta.borda;
        
        // Log do nome da carta antes de mover
        console.log(`Carta clicada na mão: ${carta.nome}`);
        console.log(`Condição da carta antes de mover para o campo: ${carta.condicao}`);

        if (tipoCarta === 'monstro') {
            // Checa se pode invocar mais monstros
            if (invocar_monstro < 1) {
                alert("Não é permitido invocar mais monstros.");
                return;
            }
        }

        let slotsDisponiveis;
        let campoIdPrefixo;
        let campoArray;

        // Verifica o tipo da carta e define o campo e os slots disponíveis
        if (tipoCarta === 'monstro') {
            slotsDisponiveis = campo_monstro_jogador.filter(c => c === 0).length;
            campoArray = campo_monstro_jogador;
            campoIdPrefixo = 'id_campo_jogador_';
            if (slotsDisponiveis === 0) {
                alert("Não há espaço disponível no campo de monstros.");
                return;
            }
        } else if (tipoCarta === 'spell') {
            slotsDisponiveis = campo_magico_jogador.filter(c => c === 0).length;
            campoArray = campo_magico_jogador;
            campoIdPrefixo = 'id_magico_jogador_';
            if (slotsDisponiveis === 0) {
                alert("Não há espaço disponível no campo mágico.");
                return;
            }
        } else {
            alert("Tipo de carta desconhecido.");
            return;
        }

        // Confirmar a movimentação
        let confirmacao = confirm("Você tem certeza de que deseja mover esta carta para o campo?");
        if (confirmacao) {
            // Verifica onde colocar a carta no campo
            for (let i = 0; i < campoArray.length; i++) {
                if (campoArray[i] === 0) {
                    // Log do nome da carta antes de mover
                    console.log(`Movendo carta para o campo: ${carta.nome}`);

                    // Verifica se é uma carta de monstro e se a contagem permite invocação
                    if (tipoCarta === 'monstro' && invocar_monstro < 1) {
                        alert("Não é permitido invocar mais monstros.");
                        return;
                    }

                    campoArray[i] = { ...vetor[index] }; // Cria uma cópia da carta para o campo
                    let cartaCampo = document.getElementById(`${campoIdPrefixo}${i+1}`);
                    cartaCampo.innerHTML = `<img src="${campoArray[i].imagem}">`;

                    // Atualiza a condição da carta para "campo"
                    campoArray[i].condicao = "campo";
                    console.log(`Carta movida para o campo. Condição após mover: ${campoArray[i].condicao}`);

                    // Remove a carta da mão e do vetor após mover
                    mao.removeChild(cartaDiv);
                    vetor.splice(index, 1);

                    // Adiciona evento de clique na carta do campo
                    adicionarEventoCliqueCartaCampo(campoIdPrefixo, campoArray);
                    
                    // Atualiza a contagem de monstros invocados
                    if (tipoCarta === 'monstro') {
                        invocar_monstro--; // Decrementa a contagem de monstros invocados
                    }

                    break;
                }
            }
        }
    }
}

// Adiciona o evento para mover a carta da mão para o campo
mao.addEventListener("dblclick", moverCartaParaCampo);