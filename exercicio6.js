class Pessoa {
    nome;
    idade;
    profissao;
    cidade;
    renda;

    constructor(nome, idade, profissao, cidade, renda) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.cidade = cidade;
        this.renda = renda;
    }

    apresentar() {
        if (this.idade > 60) {
            this.renda = this.renda * 1.05;
        }

        console.log('Meu nome é ' + this.nome + ', tenho ' + this.idade + ' anos, sou ' + this.profissao + ', moro em ' + this.cidade + ' e minha renda é R$' + this.renda.toFixed(2));
    }
}

let pessoa1 = new Pessoa('Maria', 25, 'Professora', 'Araçatuba', 3000);
let pessoa2 = new Pessoa('João', 65, 'Aposentado', 'Birigui', 2500);
let pessoa3 = new Pessoa('Pedro', 70, 'Médico', 'São Paulo', 8000);

pessoa1.apresentar();
pessoa2.apresentar();
pessoa3.apresentar();