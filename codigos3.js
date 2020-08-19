
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



somando(5)

function somando(limite) {
    var soma=0

    for (let i = 0; i <= limite; i++) {

        if (i % 3 == 0) {
            console.log(i)
            soma=soma+i
        }
        if (i % 5 == 0) {
            console.log(i)
            soma=soma+i
        }
    }
    console.log('Valor da soma: ',soma)
}




var array = [90,90,89]

funcNotas(array)


function funcNotas(notas) {
    var soma = 0
    for (let index = 0; index < 3; index++) {
        console.log(notas[index])
        soma = soma + notas[index]
    }

    soma = soma / 3
    console.log('Média dos valores:',soma)

    if (soma < 60) {
        console.log('F') 
    } else{
        if (soma < 70) {
            console.log('D')
        }else{
            if (soma < 80) {
                console.log('C')
            } else{
                if (soma < 90) {
                    console.log('B')
                } else {
                    if (soma <= 100) {
                        console.log('A')
                    }
                }
            }
        }
    }
}

*/





