// Função para adicionar uma carta ao cemitério
function adicionarAoCemiterio(carta) {
    const cemiterio = window.cemiterio || [];
    cemiterio.push({ ...carta });
    window.cemiterio = cemiterio; // Atualiza a variável global

    // Atualiza a visualização do cemitério
    atualizarCemiterioJogador();
}

// Função para atualizar a exibição do cemitério do jogador
function atualizarCemiterioJogador() {
    const cemiterioJogadorDiv = document.getElementById('tela_cemiterio_jog');
    cemiterioJogadorDiv.innerHTML = ''; // Limpa a exibição anterior

    window.cemiterio.forEach(carta => {
        const cartaDiv = document.createElement('div');
        cartaDiv.className = 'carta-cemiterio'; // Classe para estilização, se necessário

        // Cria a imagem da carta
        const imagemCarta = document.createElement('img');
        imagemCarta.src = carta.imagem; // A URL da imagem da carta
        imagemCarta.alt = carta.nome; // Texto alternativo
        imagemCarta.className = 'imagem-carta'; // Classe para estilização, se necessário

        // Adiciona a imagem à div da carta
        cartaDiv.appendChild(imagemCarta);
        cemiterioJogadorDiv.appendChild(cartaDiv);
    });
}

// Função de batalha IA
function batalhaIA() {
    console.log("Iniciando a batalha IA...");
    const monstrosAdv = [];
    const monstrosJogador = [];

    // Coleta os monstros do adversário
    let infoMonstrosAdv = "";
    for (let i = 1; i <= 5; i++) {
        const quadro = document.getElementById(`id_campo_adv_${i}`);
        if (quadro.innerHTML) {
            const cartaMonstro = window[`carta_adv_monstro${i}`];
            if (cartaMonstro) {
                monstrosAdv.push(cartaMonstro);
                infoMonstrosAdv += `${cartaMonstro.nome} (Ataque: ${cartaMonstro.ataque})\n`;
            }
        }
    }
    alert("Monstros do adversário:\n" + infoMonstrosAdv);
    console.log("Monstros do adversário:", monstrosAdv);

    // Coleta os monstros do jogador
    let infoMonstrosJogador = "";
    for (let j = 0; j < campo_monstro_jogador.length; j++) {
        const cartaMonstro = campo_monstro_jogador[j];
        if (cartaMonstro && cartaMonstro.condicao) {
            monstrosJogador.push(cartaMonstro);
            infoMonstrosJogador += `${cartaMonstro.nome} (Ataque: ${cartaMonstro.ataque})\n`;
        }
    }

    // Verifica se existem monstros do jogador antes de mostrar o alerta
    if (infoMonstrosJogador) {
        alert("Monstros do jogador:\n" + infoMonstrosJogador);
    } else {
        alert("Nenhum monstro encontrado no campo do jogador.");
    }

    console.log("Monstros do jogador:", monstrosJogador);

    // Lógica de batalha
    monstrosAdv.forEach(monstroAdv => {
        for (let i = 0; i < monstrosJogador.length; i++) {
            const monstroJogador = monstrosJogador[i];
            if (monstroAdv.ataque > monstroJogador.ataque) {
                const diferencaAtaque = monstroAdv.ataque - monstroJogador.ataque;
                const mensagem = `${monstroAdv.nome} ataca ${monstroJogador.nome} e vence com uma diferença de ${diferencaAtaque} pontos!`;

                alert(mensagem);
                console.log(mensagem);

                // Diminui os pontos do jogador pela diferença de ataque
                pontos_jogador -= diferencaAtaque; 
                document.getElementById('id_pontos_jogador').innerHTML = pontos_jogador;
                console.log(`Pontos do jogador reduzidos para: ${pontos_jogador}`);

                // Adiciona a carta derrotada ao cemitério
                adicionarAoCemiterio(monstroJogador);
                console.log(`A carta ${monstroJogador.nome} foi enviada para o cemitério.`);

                // Remove a carta do campo
                const quadroJogador = document.getElementById(`id_campo_jogador_${i + 1}`);
                quadroJogador.innerHTML = ""; // Limpa o slot

                // Remove a carta do array do jogador
                campo_monstro_jogador.splice(i, 1); // Remove a carta do array do jogador
                break; // Para evitar ataques múltiplos do mesmo monstro
            } else {
                console.log(`${monstroJogador.nome} consegue resistir ao ataque de ${monstroAdv.nome}.`);
            }
        }
    });
}

// Adiciona evento de clique ao botão
document.getElementById("id_batalha_ia").addEventListener("click", batalhaIA);