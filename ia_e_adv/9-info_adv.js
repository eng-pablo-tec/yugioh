// Função para clicar nas cartas e aparecer info na lateral esquerda com imagem
function clicarInfoAdvCartas() {
    let cartas = document.querySelectorAll('.carta');

    cartas.forEach(carta => {
        // Adiciona propriedades de dados ao elemento carta, se ainda não estiverem presentes
        if (!carta.dataset.nome) {
            carta.dataset.nome = carta.cartaInfo?.nome || 'Nome desconhecido';
            carta.dataset.ataque = carta.cartaInfo?.ataque || 'Desconhecido';
            carta.dataset.defesa = carta.cartaInfo?.defesa || 'Desconhecido';
            carta.dataset.textoDescricao = carta.cartaInfo?.texto_descricao || 'Sem descrição';
            carta.dataset.efeitoDescricao = carta.cartaInfo?.efeito_descricao || 'Sem efeito';
            carta.dataset.elemento = carta.cartaInfo?.elemento || 'Desconhecido';
            carta.dataset.estrelas = carta.cartaInfo?.estrelas || 'Desconhecido';
            carta.dataset.raca = carta.cartaInfo?.raça || 'Desconhecida';
            carta.dataset.borda = carta.cartaInfo?.borda || 'Desconhecida';
            carta.dataset.condicao = carta.cartaInfo?.condicao || 'Desconhecida';
            carta.dataset.condicao2 = carta.cartaInfo?.condicao_2 || 'Desconhecida';
            carta.dataset.stamina = carta.cartaInfo?.stamina || 'Desconhecido';
            carta.dataset.mana = carta.cartaInfo?.mana || 'Desconhecido';
        }

        carta.addEventListener('click', function() {
            let cartaCloneDiv = document.createElement('div');
            cartaCloneDiv.className = 'carta_clonada';
            cartaCloneDiv.innerHTML = `
                <img src="${carta.dataset.imagem}" alt="${carta.dataset.nome}">
                <div><strong>Nome:</strong> ${carta.dataset.nome}</div>
                <div><strong>Ataque:</strong> ${carta.dataset.ataque}</div>
                <div><strong>Defesa:</strong> ${carta.dataset.defesa}</div>
                <div><strong>Descrição:</strong> ${carta.dataset.textoDescricao}</div>
                <div><strong>Efeito:</strong> ${carta.dataset.efeitoDescricao}</div>
                <div><strong>Elemento:</strong> ${carta.dataset.elemento}</div>
                <div><strong>Estrelas:</strong> ${carta.dataset.estrelas}</div>
                <div><strong>Raça:</strong> ${carta.dataset.raca}</div>
                <div><strong>Tipo:</strong> ${carta.dataset.borda}</div>
                <div><strong>Stamina:</strong> ${carta.dataset.stamina}</div>
                <div><strong>Mana:</strong> ${carta.dataset.mana}</div>
            `;

            let infoContainer = document.getElementById('id_esquerda_carta');
            infoContainer.innerHTML = ''; // Limpa o container antes de adicionar a nova informação
            infoContainer.appendChild(cartaCloneDiv);
        });
    });
}