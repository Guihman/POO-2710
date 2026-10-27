class Pedido {
    numero;
    cliente;
    produto;
    valor;
    status;
    feedback;

    constructor(numero, cliente, produto, valor, status, feedback) {
        this.numero = numero;
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
        this.status = status;
        this.feedback = feedback;
    }

    finalizarPedido() {
        this.status = 'Finalizado';

        if (this.feedback == 'Negativo') {
            this.valor = this.valor * 1.05;
        }

        console.log('Pedido ' + this.numero + ' finalizado!');
        console.log('Valor do pedido: R$' + this.valor.toFixed(2));
    }

    cancelarPedido() {
        this.status = 'Cancelado';
        console.log('Pedido ' + this.numero + ' cancelado!');
    }
}

let pedido1 = new Pedido(1, 'Maria', 'Notebook', 3000, 'Pendente', 'Positivo');
let pedido2 = new Pedido(2, 'João', 'Celular', 1500, 'Pendente', 'Negativo');

pedido1.finalizarPedido();
console.log(pedido1);

pedido2.finalizarPedido();
console.log(pedido2);

pedido1.cancelarPedido();
console.log(pedido1);