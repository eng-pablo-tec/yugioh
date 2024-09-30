let baralho = [
    {
        numero: 1,
        nome: "Dragão Branco de Olhos Azuis",
        batalhar: 3000,
        ataque: 3000,
        defesa: 2500,
        texto_descricao: "Um Poderoso Dragão.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
                efeitoMaisPontosJogador(500); // Executa o efeito
                this.mana--; // Diminui a stamina em 1
                console.log(`Mana restante: ${this.mana}`);
            } else {
                console.log("Mana insuficiente para executar o efeito.");
            }
        },
        efeito_descricao: "Ganha 500 pontos de vida.",
        elemento: "Luz",
        estrelas: 8,
        raça: "Dragão",
        imagem: "img/cartas/1.webp",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 2,
        nome: "Rei Caveira",
        batalhar: 2500,
        ataque: 2500,
        defesa: 1200,
        texto_descricao: "Um Poderoso Demônio.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
                efeitoMenosPontosAdversario(500); // Executa o efeito
                this.mana--; // Diminui a stamina em 1
                console.log(`Mana restante: ${this.mana}`);
            } else {
                console.log("Mana insuficiente para executar o efeito.");
            }
        },
        efeito_descricao: "Reduz 500 pontos de vida do adversário.",
        elemento: "Trevas",
        estrelas: 6,
        raça: "Demônio",
        imagem: "img/cartas/2.png",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 3,
        nome: "Guerreiro da Espada de Chama Flamejante",
        batalhar: 1800,
        ataque: 1800,
        defesa: 1600,
        texto_descricao: "Um Guerreiro de Espada.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
                efeitoMenosPontosAdversario(500); // Executa o efeito
                this.mana--; // Diminui a stamina em 1
                console.log(`Mana restante: ${this.mana}`);
            } else {
                console.log("Mana insuficiente para executar o efeito.");
            }
        },
        efeito_descricao: "Reduz 250 pontos de vida do adversário.",
        elemento: "Fogo",
        estrelas: 4,
        raça: "Guerreiro",
        imagem: "img/cartas/3.png",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 4,
        nome: "Tremendous Fire",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Um Fogo Gigante.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
                efeitoMenosPontosAdversario(500); // Executa o efeito
                this.mana--; // Diminui a stamina em 1
                console.log(`Mana restante: ${this.mana}`);
            } else {
                console.log("Mana insuficiente para executar o efeito.");
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
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 5,
        nome: "Mago Negro",
        batalhar: 2500,
        ataque: 2500,
        defesa: 2100,
        texto_descricao: "Mestre da Magia.",
    efeito: function() {
        // Verifica se o mana é maior que 0
        if (this.mana > 0) {
            efeitoMaisPontosJogador(500); // Executa o efeito
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Ganha 300 pontos de vida.",
        elemento: "Trevas",
        estrelas: 6,
        raça: "Mago",
        imagem: "img/cartas/5.jpg",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 6,
        nome: "Touro Guerreiro",
        batalhar: 1800,
        ataque: 1800,
        defesa: 1300,
        texto_descricao: "Um Jovem Touro Guerreiro.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
                efeitoMenosPontosAdversario(500); // Executa o efeito
                this.mana--; // Diminui a stamina em 1
                console.log(`Mana restante: ${this.mana}`);
            } else {
                console.log("Mana insuficiente para executar o efeito.");
            }
        },
        efeito_descricao: "Reduz 400 pontos de vida do adversário.",
        elemento: "Terra",
        estrelas: 4,
        raça: "Guerreiro",
        imagem: "img/cartas/6.png",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 7,
        nome: "Dragão Bebe",
        batalhar: 1200,
        ataque: 1200,
        defesa: 700,
        texto_descricao: "Um Dragão Bebe.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
                efeitoMenosPontosAdversario(500); // Executa o efeito
                this.mana--; // Diminui a stamina em 1
                console.log(`Mana restante: ${this.mana}`);
            } else {
                console.log("Mana insuficiente para executar o efeito.");
            }
        },
        efeito_descricao: "Reduz 200 pontos de vida do adversário.",
        elemento: "Fogo",
        estrelas: 5,
        raça: "Dragão",
        imagem: "img/cartas/7.jpg",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 8,
        nome: "Campo de Fogo",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Aumenta o Ataque dos Monstros de Fogo.",
    efeito: function() {
        // Verifica se o mana é maior que 0
        if (this.mana > 0) {
            efeitoMaisPontosJogador(500); // Executa o efeito
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
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
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 9,
        nome: "Dragão Rastejante",
        batalhar: 1600,
        ataque: 1600,
        defesa: 1400,
        texto_descricao: "Dragão Rastejante.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
                efeitoMenosPontosAdversario(500); // Executa o efeito
                this.mana--; // Diminui a stamina em 1
                console.log(`Mana restante: ${this.mana}`);
            } else {
                console.log("Mana insuficiente para executar o efeito.");
            }
        },
        efeito_descricao: "Reduz 300 pontos de vida do adversário.",
        elemento: "Vento",
        estrelas: 4,
        raça: "Dragão",
        imagem: "img/cartas/9.png",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 10,
        nome: "Cura Mágica",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Recupera Pontos de Vida.",
    efeito: function() {
        // Verifica se o mana é maior que 0
        if (this.mana > 0) {
            efeitoMaisPontosJogador(500); // Executa o efeito
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
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
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 11,
        nome: "Poção de Veneno",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Uma Poção de Veneno.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
                efeitoMenosPontosAdversario(500); // Executa o efeito
                this.mana--; // Diminui a stamina em 1
                console.log(`Mana restante: ${this.mana}`);
            } else {
                console.log("Mana insuficiente para executar o efeito.");
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
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 12,
        nome: "Espada da Luz",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Adversario aprisionado por 3 rodadas.",
    efeito: function() {
        // Verifica se o mana é maior que 0
        if (this.mana > 0) {
            efeitoMaisPontosJogador(500); // Executa o efeito
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Adversario aprisionado por 3 rodadas.",
        elemento: "Luz",
        estrelas: 5,
        raça: "Magia",
        imagem: "img/cartas/12.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 13,
        nome: "Mudança de Coração",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Escolha 1 Monstro do adversario, e controle-o.",
    efeito: function() {
        // Verifica se o mana é maior que 0
        if (this.mana > 0) {
            efeitoMaisPontosJogador(500); // Executa o efeito
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Escolha 1 Monstro do adversario, e controle-o.",
        elemento: "Luz",
        estrelas: 5,
        raça: "Magia",
        imagem: "img/cartas/13.jpg",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 14,
        nome: "Escudo Mágico",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Protege Contra Danos.",
    efeito: function() {
        // Verifica se o mana é maior que 0
        if (this.mana > 0) {
            efeitoMaisPontosJogador(500); // Executa o efeito
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Ganha 400 pontos de vida.",
        elemento: "Luz",
        estrelas: 3,
        raça: "Magia",
        imagem: "img/cartas/14.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 15,
        nome: "Saggi, O Palhaço das Trevas",
        batalhar: 600,
        ataque: 600,
        defesa: 1500,
        texto_descricao: "Um Palhaço das Trevas.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {            
            efeitoMenosDividirAdversario(2); // Executa o efeito
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
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
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 16,
        nome: "Peter, O Palhaço das Trevas",
        batalhar: 600,
        ataque: 600,
        defesa: 1500,
        texto_descricao: "Mestre das Trevas.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {            
            efeitoMenosDividirAdversario(2); // Executa o efeito
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
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
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 17,
        nome: "Maga da fé",
        batalhar: 300,
        ataque: 300,
        defesa: 400,
        texto_descricao: "Uma Fada de Luz.",
    efeito: function() {
        // Verifica se o mana é maior que 0
        if (this.mana > 0) {
            efeitoMaisPontosJogador(500); // Executa o efeito
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Recupera uma carta magica do cemiterio.",
        elemento: "Luz",
        estrelas: 1,
        raça: "Fada",
        imagem: "img/cartas/17.webp",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 18,
        nome: "Kame Hame Ha Triplo",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Kame Hame Ha Triplo.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
            efeitoMenosDividirAdversario(4);
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }            
        },
        efeito_descricao: "Reduz 500 pontos de vida do adversário.",
        elemento: "Fogo",
        estrelas: 4,
        raça: "Magia",
        imagem: "img/cartas/18.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 19,
        nome: "O Grande Branco",
        batalhar: 1600,
        ataque: 1600,
        defesa: 800,
        texto_descricao: "Um Peixe das Aguas.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
                efeitoMenosPontosAdversario(500); // Executa o efeito
                this.mana--; // Diminui a stamina em 1
                console.log(`Mana restante: ${this.mana}`);
            } else {
                console.log("Mana insuficiente para executar o efeito.");
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
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 20,
        nome: "Dragão das Águas",
        batalhar: 2250,
        ataque: 2250,
        defesa: 1900,
        texto_descricao: "Um Dragão da Água.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
                efeitoMenosPontosAdversario(500); // Executa o efeito
                this.mana--; // Diminui a stamina em 1
                console.log(`Mana restante: ${this.mana}`);
            } else {
                console.log("Mana insuficiente para executar o efeito.");
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
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 21,
        nome: "Escudo da Luz",
        batalhar: 100,
        ataque: 100,
        defesa: 2600,
        texto_descricao: "Aumenta a Defesa dos Monstros de Luz.",
    efeito: function() {
        // Verifica se o mana é maior que 0
        if (this.mana > 0) {
            efeitoMaisPontosJogador(500); // Executa o efeito
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
    },
        efeito_descricao: "Ganha 400 pontos de vida.",
        elemento: "Terra",
        estrelas: 4,
        raça: "Guerreiro",
        imagem: "img/cartas/21.webp",
        borda: "monstro",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 22,
        nome: "Campo de Montanha",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Muda o campo para Montanha.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
            // Adiciona uma imagem de transição a cada quadro
            const quadros = document.querySelectorAll('.quadro');
            quadros.forEach(quadro => {
                // Cria o elemento de transição
                const transicaoImg = document.createElement('img');
                transicaoImg.src = 'img/campo_montanha.png';
                transicaoImg.style.position = 'absolute';
                transicaoImg.style.top = '0';
                transicaoImg.style.left = '0';
                transicaoImg.style.width = '100%';
                transicaoImg.style.height = '100%';
                transicaoImg.style.opacity = '0';
                transicaoImg.style.transition = 'opacity 2.5s ease-in-out';
                quadro.style.position = 'relative';
                quadro.appendChild(transicaoImg);
    
                // Força a re-renderização para garantir a transição
                requestAnimationFrame(() => {
                    transicaoImg.style.opacity = '1';
                });
    
                // Após a transição, remove o elemento de transição e atualiza o fundo do quadro
                transicaoImg.addEventListener('transitionend', () => {
                    quadro.style.backgroundImage = "url('img/campo_montanha.png')";
                    quadro.removeChild(transicaoImg);
                });
            });

            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
        },
        efeito_descricao: "Aumenta os pontos de monstros favorecidos pela montanha.",
        elemento: "Campo",
        estrelas: 3,
        raça: "Magica de Campo",
        imagem: "img/cartas/22.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 23,
        nome: "Campo de Meditação do Guerreiro",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Muda o campo para Meditação do Guerreiro.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
            // Adiciona uma imagem de transição a cada quadro
            const quadros = document.querySelectorAll('.quadro');
            quadros.forEach(quadro => {
                // Cria o elemento de transição
                const transicaoImg = document.createElement('img');
                transicaoImg.src = 'img/campo_sogen.webp';
                transicaoImg.style.position = 'absolute';
                transicaoImg.style.top = '0';
                transicaoImg.style.left = '0';
                transicaoImg.style.width = '100%';
                transicaoImg.style.height = '100%';
                transicaoImg.style.opacity = '0';
                transicaoImg.style.transition = 'opacity 2.5s ease-in-out';
                quadro.style.position = 'relative';
                quadro.appendChild(transicaoImg);
    
                // Força a re-renderização para garantir a transição
                requestAnimationFrame(() => {
                    transicaoImg.style.opacity = '1';
                });
    
                // Após a transição, remove o elemento de transição e atualiza o fundo do quadro
                transicaoImg.addEventListener('transitionend', () => {
                    quadro.style.backgroundImage = "url('img/campo_sogen.webp')";
                    quadro.removeChild(transicaoImg);
                });
            });
    
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
        },
        efeito_descricao: "Aumenta os pontos de monstros favorecidos pela montanha.",
        elemento: "Campo",
        estrelas: 3,
        raça: "Magica de Campo",
        imagem: "img/cartas/23.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 24,
        nome: "Campo de Agua",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Muda o campo para Agua.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
            // Adiciona uma imagem de transição a cada quadro
            const quadros = document.querySelectorAll('.quadro');
            quadros.forEach(quadro => {
                // Cria o elemento de transição
                const transicaoImg = document.createElement('img');
                transicaoImg.src = 'img/campo_agua.png';
                transicaoImg.style.position = 'absolute';
                transicaoImg.style.top = '0';
                transicaoImg.style.left = '0';
                transicaoImg.style.width = '100%';
                transicaoImg.style.height = '100%';
                transicaoImg.style.opacity = '0';
                transicaoImg.style.transition = 'opacity 2.5s ease-in-out';
                quadro.style.position = 'relative';
                quadro.appendChild(transicaoImg);
    
                // Força a re-renderização para garantir a transição
                requestAnimationFrame(() => {
                    transicaoImg.style.opacity = '1';
                });
    
                // Após a transição, remove o elemento de transição e atualiza o fundo do quadro
                transicaoImg.addEventListener('transitionend', () => {
                    quadro.style.backgroundImage = "url('img/campo_agua.png')";
                    quadro.removeChild(transicaoImg);
                });
            });
    
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
        },
        efeito_descricao: "Aumenta os pontos de monstros favorecidos pela Agua.",
        elemento: "Campo",
        estrelas: 3,
        raça: "Magica de Campo",
        imagem: "img/cartas/24.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 25,
        nome: "Campo de Atlantida",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Muda o campo para Montanha.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
            // Adiciona uma imagem de transição a cada quadro
            const quadros = document.querySelectorAll('.quadro');
            quadros.forEach(quadro => {
                // Cria o elemento de transição
                const transicaoImg = document.createElement('img');
                transicaoImg.src = 'img/campo_atlantida.jpg';
                transicaoImg.style.position = 'absolute';
                transicaoImg.style.top = '0';
                transicaoImg.style.left = '0';
                transicaoImg.style.width = '100%';
                transicaoImg.style.height = '100%';
                transicaoImg.style.opacity = '0';
                transicaoImg.style.transition = 'opacity 2.5s ease-in-out';
                quadro.style.position = 'relative';
                quadro.appendChild(transicaoImg);
    
                // Força a re-renderização para garantir a transição
                requestAnimationFrame(() => {
                    transicaoImg.style.opacity = '1';
                });
    
                // Após a transição, remove o elemento de transição e atualiza o fundo do quadro
                transicaoImg.addEventListener('transitionend', () => {
                    quadro.style.backgroundImage = "url('img/campo_atlantida.jpg')";
                    quadro.removeChild(transicaoImg);
                });
            });
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
        },
        efeito_descricao: "Aumenta os pontos de monstros favorecidos pela montanha.",
        elemento: "Campo",
        estrelas: 3,
        raça: "Magica de Campo",
        imagem: "img/cartas/25.jpg",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 26,
        nome: "Campo de Terra",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Muda o campo para Terra.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
            // Adiciona uma imagem de transição a cada quadro
            const quadros = document.querySelectorAll('.quadro');
            quadros.forEach(quadro => {
                // Cria o elemento de transição
                const transicaoImg = document.createElement('img');
                transicaoImg.src = 'img/campo_terra.webp';
                transicaoImg.style.position = 'absolute';
                transicaoImg.style.top = '0';
                transicaoImg.style.left = '0';
                transicaoImg.style.width = '100%';
                transicaoImg.style.height = '100%';
                transicaoImg.style.opacity = '0';
                transicaoImg.style.transition = 'opacity 2.5s ease-in-out';
                quadro.style.position = 'relative';
                quadro.appendChild(transicaoImg);
    
                // Força a re-renderização para garantir a transição
                requestAnimationFrame(() => {
                    transicaoImg.style.opacity = '1';
                });
    
                // Após a transição, remove o elemento de transição e atualiza o fundo do quadro
                transicaoImg.addEventListener('transitionend', () => {
                    quadro.style.backgroundImage = "url('img/campo_terra.webp')";
                    quadro.removeChild(transicaoImg);
                });
            });
    
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
        },
        efeito_descricao: "Aumenta os pontos de monstros favorecidos pela Terra.",
        elemento: "Campo",
        estrelas: 3,
        raça: "Magica de Campo",
        imagem: "img/cartas/26.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 28,
        nome: "Campo da Floresta",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Muda o campo para Floresta.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
            // Adiciona uma imagem de transição a cada quadro
            const quadros = document.querySelectorAll('.quadro');
            quadros.forEach(quadro => {
                // Cria o elemento de transição
                const transicaoImg = document.createElement('img');
                transicaoImg.src = 'img/campo_floresta.webp';
                transicaoImg.style.position = 'absolute';
                transicaoImg.style.top = '0';
                transicaoImg.style.left = '0';
                transicaoImg.style.width = '100%';
                transicaoImg.style.height = '100%';
                transicaoImg.style.opacity = '0';
                transicaoImg.style.transition = 'opacity 2.5s ease-in-out';
                quadro.style.position = 'relative';
                quadro.appendChild(transicaoImg);
    
                // Força a re-renderização para garantir a transição
                requestAnimationFrame(() => {
                    transicaoImg.style.opacity = '1';
                });
    
                // Após a transição, remove o elemento de transição e atualiza o fundo do quadro
                transicaoImg.addEventListener('transitionend', () => {
                    quadro.style.backgroundImage = "url('img/campo_floresta.webp')";
                    quadro.removeChild(transicaoImg);
                });
            });
    
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
        },
        efeito_descricao: "Aumenta os pontos de monstros favorecidos pela Toon Force.",
        elemento: "Campo",
        estrelas: 3,
        raça: "Magica de Campo",
        imagem: "img/cartas/28.webp",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    },
    {
        numero: 27, 
        nome: "Mundo da Fantasia",
        batalhar: 0,
        ataque: 0,
        defesa: 0,
        texto_descricao: "Muda o campo para Toon.",
        efeito: function() {
            // Verifica se o mana é maior que 0
            if (this.mana > 0) {
            // Adiciona uma imagem de transição a cada quadro
            const quadros = document.querySelectorAll('.quadro');
            quadros.forEach(quadro => {
                // Cria o elemento de transição
                const transicaoImg = document.createElement('img');
                transicaoImg.src = 'img/campo_toon.jpg';
                transicaoImg.style.position = 'absolute';
                transicaoImg.style.top = '0';
                transicaoImg.style.left = '0';
                transicaoImg.style.width = '100%';
                transicaoImg.style.height = '100%';
                transicaoImg.style.opacity = '0';
                transicaoImg.style.transition = 'opacity 2.5s ease-in-out';
                quadro.style.position = 'relative';
                quadro.appendChild(transicaoImg);
    
                // Força a re-renderização para garantir a transição
                requestAnimationFrame(() => {
                    transicaoImg.style.opacity = '1';
                });
    
                // Após a transição, remove o elemento de transição e atualiza o fundo do quadro
                transicaoImg.addEventListener('transitionend', () => {
                    quadro.style.backgroundImage = "url('img/campo_toon.jpg')";
                    quadro.removeChild(transicaoImg);
                });
            });
    
            this.mana--; // Diminui a stamina em 1
            console.log(`Mana restante: ${this.mana}`);
        } else {
            console.log("Mana insuficiente para executar o efeito.");
        }
        },
        efeito_descricao: "Aumenta os pontos de monstros favorecidos pela Toon Force.",
        elemento: "Campo",
        estrelas: 3,
        raça: "Magica de Campo",
        imagem: "img/cartas/27.jpg",
        borda: "spell",
        condicao: "mao",
        condicao_2: "ataque",
        condicao_3: "",
        tributos: 0,
        stamina: 1,
        mana: 1
    }
];