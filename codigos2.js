document.body.style.background = '#333'
var x = 0
var umaVez = [0, 0, 0, 0, 0, 0, 0, 0, 0]


function velha(){
    a1.innerHTML = ''
    a2.innerHTML = ''
    a3.innerHTML = ''
    a4.innerHTML = ''
    a5.innerHTML = '.'
    a6.innerHTML = ''
    a7.innerHTML = ''
    a8.innerHTML = ''
    a9.innerHTML = ''
    umaVez = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    x = 0
    document.body.style.background = '#333'
}


var p1 = document.getElementById('p1')
var pontosJ1 = 0
function jogador1(){
    a1.innerHTML = ''
    a2.innerHTML = ''
    a3.innerHTML = ''
    a4.innerHTML = ''
    a5.innerHTML = '.'
    a6.innerHTML = ''
    a7.innerHTML = ''
    a8.innerHTML = ''
    a9.innerHTML = ''
    umaVez = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    x = 0
    pontosJ1++
    p1.innerHTML=pontosJ1
    document.body.style.background = '#333'
}


var p2 = document.getElementById('p2')
var pontosJ2 = 0
function jogador2(){
    a1.innerHTML = ''
    a2.innerHTML = ''
    a3.innerHTML = ''
    a4.innerHTML = ''
    a5.innerHTML = '.'
    a6.innerHTML = ''
    a7.innerHTML = ''
    a8.innerHTML = ''
    a9.innerHTML = ''
    umaVez = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    x = 0
    pontosJ2++
    p2.innerHTML=pontosJ2
    document.body.style.background = '#333'
}




var a1 = document.getElementsByClassName('a1')[0]
function a1f(){
    if(umaVez[0] == 0){
        if(x == 0){
            a1.innerHTML = 'X'
            x = 1
            document.body.style.background = 'tomato'
        } else{
            a1.innerHTML = 'O'
            x = 0
            document.body.style.background = 'teal'
        }
        umaVez[0]=1
    }
}

var a2 = document.getElementsByClassName('a2')[0]
function a2f(){
    if(umaVez[1] == 0){
        if(x == 0){
            a2.innerHTML = 'X'
            x = 1
            document.body.style.background = 'tomato'
        } else{
            a2.innerHTML = 'O'
            x = 0
            document.body.style.background = 'teal'
        }
        umaVez[1]=1
    }
}


var a3 = document.getElementsByClassName('a3')[0]
function a3f(){
    if(umaVez[2] == 0){
        if(x == 0){
            a3.innerHTML = 'X'
            x = 1
            document.body.style.background = 'tomato'
        } else{
            a3.innerHTML = 'O'
            x = 0
            document.body.style.background = 'teal'
        }
        umaVez[2]=1
    }
}

var a4 = document.getElementsByClassName('a4')[0]
function a4f(){
    if(umaVez[3] == 0){
        if(x == 0){
            a4.innerHTML = 'X'
            x = 1
            document.body.style.background = 'tomato'
        } else{
            a4.innerHTML = 'O'
            x = 0
            document.body.style.background = 'teal'
        }
        umaVez[3]=1
    }
}

var a5 = document.getElementsByClassName('a5')[0]
function a5f(){
    if(umaVez[4] == 0){
        if(x == 0){
            a5.innerHTML = 'X'
            x = 1
            document.body.style.background = 'tomato'
        } else{
            a5.innerHTML = 'O'
            x = 0
            document.body.style.background = 'teal'
        }
        umaVez[4]=1
    }
}

var a6 = document.getElementsByClassName('a6')[0]
function a6f(){
    if(umaVez[5] == 0){
        if(x == 0){
            a6.innerHTML = 'X'
            x = 1
            document.body.style.background = 'tomato'
        } else{
            a6.innerHTML = 'O'
            x = 0
            document.body.style.background = 'teal'
        }
        umaVez[5]=1
    }
}

var a7 = document.getElementsByClassName('a7')[0]
function a7f(){
    if(umaVez[6] == 0){
        if(x == 0){
            a7.innerHTML = 'X'
            x = 1
            document.body.style.background = 'tomato'
        } else{
            a7.innerHTML = 'O'
            x = 0
            document.body.style.background = 'teal'
        }
        umaVez[6]=1
    }
}

var a8 = document.getElementsByClassName('a8')[0]
function a8f(){
    if(umaVez[7] == 0){
        if(x == 0){
            a8.innerHTML = 'X'
            x = 1
            document.body.style.background = 'tomato'
        } else{
            a8.innerHTML = 'O'
            x = 0
            document.body.style.background = 'teal'
        }
        umaVez[7]=1
    }
}

var a9 = document.getElementsByClassName('a9')[0]
function a9f(){
    if(umaVez[8] == 0){
        if(x == 0){
            a9.innerHTML = 'X'
            x = 1
            document.body.style.background = 'tomato'
        } else{
            a9.innerHTML = 'O'
            x = 0
            document.body.style.background = 'teal'
        }
        umaVez[8]=1
    }
}






























/*

var display = document.getElementById('display')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var comecar = document.getElementById('comecar')



var cronometroSeg
var minutoAtual
var segundoAtual
var interval

for (var i = 0; i <= 60; i++) {
    minutos.innerHTML += '<option value="'+i+'">'+i+'</option>'
    
}

for (var i = 1; i <= 60; i++) {
    segundos.innerHTML += '<option value="'+i+'">'+i+'</option>'  
}

comecar.addEventListener('click', function(){
    minutoAtual = minutos.value
    segundoAtual = segundos.value

    display.childNodes[1].innerHTML = minutoAtual + ":" +segundoAtual

    interval = setInterval(function(){
        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59
            } else{
                //document.getElementById("sound").play()
                clearInterval(interval)
            }
        }

        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual
    },1000);
})


comecar.addEventListener('click', function(){
    comecar.innerHTML = "X"
})
*/
