// Função para mostrar informações da carta
function mostrarInformacoes(nome) {
    const carta = window[nome];
    if (carta) {
        document.getElementById("id_esquerda_carta").innerHTML = `
            <img src="${carta.imagem}" alt="${carta.nome}" style="width:100%;"><br>
            <div>Nome: ${carta.nome}</div>
            <div>Ataque: ${carta.ataque}</div>
            <div>Defesa: ${carta.defesa}</div>
            <div>Descrição: ${carta.texto_descricao}</div>
            <div>Efeito: ${carta.efeito_descricao}</div>
            <div>Elemento: ${carta.elemento}</div>
            <div>Estrelas: ${carta.estrelas}</div>
            <div>Raça: ${carta.raça}</div>
            <div>Stamina: ${carta.stamina}</div>
            <div>Mana: ${carta.mana}</div>
        `;
    }
}