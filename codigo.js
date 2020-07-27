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
        */



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


      



