    document.getElementById('id_luta').onclick = function() {
        // Captura os objetos diretamente das divs
        const carta_adv = window.carta_adv; // O objeto já existe no escopo global
        const carta_jogador = window.carta_jogador; // O objeto já existe no escopo global

        if (carta_adv.ataque > carta_jogador.ataque) {
            alert("Adversário ganhou!");
        } else if (carta_adv.ataque < carta_jogador.ataque) {
            alert("Jogador ganhou!");
        } else {
            alert("Empate!");
        }
    };