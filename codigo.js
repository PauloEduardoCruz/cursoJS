        //comentando esse bagulho doido
        /*
        alert('Olá mundo')
        confirm('Tu é mano?')
        
        var nome = prompt('Teu nome baitola?')
        alert('Olá, '+ nome + ' tudo bem?')
        


        //somando
        var x1 = Number(prompt('Um valor'))
        var x2 = Number(prompt('outro valor'))
        var s = x1 + x2;
        alert(`A soma entre ${x1} e ${x2} é : ${s}`)
        

        //printf das variaveis de uma forma top
        var nome = prompt('Digite seu nome: ')
        document.write(`<h2 class="tx sombra"> Olá, ${nome}! Seu nome tem ${nome.length} letras. </h2>`)
        


        //selecionando por tag
        var corpo = window.document.body
        corpo.style.background = 'gold'

        var paraG = window.document.getElementsByTagName('p')[1]
        window.document.write('Esta escrito assim: ' + paraG.innerText)
        paraG.style.color = 'blue'
        


        //selecionando por id
        var paraG = window.document.getElementById('id do bagulho aqui')
        window.document.write('Esta escrito assim: ' + paraG.innerText)

        //selecionando por nome
        var paraG = window.document.getElementsByName('nome do bagulho aqui')[0]
        

        //selecionando por CLASSE e querySelector(que eu nao entendi muito bem)
        var paraGra = window.document.getElementsByClassName('tx')[0]
        //var paraGra =window.document.querySelector('p.tx')
        paraGra.style.color = 'yellow'
       



        var numero1 = window.document.getElementsByClassName('bloco')[0]
        numero1.addEventListener('click', um)
        function um(){
            numero1.style.background = 'black'
            numero1 = '1' 

            var result = window.document.getElementById('rest')
            result.innerText =  numero1
        }

        
        var numero2 = window.document.getElementsByClassName('bloco')[1]
        numero2.addEventListener('click', dois)
        function dois(){
            numero2.style.background = 'black'
            numero2 = '2'

            var result = window.document.getElementById('rest')
            result.innerText = numero2
        }
    
        


        









        //interatividade e functions
        var a = window.document.getElementsByClassName('quadrado')[0]
        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)

        function clicar() {
            a.innerText = 'clicada ta adpt'
            a.style.background = 'red' 
        }

        function entrar() {
            a.innerText = 'enter'
        }

        function sair() {
            a.innerText = 'saiu'
            a.style.background = 'black'
        }
        

        function somar() {
            var tn1 = window.document.getElementById('txtn1')
            var tn2 = window.document.getElementById('txtn2')
            var res = window.document.getElementById('res')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 + n2
            res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
        }


       



function calcular() {
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.getElementsByClassName('res')[0]
    var vel = Number(txtv.value)

    res.innerHTML = `Sua velocidade é: ${vel}Km/h`
    if (vel > 60){
        res.innerHTML += '<p> Segura a multa otario </p>'
    }
    res.innerHTML += '<p> Dirija sempre com sinto de segurança </p>'
}
*/




/*
function verificar() {
    var txtv = window.document.querySelector('input#txtvel')
    var vel = (txtv.value)

    var res = window.document.querySelector('div#res')
    res.innerHTML = `<p>Você está em <strong>${vel}</strong><p>`

    if (vel.toUpperCase() == 'BRASIL') {
        res.innerHTML += '<p>Você é <strong>Brasileiro!</strong><p>'
    } else {
        res.innerHTML += '<p>Você é <strong>Estrangeiro!</strong><p>'
    }
}



function votante() {
    var recipiente = window.document.getElementById('txtID')
    var idade = Number(txtID.value)

    var tela = window.document.getElementsByClassName('tela')[0]
    //tela.innerHTML = `sua idade: ${idade}` TEM QUE COLOCAR O MAIS NOS OUTROS PRA ESSE AAPRECER

    if (idade >= 18 && idade <= 70) {
        tela.innerHTML = `tu vota!`
    } else if (idade >= 16 && idade <= 17 || idade > 70){
        tela.innerHTML = `opicional`
    }else 
        tela.innerHTML = `Não vota`    
}



function diaSemana() {
    var agora = new Date()
    var diaS = agora.getDay()

    var mostraDia = window.document.getElementsByClassName('mostraDia')[0]

    switch (diaS) {
        case 0:
            mostraDia.innerHTML = `Domingo du dale` 
            break;
        case 1:
            mostraDia.innerHTML = `Segunda du dale` 
            break;
        case 2:
            mostraDia.innerHTML = `Terça du dale` 
            break;
        case 3:
            mostraDia.innerHTML = `Quarta du dale` 
            break;
        case 4:
            mostraDia.innerHTML = `Quinta du dale` 
            break;
        case 5:
            mostraDia.innerHTML = `Sexta du dale` 
            break;
        case 6:
            mostraDia.innerHTML = `Sabado du dale` 
            break;
        default:
            mostraDia.innerHTML = `dia FAKE du dale` 
            break;
    } 
}

*/































































function carregar() {
    var msg = window.document.getElementsByClassName('msg')[0]
    var fot = window.document.getElementsByClassName('fot')[0]
    
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        fot.src = "/_img/diaf.png"
        document.body.style.background = '#e9a03e'

    } else if (hora >= 12 && hora < 18) {
        fot.src = "/_img/tardef.png"
        document.body.style.background = '#467397'
    } else {
        fot.src = "/_img/noitef.png"
        document.body.style.background = '#152342'
    }
}

function rodar() {
    var screen = window.document.body.getElementsByClassName('screen')[0]

    var txtIN = document.getElementById('txtIN')

    var txtFIM = document.getElementById('txtFIM')

    var txtPS = document.getElementById('txtPS')

    var x = 10
 
    // vendo se o input ta vazio, pra funcinar não posso ter convertido pra number
    if(txtIN.value.length == 0 || txtFIM.value.length == 0 || txtPS.value.length == 0){
        alert('falta dado')

    } else {
        var txtIN = Number(txtIN.value)
        var txtFIM = Number(txtFIM.value)
        var txtPS = Number(txtPS.value)

        if(txtPS <= 0){
            txtPS = 1
        }

        //contando Cres
        if (txtIN < txtFIM){
            for (i = txtIN ; i <= txtFIM; i=i + txtPS) {
                screen.innerHTML += ` _ ${i} _ <br>`
            } 
        } else{
            //Contando Decres
            for (i = txtIN ; i >= txtFIM; i=i - txtPS) {
                screen.innerHTML += ` _ ${i} _ <br>`
            }
        }

    }
}



function tabulada() {
    
    var txtTAB = window.document.getElementById('txtTAB')
    var n = Number(txtTAB.value)


    
    var tab = window.document.getElementById('seltab')

    //limpando para não repetir tabuadas
    tab.innerHTML = ''
    let i = 1
    while (i <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        tab.appendChild(item)
        i++
    }
<<<<<<< HEAD

}

























//var veio = adicionar()
var h = 45
var vetorA = [10, 200]
vetorA.push(h)
//vetorA = adicionar(vetorA)

var stela = window.document.getElementsByClassName('segTELA')[0]
stela.innerText += vetorA[0]




function fim() {
    var stela = window.document.getElementsByClassName('segTELA')[0]
    stela.innerText += '1'
}




// obj pegar o VALOR e tranferir pra um vetor fora da função

function adicionar() {
    var valor = window.document.getElementById('dsVALOR')
    var valor = Number(valor.value)
    var tela = window.document.getElementById('dsTELA')

    //var vetor[outro parametro que preciso criar] = valor
    //vetor[0]= valor

   //tela.innerHTML = ''

    let item = document.createElement('option')
    item.text = `Valor ${valor} adicionado`
    //item.text = `${n} x ${i} = ${n*i}`
    tela.appendChild(item)


    return voltar
}

//adiciona o valor 7 no ultomo lugar do vetor
//vetorA.push(7) 

//cumprimnto do vetor
//vetorA.length

//alinhar os bagulho dentro do vetor
//vetorA.sort()
























let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista') 
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }  
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function add() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let it = document.createElement('option')
        it.text = `valor ${num.value} adicionado`
        lista.appendChild(it)
        res.innerHTML = ' '
    } else {
        window.alert('invalido ou já na lista')
    }
  
    num.value = ''
    num.focus()
}


function finalizar() {
    if(valores.length == 0){
        alert('adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} elementos</p>`
        res.innerHTML += `<p>Maior valor informado: ${maior}</p>`
        res.innerHTML += `<p>Menor valor informado: ${menor}</p>`
        res.innerHTML += `<p>Soma dos valores: ${soma}</p>`
        res.innerHTML += `<p>Media dos valores: ${media}</p>`
    }

}























=======
}
>>>>>>> parent of a423711... caso eu não consiga voltar nesse ponto
