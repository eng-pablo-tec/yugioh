let saques = 40; // Variável para contar o número de saques restantes
let animacaoEmAndamento = false;

// Função para sacar uma carta
cuncar.addEventListener("click", function () {
    // Se uma animação estiver em andamento, não permitir novos cliques
    if (animacaoEmAndamento) {
        return;
    }
    // Limita o número de cartas na mão
    if (mao.children.length >= 7) {
        alert("Não pode sacar mais cartas");
        return;
    }

    // Verifica se há cartas no baralho
    if (baralho.length === 0) {
        alert("Não há mais cartas no baralho.");
        return;
    }

    // Verifica se ainda há saques disponíveis
    if (saques <= 0) {
        alert("Número máximo de saques atingido.");
        return;
    }

    // Define que uma animação está em andamento
    animacaoEmAndamento = true;

    // Seleciona uma carta aleatória do baralho
    let aleatorio = Math.floor(Math.random() * baralho.length);
    let carta_selecionada = baralho[aleatorio];

    // Cria o elemento de carta na mão (antes da animação)
    let carta_div = document.createElement("div");
    carta_div.className = "carta";
    let carta_id = mao.children.length + 1;
    carta_div.id = "carta_" + carta_id;

    // Adiciona a imagem da carta ao elemento
    carta_div.innerHTML = `<img src="${carta_selecionada.imagem}">`;

    // Posiciona a carta inicialmente no baralho
    document.querySelector('#id_baralho').appendChild(carta_div);

    // Aguarda o próximo frame para aplicar a animação
    requestAnimationFrame(() => {
        carta_div.classList.add("animar");
    });

    // Quando a animação termina, move a carta para a mão de forma definitiva
    setTimeout(() => {
        carta_div.classList.remove("animar"); // Remove a animação
        mao.appendChild(carta_div); // Adiciona a carta na mão
        vetor.push(carta_selecionada); // Adiciona ao vetor

        // Remove a carta do baralho
        baralho.splice(aleatorio, 1);

        // Define que a animação terminou e decrementa o contador de saques
        animacaoEmAndamento = false;
        saques--; // Diminui o número de saques disponíveis
    }, 1000); // Tempo da animação de 1 segundo
});