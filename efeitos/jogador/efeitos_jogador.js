// efeitos.js

// Efeito Aumentar Pontos jog
function efeitoMaisPontosjog(pontos) {
    pontos_jog += pontos;
    document.getElementById('id_pontos_jog').innerHTML = pontos_jog;
}

// Efeito Tirar Pontos adv
function efeitoMenosPontosadv(pontos) {
    pontos_adv -= pontos;
    document.getElementById('id_pontos_adv').innerHTML = pontos_adv;
}

// Efeito Tirar Pontos adv
function efeitoMenosDividiradv(pontos) {
    pontos_adv = pontos_adv/pontos;
    document.getElementById('id_pontos_adv').innerHTML = pontos_adv;
}

// Efeito Tirar Pontos adv
function efeitoMaisMultiplicarjog(pontos) {
    pontos_jog = pontos_adv*pontos;
    document.getElementById('id_pontos_jog').innerHTML = pontos_jog;
}