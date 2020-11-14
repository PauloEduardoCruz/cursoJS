/*
//                                                                   USANDO OBJ
let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios : [
        { autor: 'Paulo', mensagem: 'bbbx'},
        { autor: 'Marcos', mensagem: 'bbbk'}
    ],
    estaAoVivo : true
}

for(i in postagem){
    console.log(i, postagem[i])
}





//                                                                  USANDO construtor
function ConstrutorPostagem (titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = true
}

const postagem2 = new ConstrutorPostagem('a', 'b', 'c');

postagem2.visualizacoes = 777
for(i in postagem2){
     console.log(i, postagem2[i])
}
*/


//                                                                  USANDO construtor