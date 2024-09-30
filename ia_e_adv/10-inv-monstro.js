let contador_invocar = 1; // Inicializa o contador de invocações

document.getElementById("id_invocar_monstro").addEventListener("click", function() {
    let maiorAtaque = 0;
    let cartaComMaiorAtaque = null;
    let indiceCarta = -1;

    // Encontrar a carta com o maior ataque
    for (let inv_monstro = 1; inv_monstro < contador_mao; inv_monstro++) {
        const carta = window["carta_adv_mao" + inv_monstro];
        if (carta && carta.borda === "monstro" && carta.ataque > maiorAtaque) {
            maiorAtaque = carta.ataque;
            cartaComMaiorAtaque = carta;
            indiceCarta = inv_monstro; // Armazena o índice da carta
        }
    }

    // Verificar se todos os slots do campo estão ocupados
    let todosOcupados = true;
    for (let j = 1; j <= 5; j++) {
        const quadro = document.getElementById(`id_campo_adv_${j}`);
        if (!quadro.innerHTML) {
            todosOcupados = false;
            break;
        }
    }

    if (todosOcupados) {
        alert("Todos os slots do campo estão ocupados!");
        return;
    }

    // Se uma carta foi encontrada, clona no campo e remove da mão
    if (cartaComMaiorAtaque) {
        for (let j = 1; j <= 5; j++) {
            const quadro = document.getElementById(`id_campo_adv_${j}`);
            if (!quadro.innerHTML) {
                // Define o novo nome para a carta invocada
                const novoNome = `carta_adv_monstro${contador_invocar}`;
                
                // Clona a carta como um objeto, incluindo nome2
                const cartaInvocada = { 
                    ...cartaComMaiorAtaque, 
                    nome: cartaComMaiorAtaque.nome, // Nome real da carta
                    nome2: novoNome // Nome padrão
                };
                
                // Adiciona a imagem da carta invocada ao campo
                quadro.innerHTML = `
                    <img src="${cartaInvocada.imagem}" alt="${cartaInvocada.nome}" style="width:100%;" onclick="mostrarInformacoes('${novoNome}')">
                `;
                
                // Armazena a carta invocada na variável global para referência futura
                window[novoNome] = cartaInvocada;

                // Remove a carta da mão
                window["carta_adv_mao" + indiceCarta] = null; // Marca como removida
                atualizarMaoAdv();
                
                console.log(`Invocando carta: ${novoNome} com ataque ${cartaInvocada.ataque}`);
                
                // Incrementa o contador de invocações
                contador_invocar++;
                break;
            }
        }
    } else {
        console.log("Nenhum monstro encontrado na mão para invocar.");
    }
});
