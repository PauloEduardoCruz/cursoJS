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