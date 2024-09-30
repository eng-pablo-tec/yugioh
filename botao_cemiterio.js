document.getElementById('botao_cemiterio_adv').addEventListener('click', function() {
    document.querySelector('#tela_cemiterio_adv').style.display = 'flex';
    document.getElementById('tela_cemiterio_jog').style.display = 'none';
});

document.getElementById('botao_cemiterio_jog').addEventListener('click', function() {
    document.querySelector('#tela_cemiterio_jog').style.display = 'flex';
    document.getElementById('tela_cemiterio_adv').style.display = 'none';
});


document.getElementById('botao_cemiterio_sair').addEventListener('click', function() {
    document.querySelector('#tela_cemiterio_jog').style.display = 'none';
    document.getElementById('tela_cemiterio_adv').style.display = 'none';
});