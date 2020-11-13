        //comentando esse bagulho doido


        //selecionando por tag
        var corpo = window.document.body
        corpo.style.background = 'gold'
        



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
       


        //Muda cor background e muda um nome
        var numero1 = window.document.getElementsByClassName('bloco')[0]
        numero1.addEventListener('click', um)
        function um(){
            numero1.style.background = 'black'
            numero1 = '1' 

            var result = window.document.getElementById('rest')
            result.innerText =  numero1
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
            //var n1 = Number(tn1.value)
            //var n2 = Number(tn2.value)
            var n1 = Number(tn1.innerText)
            var n2 = Number(tn2.innerHTML)
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
    var tx = window.document.getElementById('tx')
    var idade = Number(tx.innerText)

    var tela = window.document.getElementById('res')
    tela.innerHTML = `<p> sua idade: ${idade} </p>` 

    if (idade >= 18 && idade <= 70) {
        tela.innerHTML += `tu vota!`
    } else if (idade >= 16 && idade <= 17 || idade > 70){
        tela.innerHTML += `opicional`
    }else 
        tela.innerHTML += `Não vota`    
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
    var msg = window.document.getElementsByClassName('tx')[0]
    var fot = window.document.getElementsByClassName('foto')[0]
    
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        fot.src = "http://hostelexplorer.com.br/new/wp-content/uploads/2018/05/trilha-praia_da_luz-imbituba-praia_do_rosa-hostel_explorer.jpg"
        document.body.style.background = '#e9a03e'

    } else if (hora >= 12 && hora < 18) {
        fot.src = "http://hostelexplorer.com.br/new/wp-content/uploads/2018/05/nascer_do_sol-praia_do_rosa-deck_albergue_explorer.jpg"
        document.body.style.background = '#467397'
    } else {
        fot.src = "http://hostelexplorer.com.br/new/wp-content/uploads/2018/05/lua_cheia-praia_do_rosa-deck_albergue_explorer.jpg"
        document.body.style.background = '#152342'
    }
}



function rodar() {
    var screen = document.getElementById('res')

    var txtIN = document.getElementById('tx')

    var txtFIM = document.getElementById('tx2')

    var txtPS = document.getElementById('tx3')

    var x = 10

    var txtIN = Number(txtIN.innerText)
    var txtFIM = Number(txtFIM.innerText)
    var txtPS = Number(txtPS.innerText)
 
    // vendo se o input ta vazio, pra funcinar não posso ter convertido pra number
    //if(txtIN.value.length == 0 || txtFIM.value.length == 0 || txtPS.value.length == 0){
    //    alert('falta dado')
   // } 

    if(txtIN == 0 || txtFIM == 0 || txtPS == 0){
        alert('falta dado')
    }  else {

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

}


























var h = 45
var vetorA = [10, 200]
vetorA.push(h)

var stela = window.document.getElementsByClassName('')[0]
//stela.innerText += vetorA[2]


function adicionar() {
    var valor = window.document.getElementById('tx')
    var valor = Number(valor.innerText)
    console.log(valor)
    var tela = window.document.getElementById('res')


    let item = document.createElement('option')
    item.text = `Valor ${valor} adicionado`
    tela.appendChild(item)

}

//adiciona o valor 7 no ultomo lugar do vetor
//vetorA.push(7) 

//cumprimnto do vetor
//vetorA.length

//alinhar os bagulho dentro do vetor
//vetorA.sort()























// ENTENDI MAIS OU MENOS
//let num = document.querySelector('input#fnum')
//let lista = document.querySelector('select#flista') 
//let res = document.querySelector('div#res')
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























