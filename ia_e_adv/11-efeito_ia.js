document.getElementById("id_efeito_ia").addEventListener("click", function() {
    for (let i = 1; i <= 5; i++) {
        const quadro = document.getElementById(`id_magico_adv_${i}`);
        
        if (quadro.innerHTML) {
            // Chama o efeito da carta mágica
            window[`carta_adv_spell${i}`]?.efeito(); // Ativa o efeito, se a carta existir
            
            // Atualiza pontos (supondo que essa lógica esteja definida)
            document.getElementById('id_pontos_jogador').innerHTML = pontos_jogador;
            console.log(`Efeito da carta ativado no quadro ${i}.`);
        } else {
            console.log(`Nenhuma carta no quadro ${i}.`);
        }
    }

 // Percorre os quadros das cartas monstros
 for (let i = 1; i <= 5; i++) {
    const quadroMonstro = document.getElementById(`id_campo_adv_${i}`);
    
    if (quadroMonstro.innerHTML) {
        // Chama o efeito da carta monstro
        const cartaMonstro = window[`carta_adv_monstro${i}`]; // Ajuste o nome conforme necessário
        if (cartaMonstro && typeof cartaMonstro.efeito === 'function') {
            cartaMonstro.efeito(); // Ativa o efeito da carta monstro
            console.log(`Efeito da carta monstro ativado no quadro ${i}.`);
        }
    } else {
        console.log(`Nenhuma carta monstro no quadro ${i}.`);
    }
}

// Atualiza pontos após ativar todos os efeitos
document.getElementById('id_pontos_jogador').innerHTML = pontos_jogador;
});