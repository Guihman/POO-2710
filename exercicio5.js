class Musica {
    titulo;
    artista;
    album;
    duracao;

    constructor(titulo, artista, album, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.album = album;
        this.duracao = duracao;
    }

    tocar(nomeMusica) {
        if (this.titulo == nomeMusica) {
            console.log('Tocando: ' + this.titulo + ' - ' + this.artista);
        } else {
            console.log('Música não localizada');
        }
    }
}

let musica1 = new Musica('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', '5:55');
let musica2 = new Musica('Imagine', 'John Lennon', 'Imagine', '3:03');
let musica3 = new Musica('Evidências', 'Chitãozinho e Xororó', 'Cowboy do Asfalto', '4:39');

musica1.tocar('Bohemian Rhapsody');
musica2.tocar('Imagine');
musica3.tocar('Evidências');

musica1.tocar('Música errada');