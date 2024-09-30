// Inicialização: desabilitar os botões de batalha e fim de turno
document.getElementById('fase_2_batalha').disabled = true;
document.getElementById('fase_3_fim').disabled = true;

// Botão de batalha
document.getElementById('id_botao_batalhar').addEventListener('click', function() {
    // Desabilita o botão de saque
    document.getElementById('fase_1_saque').disabled = true;

    // Habilita o botão de batalha
    document.getElementById('fase_2_batalha').disabled = false;

    console.log('Modo de batalha ativado');
});

// Adicione mais lógica conforme necessário para o botão de "Fim de Turno", se estiver planejado

function aoClicarBatalhar() {
    // Desabilita o botão Saque
    document.getElementById('fase_1_saque').disabled = true;

    // Habilita o botão Batalha
    document.getElementById('fase_2_batalha').disabled = false;

    console.log('Botão Saque desabilitado e Botão Batalha habilitado');
}

// Adiciona o evento 'click' ao botão "BATALHAR!"
document.getElementById('id_botao_batalhar').addEventListener('click', aoClicarBatalhar);