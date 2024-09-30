//colocar a carta no campo como objeto, igual teste000


// Definindo variáveis globais
let saque_adv = 5; // Inicializa a quantidade de cartas que o adversário pode sacar
let animação_adv_1 = false; // Para controlar a animação

// Função para jogar o turno do adversário
async function jogarTurnoAdversario() {
    console.log('Iniciando o turno do adversário.');

        // Muda a classe CSS para mostrar o turno do adversário
        document.querySelector('.turno_oponente').style.display = 'flex';

    // Aumenta a quantidade de cartas que o adversário pode sacar
    saque_adv += 1;

    // Verifica se há cartas no baralho do adversário
    if (!baralho1_vilao1 || baralho1_vilao1.length === 0) {
        console.log('Não há mais cartas no baralho do adversário.');
        return;
    }

    // O adversário saca cartas até que 'saque_adv' seja 0 ou o baralho acabe
    while (saque_adv > 0 && baralho1_vilao1.length > 0) {
        if (animação_adv_1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            continue;
        }
        animação_adv_1 = true;

        let aleatorio = Math.floor(Math.random() * baralho1_vilao1.length);
        let cartaSelecionada = baralho1_vilao1[aleatorio];
        baralho1_vilao1.splice(aleatorio, 1);

        // Cria o elemento da carta e adiciona à mão do adversário
        let maoAdv = document.querySelector('.mao_adv');
        let cartaDiv = document.createElement('div');
        cartaDiv.className = 'carta';

        // Armazena todas as propriedades da carta no elemento como uma propriedade do objeto
        cartaDiv.cartaInfo = {
            numero: cartaSelecionada.numero,
            nome: cartaSelecionada.nome,
            batalhar: cartaSelecionada.batalhar,
            ataque: cartaSelecionada.ataque,
            defesa: cartaSelecionada.defesa,
            texto_descricao: cartaSelecionada.texto_descricao,
            efeito: cartaSelecionada.efeito,
            efeito_descricao: cartaSelecionada.efeito_descricao,
            elemento: cartaSelecionada.elemento,
            estrelas: cartaSelecionada.estrelas,
            raça: cartaSelecionada.raça,
            imagem: cartaSelecionada.imagem,
            borda: cartaSelecionada.borda,
            condicao: cartaSelecionada.condicao,
            condicao_2: cartaSelecionada.condicao_2,
            stamina: cartaSelecionada.stamina,
            mana: cartaSelecionada.mana
        };

        cartaDiv.innerHTML = `
            <img src="${cartaSelecionada.imagem}" alt="${cartaSelecionada.nome}">
            <p>${cartaSelecionada.nome}</p>
        `;
        cartaDiv.dataset.borda = cartaSelecionada.borda; // Adiciona a borda como dado
        cartaDiv.dataset.imagem = cartaSelecionada.imagem; // Adiciona a URL da imagem como dado
        maoAdv.appendChild(cartaDiv);

        // Log da carta sacada
        console.log(`Carta sacada: ${cartaSelecionada.nome}`);

        // Diminui o número de cartas que o adversário pode sacar
        saque_adv--;

        // Espera 1 segundo antes de sacar a próxima carta
        await new Promise(resolve => setTimeout(resolve, 1000));

        animação_adv_1 = false;
    }

    // Move uma carta de borda 'monstro' da mão do adversário para o campo do adversário
    let cartasMaosAdv = Array.from(document.querySelectorAll('.mao_adv .carta'));
    for (let carta of cartasMaosAdv) {
        if (carta.dataset.borda === 'monstro') {
            let campoAleatorioAdv = Array.from(document.querySelectorAll('#id_campo_monstro_adv .quadro')).find(campo => campo.children.length === 0);
            if (campoAleatorioAdv) {
                carta.classList.add('carta_adv');
                campoAleatorioAdv.appendChild(carta);

                // Log da carta colocada no campo de monstros
                console.log(`Carta colocada no campo de monstros: ${carta.cartaInfo.nome}`);

                // Espera 1 segundo
                await new Promise(resolve => setTimeout(resolve, 1000));
                break; // Adiciona apenas uma carta de monstro por vez
            }
        }
    }

    // Move todas as cartas de borda 'spell' da mão do adversário para o campo do adversário
    for (let carta of cartasMaosAdv) {
        if (carta.dataset.borda === 'spell') {
            let campoAleatorioSpellAdv = Array.from(document.querySelectorAll('#id_campo_mag_adv .quadro')).find(campo => campo.children.length === 0);
            if (campoAleatorioSpellAdv) {
                carta.classList.add('carta_adv');
                campoAleatorioSpellAdv.appendChild(carta);

                // Log da carta colocada no campo de magias
                console.log(`Carta colocada no campo de magias: ${carta.cartaInfo.nome}`);

                // Espera 1 segundo
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    }

    // Ativa o efeito de todas as cartas de borda 'spell' no campo do adversário
    document.querySelectorAll('#id_campo_mag_adv .carta').forEach(carta => {
        if (carta.cartaInfo && carta.cartaInfo.efeito) {
            carta.cartaInfo.efeito(); // Ativa o efeito da carta
            console.log(`Efeito ativado para a carta de magia: ${carta.cartaInfo.nome}`);
        }
    });

    // Espera 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Ativa o efeito de todos os monstros no campo do adversário
    document.querySelectorAll('#id_campo_monstro_adv .carta').forEach(carta => {
        if (carta.cartaInfo && carta.cartaInfo.efeito) {
            carta.cartaInfo.efeito(); // Ativa o efeito do monstro
            console.log(`Efeito ativado para o monstro: ${carta.cartaInfo.nome}`);
        }
    });

    // Verifica todas as cartas no campo do adversário
    verificarCartasCampoAdv();

    // Espera 1 segundo antes de clicar nas cartas e logar
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Clica nas cartas e ativa o log
    clicarInfoAdvCartas();

    console.log('Turno do adversário finalizado.');    

    // Reinicia o turno, stamina, cuncar +1, etc
    turnoReiniciado();
}

// Função para verificar todas as cartas no campo do adversário
function verificarCartasCampoAdv() {
    console.log('Verificando cartas no campo do adversário.');
    
    // Verifica cartas no campo de monstros e magias do adversário
    let campoMonstroAdv = document.querySelectorAll('#id_campo_monstro_adv .carta');
    let campoMagAdv = document.querySelectorAll('#id_campo_mag_adv .carta');

    campoMonstroAdv.forEach(carta => {
        console.log(`Carta no campo de monstros: ${carta.cartaInfo.nome}`);
    });

    campoMagAdv.forEach(carta => {
        console.log(`Carta no campo de magias: ${carta.cartaInfo.nome}`);
    });

    // Adicione mais verificações ou lógica conforme necessário
}

// Função para reiniciar o turno e a stamina
function turnoReiniciado() { 
    console.log('Reiniciando o turno.');
    // Adicione lógica para reiniciar o turno, stamina, etc.
}

// Adiciona o event listener ao botão para finalizar o turno
document.getElementById('id_finalizar_turno').addEventListener('click', function() {
    console.log('Finalizando o turno...');
    jogarTurnoAdversario();
});