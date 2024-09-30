// Função para adicionar evento ao botão de ataque
function adicionarEventoBotaoAtaque() {
    let botaoAtaque = document.getElementById("id_botao_ataque");

    if (botaoAtaque) {
        botaoAtaque.addEventListener("click", function() {
            // Encontra todas as cartas clonadas
            let cartasClonadas = document.querySelectorAll(".carta_clonada");
            cartasClonadas.forEach(clone => {
                // Encontra a carta original
                let cartaOriginal = document.getElementById(clone.dataset.originalCartaId);
                if (cartaOriginal) {
                    // Atualiza a propriedade condicao_2 da carta original para "ataque"
                    cartaOriginal.dataset.condicao_2 = "ataque";

                    // Remove a classe de rotação da imagem da carta original
                    cartaOriginal.querySelector("img").classList.remove("girar_90");
                    cartaOriginal.querySelector("img").classList.add("girar_0");

                    // Atualiza o valor da carta no objeto ou array de cartas
                    let carta = vetor.find(c => c.id === cartaOriginal.id); // Assumindo que você tem um vetor com as cartas
                    if (carta) {
                        carta.condicao_2 = "ataque";
                        console.log(`Atualizado no vetor: ${carta.condicao_2}`);
                    }

                    console.log(`Condição atual da carta: ${cartaOriginal.dataset.condicao_2}`);
                }
            });
        });
        console.log("Evento de ataque adicionado ao botão.");
    }
}

// Função para adicionar evento ao botão de defesa
function adicionarEventoBotaoDefesa() {
    let botaoDefesa = document.getElementById("id_botao_defesa");

    if (botaoDefesa) {
        botaoDefesa.addEventListener("click", function() {
            // Encontra todas as cartas clonadas
            let cartasClonadas = document.querySelectorAll(".carta_clonada");
            cartasClonadas.forEach(clone => {
                // Encontra a carta original
                let cartaOriginal = document.getElementById(clone.dataset.originalCartaId);
                if (cartaOriginal) {
                    // Atualiza a propriedade condicao_2 da carta original para "defesa"
                    cartaOriginal.dataset.condicao_2 = "defesa";

                    // Adiciona a classe de rotação ao estilo da imagem da carta original
                    cartaOriginal.querySelector("img").classList.remove("girar_0");
                    cartaOriginal.querySelector("img").classList.add("girar_90");

                    // Atualiza o valor da carta no objeto ou array de cartas
                    let carta = vetor.find(c => c.id === cartaOriginal.id); // Assumindo que você tem um vetor com as cartas
                    if (carta) {
                        carta.condicao_2 = "defesa";
                        console.log(`Atualizado no vetor: ${carta.condicao_2}`);
                    }

                    console.log(`Condição atual da carta: ${cartaOriginal.dataset.condicao_2}`);
                }
            });
        });

        console.log("Evento de defesa adicionado ao botão.");
    }
}

// Adiciona os eventos aos botões de defesa e ataque após os eventos de carta serem configurados
adicionarEventoBotaoDefesa();
adicionarEventoBotaoAtaque();
