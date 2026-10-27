class Celular {
    marca;
    modelo;
    cor;
    bateria;

     constructor(marca, modelo, cor, bateria) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.bateria = bateria;
    }

    ligar() {
        console.log('Celular ligado');
    }

    desligar() {
        console.log('Celular desligado');
    }

    carregarBateria(percentual) {
        this.bateria += percentual;

        if (this.bateria > 100) {
            this.bateria = 100;
        }

        console.log('Bateria: ' + this.bateria + '%');
    }
}

let celular1 = new Celular('Samsung', 'Galaxy S24', 'Preto', 50);

console.log(celular1);

celular1.ligar();
celular1.carregarBateria(60);
celular1.desligar();

console.log(celular1);
