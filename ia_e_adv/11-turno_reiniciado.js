// Função que é chamada quando o turno é reiniciado
function turnoReiniciado() {
    saques = saques +1;
    console.log(`Saque atualizado: ${saques}`);
    invocar_monstro = invocar_monstro + 1;

    document.querySelector('.turno_oponente').style.display = 'none';
}