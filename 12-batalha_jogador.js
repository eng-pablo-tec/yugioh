// Função para clonar a carta selecionada e movê-la para o campo de batalha do jogador
function clonarCartaParaBatalha() {
    // Verifica se a variável global `carta` está definida
    if (carta) {
        console.log("Carta selecionada:", carta);

        // Verifica se a carta tem a borda "monstro" e se a condição da carta é "campo"
        if (carta.borda === "monstro" && carta.condicao === "campo") {
            if (carta.condicao_2 === "ataque") {
                // Cria um novo clone do objeto carta
                let cartaClonada = {...carta}; // Clona o objeto da carta para manter as propriedades dinâmicas
                
                // Cria uma div para exibir a carta clonada no campo de batalha
                let cartaCloneDiv = document.createElement("div");
                cartaCloneDiv.classList.add("carta_clonada_batalha");
                
                // Atualiza as propriedades da carta dinamicamente
                cartaCloneDiv.setAttribute("data-nome", cartaClonada.nome);
                cartaCloneDiv.setAttribute("data-ataque", cartaClonada.ataque);
                cartaCloneDiv.setAttribute("data-defesa", cartaClonada.defesa);
                cartaCloneDiv.setAttribute("data-batalhar", cartaClonada.batalhar);
                cartaCloneDiv.setAttribute("data-imagem", cartaClonada.imagem);
                cartaCloneDiv.setAttribute("data-borda", cartaClonada.borda);
                cartaCloneDiv.setAttribute("data-condicao", cartaClonada.condicao);
                cartaCloneDiv.setAttribute("data-condicao_2", cartaClonada.condicao_2);
                cartaCloneDiv.setAttribute("data-condicao_3", cartaClonada.condicao_3);
                
                // Adiciona a imagem da carta no HTML (sem mostrar ataque ou defesa)
                cartaCloneDiv.innerHTML = `
                    <img src="${cartaClonada.imagem}" alt="${cartaClonada.nome}" class="imagem_carta">
                `;

                // Adiciona a carta clonada na div batalha_jogador
                let batalhajogadorDiv = document.getElementById("id_branco_jogador");
                batalhajogadorDiv.innerHTML = ''; // Limpa qualquer carta anterior
                batalhajogadorDiv.appendChild(cartaCloneDiv);

                // Log para verificar se o processo ocorreu corretamente
                console.log(`Carta ${cartaClonada.nome} foi clonada para o campo de batalha.`);
                
                // Exemplo de uso dinâmico: Atualizar as propriedades do clone conforme o jogador progride
                cartaClonada.ataque += 100; // Exemplo de atualização de atributo
                console.log(`Novo ataque da carta clonada: ${cartaClonada.ataque}`);
            } else {
                console.log("A carta não está em condição de ataque e não pode ser clonada para o campo de batalha.");
            }
        } else if (carta.borda !== "monstro") {
            console.log("A carta selecionada não é um monstro.");
        } else if (carta.condicao !== "campo") {
            console.log("A carta selecionada não está no campo.");
        }
    } else {
        console.log("Nenhuma carta foi selecionada.");
    }
}

// Adiciona evento ao botão 'BATALHAR'
document.getElementById("id_botao_atk").addEventListener("click", function() {
    clonarCartaParaBatalha();
});
