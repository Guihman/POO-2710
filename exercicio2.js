class Bairro {
    nome;
    qtde_habitantes;
    faixa_etaria;
    media_renda_familiar;

        mostrarDados() {
        console.log("Nome do bairro: " + this.nome);
        console.log("Quantidade de habitantes: " + this.qtde_habitantes);
        console.log("Faixa etária: " + this.faixa_etaria);
        console.log("Média da renda familiar: R$ " + this.media_renda_familiar);
    }
}

let bairro = new Bairro();
bairro.nome = "Centro";
bairro.qtde_habitantes = 5000;
bairro.faixa_etaria = "Adultos";
bairro.media_renda_familiar = 3000;

bairro.mostrarDados();