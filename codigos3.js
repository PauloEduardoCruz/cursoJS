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



//                                                               MINI projeto faixa de preço

/// forma mac
let faixas = [
    {tooltip: 'até R$ 700', minimo: 0, maximo:700},
    {tooltip: 'de R$700 a R$ 1000', minimo: 700, maximo:1000},
    {tooltip: 'R$ 1000 ou mais', minimo: 1000, maximo:99999},
]
console.log(faixas);

// N.A forma
function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip, 
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000),
]

console.log(faixas2);


//                                                               Trabalhando com array

const numeros = [1,2,3]

// adiconando valores no início
numeros.unshift(0)
// Meio
numeros.splice(1,0,'a')
// Fim
numeros.push(5)

console.log(numeros)

for (i in numeros){
    console.log(i, numeros[i])
}


//Buscando tipos primitivos
console.log(numeros.includes('a'))


// Buscando dados em obj
const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'},
    {id:3, nome: 'c'},
]

console.log(marcas.find((marca) => marca.nome == 'c'))



// Removendo elementos de um array
const numeros = [1,2,3,4,5,6]

// Final
const ultimo = numeros.pop()
console.log(ultimo)
console.log(numeros)

// Incio
const primeiro = numeros.shift()
console.log(primeiro)
console.log(numeros)

// Meio
const meio = numeros.splice(2,1)
console.log(meio)
console.log(numeros)


// Juntando dois arrays

const primeiro = [1,2,3]
const segundo = [4,5,6]

//const combinado = primeiro.concat(segundo)
const combinado = [...primeiro, ...segundo] // melhor forma 
console.log(combinado)
*/




