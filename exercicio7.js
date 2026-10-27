class Semaforo {
    corAtual;

    constructor(corAtual) {
        this.corAtual = corAtual;
    }

    abrir() {
        this.corAtual = 'Verde';
        console.log('Sinal verde! Pode passar.');
    }

    fechar() {
        this.corAtual = 'Vermelho';
        console.log('Sinal vermelho! Pare.');
    }

    atencao() {
        this.corAtual = 'Amarelo';
        console.log('Sinal amarelo! Atenção.');
    }
}

let semaforo1 = new Semaforo('Vermelho');

semaforo1.abrir();
console.log(semaforo1);

semaforo1.atencao();
console.log(semaforo1);

semaforo1.fechar();
console.log(semaforo1);