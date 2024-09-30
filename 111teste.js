// Função do botão id_teste111
document.getElementById('id_teste111').addEventListener('click', function() {
    // Verificar se o objeto carta_adv existe e tem a propriedade nome
    if (typeof carta_adv !== 'undefined' && carta_adv.nome) {
        // Criar uma nova div para exibir o nome da carta
        const novaDivNome = document.createElement('div');

        // Adicionar o nome da carta à nova div
        novaDivNome.innerHTML = `<strong>${carta_adv.nome}</strong>`;

        // Inserir a nova div na div id_branco_adv
        const divBrancoAdv = document.getElementById('id_branco_adv');
        divBrancoAdv.appendChild(novaDivNome);

        // Armazenar no objeto carta_adv_batalha
        carta_adv_batalha.clonagem = carta_adv.nome;
        console.log(carta_adv_batalha);
    } else {
        console.error("carta_adv não está definido ou não tem a propriedade 'nome'.");
    }
});