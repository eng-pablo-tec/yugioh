// Adiciona evento ao botão 'BATALHA!'
document.getElementById("id_luta").addEventListener("click", function() {
    // Obtém a div que contém a carta clonada
    let batalhaJogadorDiv = document.getElementById("id_branco_jogador");
    
    // Verifica se a div está vazia
    if (batalhaJogadorDiv.innerHTML.trim() === '') {
        alert("Não há cartas clonadas no campo de batalha.");
    } else {
        // Obtém a carta clonada (assumindo que é a única carta na div)
        let cartaClonada = batalhaJogadorDiv.querySelector(".carta_clonada_batalha");
        
        // Se a carta clonada existe, exibe suas propriedades
        if (cartaClonada) {
            // Cria uma lista de propriedades da carta
            let propriedades = `
                Nome: ${cartaClonada.getAttribute("data-nome")}
                Ataque: ${cartaClonada.getAttribute("data-ataque")}
                Defesa: ${cartaClonada.getAttribute("data-defesa")}
                Batalhar: ${cartaClonada.getAttribute("data-batalhar")}
                Imagem: ${cartaClonada.getAttribute("data-imagem")}
                Borda: ${cartaClonada.getAttribute("data-borda")}
                Condição: ${cartaClonada.getAttribute("data-condicao")}
                Condição 2: ${cartaClonada.getAttribute("data-condicao_2")}
                Condição 3: ${cartaClonada.getAttribute("data-condicao_3")}
            `;
            alert("Propriedades da carta clonada:\n" + propriedades);
        } else {
            alert("Nenhuma carta clonada encontrada.");
        }
    }
});
