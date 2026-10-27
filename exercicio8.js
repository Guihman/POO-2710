class TimeFutebol {
    nome;
    cidade;
    quantidadeJogadores;
    quantidadeTitulos;

    constructor(nome, cidade, quantidadeJogadores, quantidadeTitulos) {
        this.nome = nome;
        this.cidade = cidade;
        this.quantidadeJogadores = quantidadeJogadores;
        this.quantidadeTitulos = quantidadeTitulos;
    }

    mostrarInformacoes() {
        console.log('Nome: ' + this.nome);
        console.log('Cidade: ' + this.cidade);
        console.log('Quantidade de jogadores: ' + this.quantidadeJogadores);
        console.log('Quantidade de títulos: ' + this.quantidadeTitulos);

        if (this.quantidadeJogadores > 11) {
            console.log('Tem um jogador a mais!');
        } else if (this.quantidadeJogadores < 11) {
            console.log('Está faltando jogadores!');
        } else {
            console.log('Time pode jogar!');
        }
    }
}

let time1 = new TimeFutebol('Corinthians', 'São Paulo', 11, 30);
let time2 = new TimeFutebol('Santos', 'Santos', 10, 8);

time1.mostrarInformacoes();
time2.mostrarInformacoes();