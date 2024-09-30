let pontos_adversario = 8000;
let pontos_jogador = 8000;

document.getElementById('id_pontos_adversario').innerHTML = pontos_adversario;
document.getElementById('id_pontos_jogador').innerHTML = pontos_jogador;

// Campos jogador
let campo_monstro_jogador = [0, 0, 0, 0, 0];
let campo_magico_jogador = [0, 0, 0, 0, 0];

// Campos adversário
let campo_monstro_adv = [0, 0, 0, 0, 0];
let campo_magico_adv = [0, 0, 0, 0, 0];

let cuncar = document.getElementById("id_baralho");
let mao = document.getElementById("id_mao");
let monstro = document.getElementById("id_campo_monstro_personagem");
let magico = document.getElementById("id_campo_mag_personagem");
let vetor =[];

let animacao_efeito = "efeitooooo";
let turno = 1;
document.getElementById('id_turno').innerHTML = `O turno é: ${turno}.`;

function novo_turno() {
    turno++; // Incrementa o turno
    document.getElementById('id_turno').innerHTML = `o turno é ${turno}`; // Atualiza o HTML
}


//FullScreen

    const fullscreenButton = document.getElementById('botao_fullscreen');

    fullscreenButton.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Erro ao tentar ativar o modo tela cheia: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });