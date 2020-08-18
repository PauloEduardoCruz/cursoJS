
/* 
let familia = [ true, 4, 'vem DI dale']

console.log(familia[2])

var a = 'vermelho'
var b = 'azul'

console.log(a)
console.log(b)

var c = a
var a = b 
var b = c

console.log(b)
console.log(b)


function maiorNumero(e, f) {
    if(e > f){
        console.log(e)
        return e
    } else {
        console.log(f)
        return f
    }
}
var tela = 0

tela = maiorNumero(12, 5)

console.log(tela)


//                                                   FIZZBUZZ
var resultado = fizzBuzz(5);
console.log(resultado)

function fizzBuzz(entrada) {
    if(typeof entrada != 'number'){
        return 'não é um número'
    }

    if(entrada % 3 == 0 && entrada % 5 == 0){
        return 'fizzBuzz'
    }

    if(entrada % 3 != 0 && entrada % 5 != 0){
        return entrada
    }

    if (entrada % 3 == 0) {
        return 'Fizz'
    } 

    if (entrada % 5 == 0) {
        return 'Buzz'
    } 
}





//                                                       RADAR
radar(130);

function radar(velocidade) {

    if (velocidade <= 70) {
        console.log('vai tranquilo')
    } else {
        const pontos = Math.floor(((velocidade - 70) / 5));

        if(pontos >= 12){
            console.log('Perdeu a carteira')
        } else{
            console.log('Pontos',pontos)
        }
    }
}




                                                //par ou impar
parEip(5)

function parEip(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 == 0) {
            console.log(i,'é PAR')
        } else{
            console.log(i,'IMPAR')
        }
    }

}
*/


const filme = {
    titulo : ': Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'thor'
}


exibeGeral(filme)

function exibeGeral(obj) {

    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop, obj[prop])
        }
    }

}