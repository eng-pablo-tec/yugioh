let contador_mao = 1;

// botão Saque ia
document.getElementById("id_teste222").addEventListener("click", function() {

    if (baralho1_vilao1.length === 0) {
        alert("Acabaram as cartas!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * baralho1_vilao1.length);
    const cartaSaque = baralho1_vilao1[indiceAleatorio];
    baralho1_vilao1.splice(indiceAleatorio, 1);

    // Armazenar a carta com as novas propriedades
    window["carta_adv_mao" + contador_mao] = { 
        ...cartaSaque, 
        nome2: `carta_adv_mao${contador_mao}`, // Nome padrão
        nome: cartaSaque.nome // Nome real da carta
    };

    const maoAdv = document.getElementById("id_mao_adv");
    const cartaDiv = document.createElement("div");
    cartaDiv.className = "carta";
    cartaDiv.innerHTML = `
        <img src="${window["carta_adv_mao" + contador_mao].imagem}" alt="${window["carta_adv_mao" + contador_mao].nome}" style="width:100%;">
    `;
    maoAdv.appendChild(cartaDiv);
    
    console.log(`Da carta "${window["carta_adv_mao" + contador_mao].nome}" é o objeto carta_adv_mao${contador_mao}`);
    contador_mao++;
});
