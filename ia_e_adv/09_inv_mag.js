let i_inv_mag = 1;

document.getElementById("id_teste333").addEventListener("click", function() {
    for (let i = 1; i < contador_mao; i++) {
        const carta = window["carta_adv_mao" + i];

        if (carta && carta.borda === "spell") {
            console.log(`Invocando carta: ${carta.nome}, índice: ${i}`);

            for (let j = 1; j <= 5; j++) {
                const quadro = document.getElementById(`id_magico_adv_${j}`);
                
                if (!quadro.innerHTML) {
                    // Define o novo nome para a carta invocada
                    const novoNome = `carta_adv_spell${i_inv_mag}`;
                    
                    // Clona a carta como um objeto
                    const cartaInvocada = { 
                        ...carta, 
                        nome: carta.nome, // Nome real da carta
                        nome2: novoNome // Nome padrão
                    };
                    
                    // Adiciona a imagem da carta invocada ao campo
                    quadro.innerHTML = `
                        <img src="${cartaInvocada.imagem}" alt="${cartaInvocada.nome}" style="width:100%;" onclick="mostrarInformacoes('${novoNome}')">
                    `;
                    
                    // Armazena a carta invocada na variável global para referência futura
                    window[novoNome] = cartaInvocada;

                    // Marca a carta como removida
                    console.log(`Removendo carta: ${carta.nome}, índice: ${i}`);
                    window["carta_adv_mao" + i] = null;

                    i_inv_mag++;

                    atualizarMaoAdv();
                    break;
                }
            }
        }
    }
});

function atualizarMaoAdv() {
    const maoAdv = document.getElementById("id_mao_adv");
    maoAdv.innerHTML = ""; 

    for (let i = 1; i < contador_mao; i++) {
        const carta = window["carta_adv_mao" + i];
        if (carta) {
            const cartaDiv = document.createElement("div");
            cartaDiv.className = "carta";
            cartaDiv.innerHTML = `
                <img src="${carta.imagem}" alt="${carta.nome}" style="width:100%;">
            `;
            maoAdv.appendChild(cartaDiv);
        }
    }
}
