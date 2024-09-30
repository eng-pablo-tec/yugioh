let baralho1_vilao1 = [
    {
        numero: 1001,
        nome: "Demonio dos Ossos",
        nome2: "2Demonio dos Ossos",
        batalhar: 3500,
        ataque: 3500,
        defesa: 3125,
        texto_descricao: "Um Poderoso Demônio.",
        efeito: function() {            
            // Verifica se a mana é maior que 0
            if (this.mana >= 1) {
            pontos_jogador -= 500;
            document.getElementById('id_pontos_jogador').innerHTML = pontos_jogador;
            this.mana--; // Diminui o mana em 1
            console.log(`mana restante: ${this.mana}`);
        } else {
            console.log("mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Reduz 500 pontos de vida do adversário.",
        elemento: "Trevas",
        estrelas: 8,
        raça: "Demônio",
        imagem: "img/cartas/2.png",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1002,
        nome: "Fogo Brabo",
        nome2: "2Fogo Brabo",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Um Fogo Gigante.",
        efeito: function() {
            // Verifica se a mana é maior que 0
            if (this.mana >= 1) {
                pontos_jogador -= 1500;
                document.getElementById('id_pontos_jogador').innerHTML = pontos_jogador;
                this.mana--; // Diminui a mana em 1
                console.log(`mana restante: ${this.mana}`);
            } else {
                console.log("mana insuficiente para executar o efeito.");
            }
        },
        efeito_descricao: "Reduz 500 pontos de vida do adversário.",
        elemento: "Fogo",
        estrelas: 5,
        raça: "Magia",
        imagem: "img/cartas/4.jpg",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1003,
        nome: "Mago Sombrio",
        nome2: "2Mago Sombrio",
        batalhar: 2800,
        ataque: 2800,
        defesa: 2600,
        texto_descricao: "Mestre da Magia Sombria.",
        efeito: function() {
            // Verifica se a mana é maior que 0
            if (this.mana >= 1) {
                pontos_jogador -= 500;
                document.getElementById('id_pontos_jogador').innerHTML = pontos_jogador;
                this.mana--; // Diminui a mana em 1
                console.log(`mana restante: ${this.mana}`);
            } else {
                console.log("mana insuficiente para executar o efeito.");
            }
        },
        efeito_descricao: "Ganha 300 pontos de vida.",
        elemento: "Trevas",
        estrelas: 7,
        raça: "Mago",
        imagem: "img/cartas/5.jpg",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1004,
        nome: "Campo de Scorpion",
        nome2: "2Campo de Scorpion",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Aumenta o Ataque dos Monstros Treva Inferno.",
        efeito: function() {
            if (this.mana >= 1) {
            pontos_adversario += 2000;
            document.getElementById('id_pontos_adversario').innerHTML = pontos_adversario;
            this.mana--; // Diminui o mana em 1
            console.log(`mana restante: ${this.mana}`);
        } else {
            console.log("mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Ganha 300 pontos de vida.",
        elemento: "Fogo",
        estrelas: 5,
        raça: "Magia",
        imagem: "img/cartas/8.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1005,
        nome: "Dragão é Nois",
        nome2: "2Dragão é Nois",
        batalhar: 100,
        ataque: 100,
        defesa: 100,
        texto_descricao: "Dragão é Nois.",
        efeito: function() {
            if (this.mana >= 1) {
            pontos_adversario += 5000;
            document.getElementById('id_pontos_adversario').innerHTML = pontos_adversario;
            this.mana--; // Diminui o mana em 1
            console.log(`mana restante: ${this.mana}`);
        } else {
            console.log("mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Canta e outros dragoes dão pontos de vida para o Jogador.",
        elemento: "Vento",
        estrelas: 4,
        raça: "Dragão",
        imagem: "img/cartas/9.png",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1006,
        nome: "Cura Arvore Oculta",
        nome2: "2Cura Arvore Oculta",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Recupera Pontos de Vida.",
        efeito: function() {
            if (this.mana >= 1) {
            pontos_adversario += 15000;
            document.getElementById('id_pontos_adversario').innerHTML = pontos_adversario;
            this.mana--; // Diminui o mana em 1
            console.log(`mana restante: ${this.mana}`);
        } else {
            console.log("mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Ganha 500 pontos de vida.",
        elemento: "Luz",
        estrelas: 3,
        raça: "Magia",
        imagem: "img/cartas/10.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1007,
        nome: "Poção de Veneno Feia",
        nome2: "2Poção de Veneno Feia",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Uma Poção de Veneno.",
        efeito: function() {
            // Verifica se a mana é maior que 0
            if (this.mana >= 1) {
                pontos_jogador -= 2000;
                document.getElementById('id_pontos_jogador').innerHTML = pontos_jogador;
                this.mana--; // Diminui a mana em 1
                console.log(`mana restante: ${this.mana}`);
            } else {
                console.log("mana insuficiente para executar o efeito.");
            }
        },
        efeito_descricao: "Reduz 1500 pontos de vida do adversário.",
        elemento: "Terra",
        estrelas: 6,
        raça: "Magia",
        imagem: "img/cartas/11.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1008,
        nome: "Saggi, O Palhaço das Trevas",
        nome2: "2Saggi, O Palhaço das Trevas",
        batalhar: 600,
        ataque: 600,
        defesa: 1500,
        texto_descricao: "Um Palhaço das Trevas.",
        efeito: function() {
            // Verifica se a mana é maior que 0
            if (this.mana >= 1) {
            //"Aprisiona o adversario que atacou, em 5 turnos.";
        pontos_adversario = pontos_adversario*1.5;
        document.getElementById('id_pontos_adversario').innerHTML = pontos_adversario;
        this.mana--; // Diminui a mana em 1
        console.log(`mana restante: ${this.mana}`);
    } else {
        console.log("mana insuficiente para executar o efeito.");
    }
},
        efeito_descricao: "Aprisiona o adversario que atacou, em 5 turnos.",
        elemento: "Trevas",
        estrelas: 3,
        raça: "Mago",
        imagem: "img/cartas/15.webp",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1009,
        nome: "Peter, O Palhaço das Trevas",
        nome2: "2Peter, O Palhaço das Trevas",
        batalhar: 600,
        ataque: 600,
        defesa: 1500,
        texto_descricao: "Mestre das Trevas.",
        efeito: function() {
            // Verifica se a mana é maior que 0
            if (this.mana >= 1) {
            //"Aprisiona o adversario que atacou, em 5 turnos.";
        pontos_adversario = pontos_adversario*1.5;
        document.getElementById('id_pontos_adversario').innerHTML = pontos_adversario;
        this.mana--; // Diminui a mana em 1
        console.log(`mana restante: ${this.mana}`);
    } else {
        console.log("mana insuficiente para executar o efeito.");
    }
},
        efeito_descricao: "Reduz 400 pontos de vida do adversário.",
        elemento: "Trevas",
        estrelas: 6,
        raça: "Mestre",
        imagem: "img/cartas/16.webp",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1010,
        nome: "Escudo das Trevas",
        nome2: "2Escudo das Trevas",
        batalhar: 300,
        ataque: 300,
        defesa: 2000,
        texto_descricao: "Uma Fada de Luz.",
        efeito: function() {
            // Verifica se a mana é maior que 0
            if (this.mana >= 1) {
                pontos_jogador -= 400;
                document.getElementById('id_pontos_jogador').innerHTML = pontos_jogador;
                this.mana--; // Diminui a mana em 1
                console.log(`mana restante: ${this.mana}`);
            } else {
                console.log("mana insuficiente para executar o efeito.");
            }
        },
        efeito_descricao: "Recupera uma carta magica do cemiterio.",
        elemento: "Luz",
        estrelas: 1,
        raça: "Fada",
        imagem: "img/cartas/14.webp",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1011,
        nome: "O Gigante Grande Branco",
        nome2: "2O Gigante Grande Branco",
        batalhar: 3000,
        ataque: 3000,
        defesa: 800,
        texto_descricao: "Um Peixe das Aguas.",
        efeito: function() {
            // Verifica se a mana é maior que 0
            if (this.mana >= 1) {
            pontos_adversario += 300;
            document.getElementById('id_pontos_adversario').innerHTML = pontos_adversario;
            this.mana--; // Diminui o mana em 1
            console.log(`mana restante: ${this.mana}`);
        } else {
            console.log("mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Reduz 300 pontos de vida do adversário.",
        elemento: "Agua",
        estrelas: 5,
        raça: "Peixe",
        imagem: "img/cartas/19.webp",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    },
    {
        numero: 1012,
        nome: "Dragão das Águas",
        nome2: "2Dragão das Águas",
        batalhar: 2250,
        ataque: 2250,
        defesa: 1900,
        texto_descricao: "Um Dragão da Água.",
        efeito: function() {
            // Verifica se a mana é maior que 0
            if (this.mana >= 1) {
            pontos_adversario += 350;
            document.getElementById('id_pontos_adversario').innerHTML = pontos_adversario;
            this.mana--; // Diminui o mana em 1
            console.log(`mana restante: ${this.mana}`);
        } else {
            console.log("mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Reduz 350 pontos de vida do adversário.",
        elemento: "Água",
        estrelas: 6,
        raça: "Serpente Marinha",
        imagem: "img/cartas/20.webp",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        stamina: 1,
        mana: 1
    }
];