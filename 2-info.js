// Declara a variável global para a carta
let carta;

// Função para adicionar evento de clique nas cartas dos campos
function adicionarEventoCliqueCartaCampo(campoIdPrefixo, campoArray) {
    for (let i = 0; i < campoArray.length; i++) {
        let cartaCampo = document.getElementById(`${campoIdPrefixo}${i+1}`);
        
        if (cartaCampo) {
            cartaCampo.addEventListener("click", function() {
                // Verifica se há uma carta no campo
                if (campoArray[i] && campoArray[i].condicao) {
                    // Atualiza a variável global `carta`
                    carta = campoArray[i];
                    
                    // Cria uma nova div com a carta para o id_esquerda_carta
                    let cartaCloneDiv = document.createElement("div");
                    cartaCloneDiv.classList.add("carta_clonada");
                    cartaCloneDiv.dataset.originalCartaId = `${campoIdPrefixo}${i+1}`; // Adiciona um atributo data para identificar a carta original
                    cartaCloneDiv.innerHTML = `
                        <img src="${carta.imagem}" alt="${carta.nome}" class="imagem_carta">
                        <div><strong>Nome:</strong> ${carta.nome}</div>
                        <div><strong>Ataque:</strong> ${carta.ataque}</div>
                        <div><strong>Defesa:</strong> ${carta.defesa}</div>
                        <div><strong>Descrição:</strong> ${carta.texto_descricao}</div>
                        <div><strong>Efeito:</strong> ${carta.efeito_descricao}</div>
                        <div><strong>Elemento:</strong> ${carta.elemento}</div>
                        <div><strong>Estrelas:</strong> ${carta.estrelas}</div>
                        <div><strong>Raça:</strong> ${carta.raça}</div>
                        <div><strong>Tipo:</strong> ${carta.borda}</div>
                        <div><strong>Stamina:</strong> ${carta.stamina}</div>
                        <div><strong>Mana:</strong> ${carta.mana}</div>
                    `;

                    // Adiciona a carta clonada ao id_esquerda_carta
                    let esquerdaInfo = document.getElementById("id_esquerda_carta");
                    esquerdaInfo.innerHTML = ''; // Limpa o conteúdo anterior
                    esquerdaInfo.appendChild(cartaCloneDiv);

                    // Log para depuração
                    console.log(`Carta clonada: ${carta.nome} movida para a esquerda.`);
                }
            });
        }
    }
}

// Função para adicionar evento de clique nas cartas da mão
function adicionarEventoCliqueCartaMao(mao, vetor) {
    mao.addEventListener("click", function(event) {
        let cartaDiv = event.target.closest(".carta"); // Encontra a carta clicada

        if (cartaDiv) {
            // Encontrar o índice da carta na mão
            let index = Array.from(mao.children).indexOf(cartaDiv);
            
            if (index === -1) return; // Carta não encontrada

            // Obtém a carta atual do vetor
            carta = vetor[index];
            
            // Cria uma nova div com a carta para o id_esquerda_carta
            let cartaCloneDiv = document.createElement("div");
            cartaCloneDiv.classList.add("carta_clonada");
            cartaCloneDiv.dataset.originalCartaId = `mao_${index}`; // Adiciona um atributo data para identificar a carta original
            cartaCloneDiv.innerHTML = `
                <img src="${carta.imagem}" alt="${carta.nome}" class="imagem_carta">
                <div><strong>Nome:</strong> ${carta.nome}</div>
                <div><strong>Ataque:</strong> ${carta.ataque}</div>
                <div><strong>Defesa:</strong> ${carta.defesa}</div>
                <div><strong>Descrição:</strong> ${carta.texto_descricao}</div>
                <div><strong>Efeito:</strong> ${carta.efeito_descricao}</div>
                <div><strong>Elemento:</strong> ${carta.elemento}</div>
                <div><strong>Estrelas:</strong> ${carta.estrelas}</div>
                <div><strong>Raça:</strong> ${carta.raça}</div>
                <div><strong>Tipo:</strong> ${carta.borda}</div>
                <div><strong>Stamina:</strong> ${carta.stamina}</div>
                <div><strong>Mana:</strong> ${carta.mana}</div>
            `;

            // Adiciona a carta clonada ao id_esquerda_carta
            let esquerdaInfo = document.getElementById("id_esquerda_carta");
            esquerdaInfo.innerHTML = ''; // Limpa o conteúdo anterior
            esquerdaInfo.appendChild(cartaCloneDiv);

            // Log para depuração
            console.log(`Carta clonada: ${carta.nome} movida para a esquerda.`);
        }
    });
}

// Chama a função para adicionar eventos para o campo de monstros e mágico do jogador
adicionarEventoCliqueCartaCampo('id_campo_jogador_', campo_monstro_jogador);
adicionarEventoCliqueCartaCampo('id_magico_jogador_', campo_magico_jogador);

// Chama a função para adicionar eventos para a mão do jogador
adicionarEventoCliqueCartaMao(mao, vetor);
